import { z } from 'zod'

export const BackendResponseSchema = z.object({
  message: z.string(),
})

export type BackendResponse = z.infer<typeof BackendResponseSchema>
