import { z } from 'zod'

const AccountMenuSchema = z.object({
  id: z.number(),
  name: z.string(),
  url: z.string(),
  canonicalURL: z.string().nullable(),
})

export type AccountMenu = z.infer<typeof AccountMenuSchema>
