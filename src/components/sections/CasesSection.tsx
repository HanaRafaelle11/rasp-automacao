'use client'

import { ArrowRight, MessageCircle } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import { useIntersection } from '@/hooks/useIntersection'
import { cn } from '@/lib/utils'

// [PLACEHOLDER] Replace with real case studies data when available
const CASES_PLACEHOLDER = [
  {
    id: 1,
    sector: 'Indústria de Alimentos',
    title: 'Automação de Linha de Produção',
    result: '+35% eficiência',
    description: 'Implementação de sistema de automação completo com CLPs e IHMs para controle de linha de produção.',
    tags: ['CLP', 'IHM', 'Automação'],
  },
  {
    id: 2,
    sector: 'Metal-Mecânica',
    title: 'Retrofit de Painel de Controle',
    result: '-60% paradas',
    description: 'Modernização de painel elétrico obsoleto com nova lógica de controle e monitoramento em tempo real.',
    tags: ['Painel Elétrico', 'Retrofit', 'Monitoramento'],
  },
  {
    id: 3,
    sector: 'Logística',
    title: 'Sistema Supervisório SCADA',
    result: '100% rastreabilidade',
    description: 'Desenvolvimento de sistema supervisório para monitoramento e controle de esteiras e transportadores.',
    tags: ['SCADA', 'Supervisório', 'Logística'],
  },
]

function CaseCard({
  caseItem,
  index,
}: {
  caseItem: typeof CASES_PLACEHOLDER[number]
  index: number
}) {
  const { ref, isVisible } = useIntersection({ threshold: 0.1 })

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        'group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden',
        'hover:border-primary-200 hover:shadow-card-hover',
        'transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
      aria-label={`Case: ${caseItem.title}`}
    >
      {/* Case image placeholder */}
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl font-extrabold text-gray-300 mb-1">
            {caseItem.result}
          </div>
          <div className="text-xs text-gray-400">
            [PLACEHOLDER — Foto do projeto]
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2">
          {caseItem.sector}
        </p>
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
          {caseItem.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
          {caseItem.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {caseItem.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm font-semibold text-primary-600 group/link">
          Ver case completo
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
        </div>
      </div>
    </article>
  )
}

export function CasesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useIntersection({ threshold: 0.1 })

  return (
    <section
      id="cases"
      aria-labelledby="cases-heading"
      className="py-20 lg:py-28 bg-white"
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
            Cases de Sucesso
          </span>
          <h2
            id="cases-heading"
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Resultados que transformam operações
          </h2>
          <p className="text-gray-500 text-base">
            Projetos entregues com excelência técnica e impacto mensurável para nossos clientes.
          </p>
          {/* Placeholder notice — remove before production */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg">
            <span className="text-xs text-amber-700 font-medium">
              ⚠️ [PLACEHOLDER] Cases ilustrativos — substituir por dados reais
            </span>
          </div>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASES_PLACEHOLDER.map((caseItem, index) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Olá! Quero resultado como nos cases da RASP Automação.')}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar projeto similar pelo WhatsApp"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-cta group"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Quero resultado como esse
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
