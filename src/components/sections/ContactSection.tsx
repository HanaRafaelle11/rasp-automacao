'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Clock, MessageCircle, Send, MapPin, CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import { contactFormSchema, type ContactFormData } from '@/lib/schemas'
import { CONTACT, SERVICE_OPTIONS, WHATSAPP_LINKS } from '@/lib/constants'
import { useIntersection } from '@/hooks/useIntersection'
import { cn } from '@/lib/utils'

function useUTMCapture() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const utmData = {
      utmSource: params.get('utm_source') || '',
      utmMedium: params.get('utm_medium') || '',
      utmCampaign: params.get('utm_campaign') || '',
      utmTerm: params.get('utm_term') || '',
      utmContent: params.get('utm_content') || '',
      pageUrl: window.location.href,
    }
    // Store in sessionStorage so form can pick up
    Object.entries(utmData).forEach(([key, value]) => {
      if (value) sessionStorage.setItem(`rasp_${key}`, value)
    })
  }, [])
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const { ref: headerRef, isVisible: headerVisible } = useIntersection({ threshold: 0.1 })

  useUTMCapture()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')

    // Inject marketing data from sessionStorage
    const enrichedData: ContactFormData = {
      ...data,
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      utmSource: sessionStorage.getItem('rasp_utmSource') || '',
      utmMedium: sessionStorage.getItem('rasp_utmMedium') || '',
      utmCampaign: sessionStorage.getItem('rasp_utmCampaign') || '',
      utmTerm: sessionStorage.getItem('rasp_utmTerm') || '',
      utmContent: sessionStorage.getItem('rasp_utmContent') || '',
      submittedAt: new Date().toISOString(),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enrichedData),
      })

      if (!response.ok) throw new Error('Falha no envio')

      setStatus('success')
      reset()

      // Redirect to thank you page
      setTimeout(() => {
        window.location.href = '/obrigado'
      }, 1500)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section
      id="contato"
      aria-labelledby="contact-heading"
      className="py-20 lg:py-28 section-gradient-alt"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={cn(
            'text-center max-w-2xl mx-auto mb-16 transition-all duration-600',
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 border border-primary-200 mb-4">
            Entre em Contato
          </span>
          <h2
            id="contact-heading"
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Solicite um diagnóstico técnico gratuito
          </h2>
          <p className="text-gray-600 text-base">
            Preencha o formulário ou entre em contato diretamente pelo WhatsApp.
            Respondemos em até 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-card p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Enviar mensagem
              </h3>

              {/* Success State */}
              {status === 'success' && (
                <div
                  role="alert"
                  className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl mb-6"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-green-800">Mensagem enviada com sucesso!</p>
                    <p className="text-xs text-green-600">Redirecionando...</p>
                  </div>
                </div>
              )}

              {/* Error State */}
              {status === 'error' && (
                <div
                  role="alert"
                  className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl mb-6"
                >
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-red-800">Erro ao enviar mensagem.</p>
                    <p className="text-xs text-red-600">
                      Tente novamente ou{' '}
                      <a href={WHATSAPP_LINKS.contact} className="underline font-medium">
                        entre em contato pelo WhatsApp
                      </a>.
                    </p>
                  </div>
                </div>
              )}

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                aria-label="Formulário de contato"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  {/* Nome */}
                  <div className="sm:col-span-2">
                    <label htmlFor="contact-name" className="block text-sm font-bold text-gray-900 mb-2">
                      Nome Completo <span aria-label="obrigatório" className="text-red-650">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                      placeholder="Seu nome completo"
                      className={cn(
                        'w-full px-4 py-3.5 rounded-xl border text-sm font-semibold text-gray-900 transition-all shadow-sm',
                        'focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-600 focus:bg-white',
                        'placeholder:text-gray-500',
                        errors.name
                          ? 'border-red-300 bg-red-50 focus:ring-red-400'
                          : 'border-gray-300 bg-gray-50/50 hover:border-primary-300 focus:bg-white'
                      )}
                      {...register('name')}
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3 h-3" aria-hidden="true" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* E-mail */}
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-bold text-gray-900 mb-2">
                      E-mail <span aria-label="obrigatório" className="text-red-650">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                      placeholder="seu@email.com"
                      className={cn(
                        'w-full px-4 py-3.5 rounded-xl border text-sm font-semibold text-gray-900 transition-all shadow-sm',
                        'focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-600 focus:bg-white',
                        'placeholder:text-gray-500',
                        errors.email
                          ? 'border-red-300 bg-red-50'
                          : 'border-gray-300 bg-gray-50/50 hover:border-primary-300 focus:bg-white'
                      )}
                      {...register('email')}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3 h-3" aria-hidden="true" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Telefone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-bold text-gray-900 mb-2">
                      Telefone / WhatsApp <span aria-label="obrigatório" className="text-red-650">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      autoComplete="tel"
                      aria-required="true"
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      aria-invalid={!!errors.phone}
                      placeholder="(11) 99999-9999"
                      className={cn(
                        'w-full px-4 py-3.5 rounded-xl border text-sm font-semibold text-gray-900 transition-all shadow-sm',
                        'focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-600 focus:bg-white',
                        'placeholder:text-gray-500',
                        errors.phone
                          ? 'border-red-300 bg-red-50'
                          : 'border-gray-300 bg-gray-50/50 hover:border-primary-300 focus:bg-white'
                      )}
                      {...register('phone')}
                    />
                    {errors.phone && (
                      <p id="phone-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3 h-3" aria-hidden="true" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Serviço */}
                  <div className="sm:col-span-2">
                    <label htmlFor="contact-service" className="block text-sm font-bold text-gray-900 mb-2">
                      Serviço de Interesse <span aria-label="obrigatório" className="text-red-650">*</span>
                    </label>
                    <select
                      id="contact-service"
                      aria-required="true"
                      aria-describedby={errors.service ? 'service-error' : undefined}
                      aria-invalid={!!errors.service}
                      className={cn(
                        'w-full px-4 py-3.5 rounded-xl border text-sm font-semibold text-gray-900 transition-all shadow-sm cursor-pointer',
                        'focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-600 focus:bg-white',
                        errors.service
                          ? 'border-red-300 bg-red-50'
                          : 'border-gray-300 bg-gray-50/50 hover:border-primary-300 focus:bg-white'
                      )}
                      {...register('service')}
                    >
                      <option value="">Selecione o serviço...</option>
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.service && (
                      <p id="service-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3 h-3" aria-hidden="true" />
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Mensagem */}
                  <div className="sm:col-span-2">
                    <label htmlFor="contact-message" className="block text-sm font-bold text-gray-900 mb-2">
                      Mensagem <span aria-label="obrigatório" className="text-red-650">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      aria-required="true"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-invalid={!!errors.message}
                      placeholder="Descreva brevemente o que você precisa para o seu projeto..."
                      className={cn(
                        'w-full px-4 py-3.5 rounded-xl border text-sm font-semibold text-gray-900 transition-all resize-none shadow-sm',
                        'focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-600 focus:bg-white',
                        'placeholder:text-gray-500',
                        errors.message
                          ? 'border-red-300 bg-red-50'
                          : 'border-gray-300 bg-gray-50/50 hover:border-primary-300 focus:bg-white'
                      )}
                      {...register('message')}
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3 h-3" aria-hidden="true" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    aria-busy={status === 'loading'}
                    className={cn(
                      'flex-1 flex items-center justify-center gap-2 px-7 py-4',
                      'bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 bg-[length:200%_auto] hover:bg-right hover:scale-[1.02] active:scale-[0.98]',
                      'text-white text-base font-bold rounded-xl border border-primary-850/20',
                      'transition-all duration-300 shadow-[0_12px_24px_rgba(31,90,109,0.25)] hover:shadow-[0_16px_32px_rgba(31,90,109,0.35)]',
                      'disabled:opacity-60 disabled:cursor-not-allowed'
                    )}
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                        Enviando diagnóstico...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" aria-hidden="true" />
                        Enviar Mensagem
                      </>
                    )}
                  </button>

                  <a
                    href={WHATSAPP_LINKS.contact}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Prefere falar pelo WhatsApp?"
                    className="flex items-center justify-center gap-2 px-7 py-4 border-2 border-primary-300 bg-primary-50/50 text-primary-850 hover:bg-primary-100 hover:border-primary-450 hover:scale-[1.02] active:scale-[0.98] text-base font-bold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary-500"
                  >
                    <MessageCircle className="w-5 h-5 text-primary-700" aria-hidden="true" />
                    Falar com Especialista
                  </a>
                </div>

                <p className="mt-4 text-xs font-semibold text-gray-500 text-center">
                  Seus dados são tratados com sigilo absoluto e não serão compartilhados com terceiros.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Info — 2 cols */}
          <div className="lg:col-span-2 space-y-5">
            {/* WhatsApp & Telefone */}
            <a
              href={WHATSAPP_LINKS.contact}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp da RASP Automação"
              className="flex items-start gap-4 p-6 bg-whatsapp/5 border border-whatsapp/20 rounded-2xl hover:bg-whatsapp/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-whatsapp/10 flex items-center justify-center flex-shrink-0 group-hover:bg-whatsapp/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-whatsapp-dark" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">WhatsApp Comercial</p>
                <p className="text-base font-bold text-gray-900">{CONTACT.phoneFormatted}</p>
                <p className="text-xs text-gray-600 mt-0.5">Resposta rápida — clique para abrir</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label={`Enviar e-mail para ${CONTACT.email}`}
              className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-2xl hover:border-primary-200 hover:shadow-card transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-600" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">E-mail</p>
                <p className="text-sm font-bold text-gray-900 break-all">{CONTACT.email}</p>
                <p className="text-xs text-gray-600 mt-0.5">Respondemos em até 24h</p>
              </div>
            </a>

            {/* Hours */}
            <div className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary-600" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Horário de Atendimento</p>
                <p className="text-sm text-gray-700">{CONTACT.hours.weekdays}</p>
                <p className="text-sm text-gray-700">{CONTACT.hours.saturday}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-600" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Localização</p>
                <p className="text-sm text-gray-700">São Paulo — SP</p>
                <p className="text-xs text-gray-500 mt-0.5">Atendemos SP e região</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
