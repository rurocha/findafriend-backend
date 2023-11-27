import * as z from 'zod'

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  zip_code: z.string().length(8),
  address: z.string(),
  whatsapp: z.string().length(9),
})

export type User = z.infer<typeof userSchema>