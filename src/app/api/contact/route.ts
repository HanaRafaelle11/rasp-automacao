import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/schemas'
import { SITE, CONTACT } from '@/lib/constants'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate with Zod
    const result = contactFormSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: result.error.flatten() },
        { status: 400 }
      )
    }

    const data = result.data

    // Build enriched lead data with all marketing fields
    const leadData = {
      // Contact info
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message,

      // Marketing capture
      pageUrl: data.pageUrl || '',
      utmSource: data.utmSource || '',
      utmMedium: data.utmMedium || '',
      utmCampaign: data.utmCampaign || '',
      utmTerm: data.utmTerm || '',
      utmContent: data.utmContent || '',

      // Metadata
      submittedAt: data.submittedAt || new Date().toISOString(),
      receivedAt: new Date().toISOString(),
      source: SITE.url,
    }

    // Build email HTML
    const emailHtml = buildEmailHtml(leadData)
    const emailText = buildEmailText(leadData)

    // Send email via Resend (configure RESEND_API_KEY in .env.local)
    const emailSent = await sendEmail({
      to: process.env.CONTACT_EMAIL || CONTACT.emailLeads,
      subject: `[RASP Automação] Novo Lead: ${data.name} — ${data.service}`,
      html: emailHtml,
      text: emailText,
      replyTo: data.email,
    })

    if (!emailSent.success) {
      console.error('Email send failed:', emailSent.error)
      // Still return success to user — log internally
      // Consider storing in DB as fallback
    }

    console.log('[LEAD]', JSON.stringify({
      timestamp: leadData.receivedAt,
      name: data.name,
      email: data.email,
      service: data.service,
      utm_source: data.utmSource,
      utm_campaign: data.utmCampaign,
    }))

    return NextResponse.json(
      { success: true, message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Contact API Error]', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// ─── Email Sender ─────────────────────────────────────────────────────────────

async function sendEmail({
  to,
  subject,
  html,
  text,
  replyTo,
}: {
  to: string
  subject: string
  html: string
  text: string
  replyTo: string
}): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    // Development: just log
    console.log('[DEV] Email would be sent to:', to)
    console.log('[DEV] Subject:', subject)
    console.log('[DEV] Reply-To:', replyTo)
    return { success: true }
  }

  try {
    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    const { error } = await resend.emails.send({
      from: `RASP Automação <noreply@${new URL(SITE.url).hostname}>`,
      to: [to],
      subject,
      html,
      text,
      replyTo,
    })

    if (error) return { success: false, error: error.message }
    return { success: true }
  } catch (err) {
    return { success: false, error: String(err) }
  }
}

// ─── Email Templates ──────────────────────────────────────────────────────────

