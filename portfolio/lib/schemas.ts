import { z } from "zod"
export const contactFormSchema = z.object({
	name: z
		.string()
    .nonempty({ message: 'Questo campo è obbligatorio' })
		.min(1, { message: 'Questo campo è obbligatorio' })
		.max(25, { message: 'Nome troppo lungo' }),
  surname: z
		.string()
    .nonempty({ message: 'Questo campo è obbligatorio' })
		.min(1, { message: 'Questo campo è obbligatorio' })
		.max(25, { message: 'Nome troppo lungo' }),
	email: z
		.string()
    .nonempty({ message: 'Questo campo è obbligatorio' })
		.min(1, { message: 'Questo campo è obbligatorio' })
		.email('Mail non valida'),
	message: z
		.string()
    .nonempty({ message: 'Questo campo è obbligatorio' })
		.min(1, { message: 'Questo campo è obbligatorio' })
		.max(500, { message: 'Il testo può essere al massimo 500 caratteri' }),
	terms: z
		.boolean()
    .refine((val) => val === true, {
      message: 'Devi accettare i termini e le condizioni',
    }),
});