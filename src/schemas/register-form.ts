import { z } from 'zod'

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'O nome deve ter pelo menos 2 caracteres' })
    .max(50, { message: 'O nome deve ter no máximo 50 caracteres' }),
  doa: z.date({
    required_error: 'Defina uma data de aniversário',
  }),
})

export type formData = z.infer<typeof formSchema>
