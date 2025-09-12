'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import { contactFormSchema, contactFormBodySchema } from '@/lib/schemas';
import { Spinner } from '@/components/ui/spinner';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      message: '',
      terms: false
    }
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    if (!executeRecaptcha) {
      toast.error('Recaptcha non caricato. Riprova più tardi.', {
        duration: 10000
      });
      return;
    }
    setIsLoading(true);

    const token = await executeRecaptcha('contact_form');
    const { name, surname, email, message } = values;

    const data: z.infer<typeof contactFormBodySchema> = {
      user: { name, surname, email, message },
      recaptchaToken: token
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        const err = await response.json().catch(() => null);
        console.error('Error on response:', err);
        toast.error("Errore durante l'invio del messaggio.", {
          duration: 10000
        });
        return;
      }
      toast.success(
        'Messaggio inviato con successo! Verrai contattato a breve.',
        { duration: 10000 }
      );
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error sending message:', error);
        toast.error("Errore durante l'invio del messaggio.", {
          duration: 10000
        });
      }
    } finally {
      setIsLoading(false);
      form.reset();
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='font-raleway text-paragraph space-y-8'
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='tablet:text-base text-sm'>Nome</FormLabel>
              <FormControl>
                <Input {...field} className='tablet:text-base w-full text-sm' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='surname'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='tablet:text-base text-sm'>
                Cognome
              </FormLabel>
              <FormControl>
                <Input {...field} className='tablet:text-base text-sm' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='tablet:text-base text-sm'>E-Mail</FormLabel>
              <FormControl>
                <Input {...field} className='tablet:text-base text-sm' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='tablet:text-base text-sm'>
                Messaggio
              </FormLabel>
              <FormControl>
                <Textarea {...field} className='tablet:text-base text-sm' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='terms'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className='flex items-center space-x-2'>
                  <Checkbox
                    aria-label='checkbox privacy policy'
                    id='terms'
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className='text-white'
                  />
                  <Label
                    htmlFor='terms'
                    className='flex flex-wrap items-center gap-1'
                  >
                    Ho preso visione della
                    <a
                      href='https://www.iubenda.com/privacy-policy/27117967'
                      target='_blank'
                      rel='noopener noreferrer'
                      title='Privacy Policy'
                      className='hover:text-primary hover:underline'
                    >
                      Privacy Policy
                    </a>
                  </Label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full'>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              Invia <Send />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
