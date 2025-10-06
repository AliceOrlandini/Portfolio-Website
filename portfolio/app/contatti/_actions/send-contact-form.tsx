'use server';
import { render } from '@react-email/components';
import { ContactEmail } from './contact-email';
import { contactFormBodySchema } from '@/lib/schemas';
import { z } from 'zod';
import nodemailer from 'nodemailer';

export async function sendContactForm(
  formData: z.infer<typeof contactFormBodySchema>
) {
  const SMTP_EMAIL = process.env.SMTP_EMAIL;
  const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
  const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL;

  if (!SMTP_EMAIL || !SMTP_PASSWORD || !RECEIVER_EMAIL) {
    console.error(
      'Missing SMTP_EMAIL, SMTP_PASSWORD or RECEIVER_EMAIL environment variables'
    );
    return { status: 500, message: 'Internal Server Error' };
  }

  const { name, surname, email, message } = formData.user;
  const recaptchaToken = formData.recaptchaToken;

  try {
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      console.log('Recaptcha verification failed');
      return { status: 400, message: 'Recaptcha verification failed' };
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Recaptcha verification error:', error.message);
    }
    return { status: 500, message: 'Internal Server Error' };
  }

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
    return { status: 500, message: 'Internal Server Error' };
  }

  return { status: 200, message: 'Email sent successfully' };
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
