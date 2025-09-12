import { NextResponse } from 'next/server';
import { render } from '@react-email/components';
import { ContactEmail } from './contact-email';
import { contactFormBodySchema } from '@/lib/schemas';

export async function POST(request: Request) {
  const SMTP_EMAIL = process.env.SMTP_EMAIL;
  const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
  const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL;

  if (!SMTP_EMAIL || !SMTP_PASSWORD || !RECEIVER_EMAIL) {
    console.error(
      'Missing SMTP_EMAIL, SMTP_PASSWORD or RECEIVER_EMAIL environment variables'
    );
    return new Response('Internal Server Error', { status: 500 });
  }

  const body = contactFormBodySchema.safeParse(await request.json());
  if (!body.success) {
    console.error('Error parsing body:', body.error);
    return NextResponse.json('Invalid request body', { status: 400 });
  }
  const { name, surname, email, message } = body.data.user;
  const recaptchaToken = body.data.recaptchaToken;

  try {
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      console.log('Recaptcha verification failed');
      return NextResponse.json('Recaptcha verification failed', {
        status: 400
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Recaptcha verification error:', error.message);
    }
    return NextResponse.json('Internal Server Error', { status: 500 });
  }

  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD
    }
  });

  const emailHtml = await render(
    <ContactEmail
      name={name}
      surname={surname}
      email={email}
      message={message}
    />
  );

  try {
    await transporter.sendMail({
      from: SMTP_EMAIL,
      to: RECEIVER_EMAIL,
      subject: `Nuovo messaggio ricevuto da ${name} ${surname}`,
      html: emailHtml
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json('Internal Server Error', { status: 500 });
  }

  return NextResponse.json('Message sent successfully', { status: 200 });
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
  if (!RECAPTCHA_SECRET_KEY) {
    throw new Error('Missing RECAPTCHA_SECRET_KEY environment variable');
  }

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`
    }
  );
  if (!response.ok) {
    throw new Error('Failed to verify recaptcha');
  }

  const data = await response.json();
  return data.success && data.score >= 0.5;
}
