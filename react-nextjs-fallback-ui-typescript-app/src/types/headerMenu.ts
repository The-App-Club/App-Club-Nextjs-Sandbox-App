import { z } from 'zod'

const HeaderMenuSchema = z.object({
  id: z.number(),
  name: z.string(),
  url: z.string(),
  canonicalURL: z.string().nullable(),
})

export type HeaderMenu = z.infer<typeof HeaderMenuSchema>
