import * as z from 'zod'

const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
]

export const photoSchema = z.object({
  id: z.number().optional(),
  pet_id: z.number(),
  image: z
    .any()
    .refine((files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type), "Only .jpg, .jpeg, .png and .webp formats are supported."),
})

export type Photo = z.infer<typeof photoSchema>