'use client'

import Image from 'next/image'
import {
  Award, Users, MessageSquare, Settings, Shield, Headphones,
  ArrowRight, MessageCircle,
} from 'lucide-react'
import { DIFFERENTIALS, WHATSAPP_LINKS } from '@/lib/constants'
import { useIntersection } from '@/hooks/useIntersection'
import { cn } from '@/lib/utils'

const ICON_MAP = {
  Award, Users, MessageSquare, Settings, Shield, HeadphonesIcon: Headphones,
} as const

type IconName = keyof typeof ICON_MAP

function DifferentialCard({
  item,
  index,
}: {
  item: typeof DIFFERENTIALS[number]
  index: number
}) {
  const { ref, isVisible } = useIntersection({ threshold: 0.1 })
  const Icon = ICON_MAP[item.icon as IconName] || Award

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'group flex gap-4 p-6 bg-gradient-to-br from-white to-gray-50/40 rounded-xl border border-gray-200/85 shadow-[0_4px_15px_rgba(0,0,0,0.03)]',
        'hover:border-primary-400 hover:shadow-[0_15px_35px_rgba(26,73,88,0.12)] hover:-translate-y-1.5',
        'transition-all duration-300 ease-out cursor-default',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary-50 group-hover:bg-primary-650 flex items-center justify-center transition-all duration-300 group-hover:rotate-6">
        <Icon className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
      </div>
      <div>
        <h3 className="text-sm font-bold text-gray-950 mb-1 group-hover:text-primary-750 transition-colors">{item.title}</h3>
        <p className="text-xs font-semibold text-gray-700 leading-relaxed">{item.description}</p>
      </div>
    </div>
  )
}

export function DifferentialsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useIntersection({ threshold: 0.1 })

  return (
    <section
      id="diferenciais"
      aria-labelledby="differentials-heading"
      className="py-20 lg:py-28 section-gradient-alt"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <div
            ref={headerRef as React.RefObject<HTMLDivElement>}
            className={cn(
              'transition-all duration-700 flex flex-col items-start',
              headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            )}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary-100 text-primary-900 border border-primary-300 shadow-sm mb-4">
              Por que escolher a RASP?
            </span>
            <h2
              id="differentials-heading"
              className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight"
            >
              Engenharia especializada com atendimento consultivo
            </h2>
            <p className="text-gray-750 leading-relaxed font-semibold mb-8 text-base">
              Cada projeto começa com um diagnóstico técnico detalhado.
              Entendemos o seu processo antes de propor qualquer solução.
              Porque a solução certa economiza tempo, recursos e evita retrabalho.
            </p>
            <a
              href={WHATSAPP_LINKS.services}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar orçamento técnico com um especialista pelo WhatsApp"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 bg-[length:200%_auto] hover:bg-right hover:scale-[1.03] active:scale-[0.98] text-white font-bold rounded-xl transition-all duration-300 shadow-[0_10px_20px_rgba(31,90,109,0.22)] hover:shadow-[0_12px_24px_rgba(31,90,109,0.32)] group mb-8 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 border border-primary-800/20"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Solicitar Orçamento Técnico
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            {/* Supportive Image to alleviate reading fatigue */}
            <div className="relative w-full rounded-xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-200 aspect-[16/9] max-w-lg mt-2 group shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
              <Image
                src="/images/differentials-visual.png"
                alt="Equipamentos modernos de automação industrial e CLP instalados em painel metálico pela RASP Automação"
                fill
                sizes="(max-w-1024px) 100vw, 500px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right: Differentials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DIFFERENTIALS.map((item, index) => (
              <DifferentialCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