function buildEmailHtml(data: Record<string, string>): string {
  const utmSection = [
    data.utmSource && `<tr><td style="padding:4px 0;color:#666;font-size:13px;width:140px">UTM Source</td><td style="padding:4px 0;font-size:13px">${data.utmSource}</td></tr>`,
    data.utmMedium && `<tr><td style="padding:4px 0;color:#666;font-size:13px">UTM Medium</td><td style="padding:4px 0;font-size:13px">${data.utmMedium}</td></tr>`,
    data.utmCampaign && `<tr><td style="padding:4px 0;color:#666;font-size:13px">UTM Campaign</td><td style="padding:4px 0;font-size:13px">${data.utmCampaign}</td></tr>`,
    data.utmContent && `<tr><td style="padding:4px 0;color:#666;font-size:13px">UTM Content</td><td style="padding:4px 0;font-size:13px">${data.utmContent}</td></tr>`,
    data.pageUrl && `<tr><td style="padding:4px 0;color:#666;font-size:13px">Página de Origem</td><td style="padding:4px 0;font-size:13px">${data.pageUrl}</td></tr>`,
  ].filter(Boolean).join('')

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><title>Novo Lead — RASP Automação</title></head>
<body style="margin:0;padding:0;background:#F8FAFC;font-family:Inter,Helvetica,Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px">
    <tr>
      <td>
        <table width="600" cellpadding="0" cellspacing="0" style="margin:0 auto;background:#fff;border-radius:12px;border:1px solid #E2E8F0;overflow:hidden">

          <!-- Header -->
          <tr>
            <td style="background:#1E3A8A;padding:28px 32px">
              <h1 style="margin:0;color:#fff;font-size:20px;font-weight:700">🎯 Novo Lead — RASP Automação</h1>
              <p style="margin:4px 0 0;color:#93C5FD;font-size:13px">${new Date(data.submittedAt).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</p>
            </td>
          </tr>

          <!-- Lead Info -->
          <tr>
            <td style="padding:28px 32px">
              <h2 style="margin:0 0 16px;font-size:16px;color:#1E293B;border-bottom:1px solid #E2E8F0;padding-bottom:12px">Dados do Contato</h2>
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr><td style="padding:6px 0;color:#64748B;font-size:13px;width:140px">Nome</td><td style="padding:6px 0;font-size:13px;font-weight:600;color:#1E293B">${data.name}</td></tr>
                <tr><td style="padding:6px 0;color:#64748B;font-size:13px">E-mail</td><td style="padding:6px 0;font-size:13px"><a href="mailto:${data.email}" style="color:#2563EB">${data.email}</a></td></tr>
                <tr><td style="padding:6px 0;color:#64748B;font-size:13px">Telefone</td><td style="padding:6px 0;font-size:13px"><a href="tel:${data.phone.replace(/\D/g, '')}" style="color:#2563EB">${data.phone}</a></td></tr>
                <tr><td style="padding:6px 0;color:#64748B;font-size:13px">Serviço</td><td style="padding:6px 0"><span style="background:#EFF6FF;color:#1D4ED8;font-size:12px;font-weight:600;padding:3px 10px;border-radius:99px">${data.service}</span></td></tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:0 32px 24px">
              <h2 style="margin:0 0 12px;font-size:16px;color:#1E293B;border-bottom:1px solid #E2E8F0;padding-bottom:12px">Mensagem</h2>
              <p style="margin:0;font-size:14px;color:#475569;line-height:1.7;background:#F8FAFC;padding:16px;border-radius:8px;border-left:3px solid #2563EB">${data.message.replace(/\n/g, '<br>')}</p>
            </td>
          </tr>

          <!-- Marketing Data -->
          ${utmSection ? `
          <tr>
            <td style="padding:0 32px 28px">
              <h2 style="margin:0 0 12px;font-size:16px;color:#1E293B;border-bottom:1px solid #E2E8F0;padding-bottom:12px">📊 Dados de Marketing</h2>
              <table cellpadding="0" cellspacing="0" width="100%">${utmSection}</table>
            </td>
          </tr>` : ''}

          <!-- Actions -->
          <tr>
            <td style="padding:0 32px 28px">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right:12px">
                    <a href="https://wa.me/55${data.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Olá ${data.name}! Recebi seu contato pela RASP Automação.`)}"
                      style="display:inline-block;background:#25D366;color:#fff;font-size:13px;font-weight:600;padding:10px 20px;border-radius:8px;text-decoration:none">
                      💬 Responder via WhatsApp
                    </a>
                  </td>
                  <td>
                    <a href="mailto:${data.email}"
                      style="display:inline-block;background:#2563EB;color:#fff;font-size:13px;font-weight:600;padding:10px 20px;border-radius:8px;text-decoration:none">
                      ✉️ Responder por E-mail
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F1F5F9;padding:16px 32px;border-top:1px solid #E2E8F0">
              <p style="margin:0;font-size:11px;color:#94A3B8;text-align:center">
                RASP Automação · ${SITE.url} · Enviado automaticamente pelo site
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function buildEmailText(data: Record<string, string>): string {
  return `
RASP AUTOMAÇÃO — NOVO LEAD
==========================

Data/Hora: ${new Date(data.submittedAt).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}

DADOS DO CONTATO
Nome: ${data.name}
E-mail: ${data.email}
Telefone: ${data.phone}
Serviço: ${data.service}

MENSAGEM
${data.message}

DADOS DE MARKETING
UTM Source: ${data.utmSource || '—'}
UTM Medium: ${data.utmMedium || '—'}
UTM Campaign: ${data.utmCampaign || '—'}
UTM Content: ${data.utmContent || '—'}
Página de Origem: ${data.pageUrl || '—'}

--
Enviado automaticamente pelo site ${SITE.url}
`.trim()
}
