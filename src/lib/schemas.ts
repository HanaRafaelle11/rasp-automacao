import { z } from 'zod'

export const contactFormSchema = z.object({
  // User info
  name: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome muito longo'),
  email: z
    .string()
    .email('E-mail inválido')
    .max(200, 'E-mail muito longo'),
  phone: z
    .string()
    .min(10, 'Telefone inválido')
    .max(20, 'Telefone muito longo')
    .regex(/^[\d\s\(\)\-\+]+$/, 'Telefone inválido'),
  service: z
    .string()
    .min(1, 'Selecione um serviço de interesse'),
  message: z
    .string()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(2000, 'Mensagem muito longa'),

  // Marketing capture fields (hidden, filled by JS)
  pageUrl: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmTerm: z.string().optional(),
  utmContent: z.string().optional(),
  submittedAt: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const contactFormDefaults: Partial<ContactFormData> = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}
