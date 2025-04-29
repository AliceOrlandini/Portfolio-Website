"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react";
import { contactFormSchema } from "@/lib/schemas";
import { Spinner } from "@/components/ui/spinner";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import Link from "next/link";
import { sendMail } from "@/lib/api";

export default function FormContacts() {

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      message: "",
      terms: false,
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    setIsLoading(true);

    const { name, surname, email, message } = values;

    const data = {
      client: {
        email: "orlandinialice13@gmail.com"
      },
      user: {
        name: name,
        surname: surname,
        email: email,
        message: message,
      }
    };

    try {
      await sendMail(data);
      toast.success("Messaggio inviato con successo!", {
        duration: 10000
      });
    } catch(error) {
      if (error instanceof Error) {
        console.error("[ERROR] ", error.message);
        toast.error(`Errore durante l'invio del messaggio. ${error.message}`, {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 font-raleway text-paragraph">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm tablet:text-base">
                Nome
              </FormLabel>
              <FormControl>
                <Input {...field} className="text-sm tablet:text-base"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="surname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm tablet:text-base">
                Cognome
              </FormLabel>
              <FormControl>
                <Input {...field} className="text-sm tablet:text-base"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm tablet:text-base">
                E-Mail
              </FormLabel>
              <FormControl>
                <Input {...field} className="text-sm tablet:text-base"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm tablet:text-base">
                Messaggio
              </FormLabel>
              <FormControl>
                <Textarea {...field} className="text-sm tablet:text-base"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    aria-label="checkbox privacy policy"
                    id="terms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="text-white"
                  />
                  <Label htmlFor="terms" className="flex items-center flex-wrap gap-1">
                    Ho preso visione della
                    <Link
                      href="/privacy"
                      target="_blank"
                      className="hover:text-primary hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="w-full flex flex-row items-center justify-center bg-primary font-semibold py-4 px-7 text-white rounded-2xl shadow-md hover:cursor-pointer hover:scale-110 transition-transform duration-300"
        >
          {isLoading ? <Spinner /> : "Invia"}
        </button>
      </form>
    </Form>
  );
}