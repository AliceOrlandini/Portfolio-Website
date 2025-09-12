'use client';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { ReactNode } from 'react';

export function ReCaptchaProvider({ children }: { children: ReactNode }) {
  const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY;
  if (!reCaptchaKey) {
    throw new Error(
      'Missing NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY environment variable'
    );
  }
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={reCaptchaKey}
      scriptProps={{ async: true, defer: true, appendTo: 'head' }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
