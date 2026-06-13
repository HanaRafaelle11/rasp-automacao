'use client'

import {
  Zap, Cpu, LayoutGrid, FileText, Wrench, Code2,
  CheckCircle, MessageCircle, ArrowRight,
} from 'lucide-react'
import { SERVICES, WHATSAPP_LINKS } from '@/lib/constants'
import { useIntersection } from '@/hooks/useIntersection'
import { cn } from '@/lib/utils'

const ICON_MAP = {
  Zap, Cpu, LayoutGrid, FileText, Wrench, Code2,
} as const

type IconName = keyof typeof ICON_MAP

function ServiceCard({
  service,
  index,
}: {
  service: typeof SERVICES[number]
  index: number
}) {
  const { ref, isVisible } = useIntersection({ threshold: 0.1 })
  const Icon = ICON_MAP[service.icon as IconName] || Zap

  const waLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || '5511963987438'}?text=${encodeURIComponent(service.whatsappMessage)}`

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        'service-card group relative flex flex-col bg-gradient-to-b from-white to-gray-50/20 rounded-2xl border border-gray-200/80 overflow-hidden',
        'hover:border-primary-450 hover:shadow-[0_20px_45px_rgba(26,73,88,0.14)] hover:-translate-y-2 hover:bg-white',
        'transition-all duration-300 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
      aria-label={`Serviço: ${service.title} — ${service.subtitle}`}
    >
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-primary-600 to-primary-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" aria-hidden="true" />

      <div className="flex flex-col flex-1 p-6 lg:p-8">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-primary-50 group-hover:bg-primary-600 flex items-center justify-center mb-6 transition-all duration-300 group-hover:rotate-6">
          <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-950 mb-1 group-hover:text-primary-750 transition-colors">
          {service.title}
        </h3>
        <p className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-4">
          {service.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-800 leading-relaxed mb-6 flex-1 font-medium">
          {service.description}
        </p>

        {/* Benefits */}
        <ul className="space-y-2.5 mb-6 border-t border-gray-100 pt-4" role="list" aria-label={`Benefícios: ${service.title}`}>
          {service.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2 text-xs font-semibold text-gray-750">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" aria-hidden="true" />
              {benefit}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Solicitar orçamento técnico para ${service.title} via WhatsApp`}
          className="inline-flex items-center gap-2 text-sm font-bold text-primary-650 hover:text-primary-850 group/link mt-auto focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:rounded-lg"
        >
          <MessageCircle className="w-4 h-4 text-primary-600" aria-hidden="true" />
          Solicitar Orçamento Técnico
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

export function ServicesSection() {
  const { ref, isVisible } = useIntersection({ threshold: 0.1 })

  return (
    <section
      id="solucoes"
      aria-labelledby="services-heading"
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={cn(
            'text-center max-w-2xl mx-auto mb-16 transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 border border-primary-200 mb-4">
            Nossas Soluções
          </span>
          <h2
            id="services-heading"
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Tecnologia e engenharia para sua operação
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Soluções integradas em automação industrial, instalações elétricas e projetos técnicos —
            do diagnóstico à entrega, com excelência e suporte contínuo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-600 mb-4 text-sm">
            Não encontrou o que precisa? Fale com nossos especialistas.
          </p>
          <a
            href={WHATSAPP_LINKS.services}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar orçamento técnico pelo WhatsApp"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-xl transition-all duration-200 shadow-whatsapp hover:shadow-lg focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Solicitar Orçamento Técnico
          </a>
        </div>
      </div>
    </section>
  )
}
