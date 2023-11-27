import * as z from 'zod'

export const petSchema = z.object({
  id: z.number().optional(),
  name: z.string().nonempty(),
  about: z.string().nonempty(),	
  size:  z.string().nonempty(),		
  energy:  z.string().nonempty(),		
  dependency_level: z.string().nonempty(),
  user_id: z.string()
})
export type Pet = z.infer<typeof petSchema>

export const petParamsSchema = z.object({
  id: z.coerce.number()
})
export type PetParams = {
  id: string
}

export const PetQuerySchema = z.object({
  user_id: z.number().optional()
})
export type PetQuery = z.infer<typeof PetQuerySchema>