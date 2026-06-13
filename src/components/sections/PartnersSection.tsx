'use client'

import { PARTNERS } from '@/lib/constants'
import { useIntersection } from '@/hooks/useIntersection'
import { cn } from '@/lib/utils'

const PARTNER_LOGOS: Record<string, React.ReactNode> = {
  WEG: (
    <svg viewBox="0 0 120 40" className="h-8 w-auto text-[#00579F] fill-current" aria-hidden="true">
      <path d="M10 8h8l6 14 6-14h8l6 14 6-14h8l-10 24H38L32 15l-6 13H18L10 8z" />
      <text x="76" y="27" className="font-sans font-black tracking-tighter text-xl">weg</text>
    </svg>
  ),
  Panasonic: (
    <svg viewBox="0 0 120 40" className="h-7 w-auto text-[#0f2c59] fill-current" aria-hidden="true">
      <text x="0" y="28" className="font-sans font-black tracking-tight text-[19px] italic uppercase text-[#0f2c59]">Panasonic</text>
    </svg>
  ),
  Delta: (
    <svg viewBox="0 0 120 40" className="h-8 w-auto text-[#0060A9] fill-current" aria-hidden="true">
      <path d="M12 8l10 20H2L12 8zm0 5L6 25h12L12 13z" />
      <text x="28" y="28" className="font-sans font-black tracking-tight text-[22px]">DELTA</text>
    </svg>
  ),
  Prysmian: (
    <svg viewBox="0 0 120 40" className="h-8 w-auto text-[#002F6C] fill-current" aria-hidden="true">
      <path d="M5 8h15c5 0 9 3 9 7s-4 7-9 7H11v10H5V8zm6 5v5h8c2 0 4-1 4-2.5S21 13 19 13h-8z" />
      <text x="44" y="28" className="font-sans font-black tracking-tighter text-[16px] uppercase">Prysmian</text>
    </svg>
  ),
  Metaltex: (
    <svg viewBox="0 0 120 40" className="h-8 w-auto text-gray-900 fill-current" aria-hidden="true">
      <text x="0" y="28" className="font-sans font-black tracking-tighter text-[19px] uppercase italic">Metaltex</text>
    </svg>
  ),
  Celmar: (
    <svg viewBox="0 0 120 40" className="h-8 w-auto text-primary-750 fill-current" aria-hidden="true">
      <text x="10" y="28" className="font-sans font-black tracking-tighter text-[20px] uppercase">Celmar</text>
    </svg>
  ),
}

function PartnerCard({
  partner,
  index,
}: {
  partner: typeof PARTNERS[number]
  index: number
}) {
  const { ref, isVisible } = useIntersection({ threshold: 0.1 })

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      role="listitem"
      className={cn(
        'flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-gray-200/80 shadow-[0_4px_15px_rgba(0,0,0,0.02)]',
        'hover:border-primary-400 hover:shadow-[0_15px_30px_rgba(26,73,88,0.12)] hover:scale-[1.03]',
        'transition-all duration-300 cursor-default group h-36',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      )}
      style={{ transitionDelay: `${index * 60}ms` }}
      aria-label={`Parceiro: ${partner.name} — ${partner.description}`}
    >
      <div className="h-14 flex items-center justify-center mb-3">
        {PARTNER_LOGOS[partner.name] || (
          <span className="text-xl font-extrabold text-gray-700 group-hover:text-primary-700 transition-colors duration-300">
            {partner.name}
          </span>
        )}
      </div>
      <p className="text-xs text-gray-750 text-center font-bold tracking-tight">{partner.description}</p>
    </div>
  )
}

export function PartnersSection() {
  const { ref: headerRef, isVisible: headerVisible } = useIntersection({ threshold: 0.1 })

  return (
    <section
      id="parceiros"
      aria-labelledby="partners-heading"
      className="py-20 lg:py-24 section-gradient-alt"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={cn(
            'text-center mb-12 transition-all duration-600',
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 border border-primary-200 mb-4">
            Parceiros e Fornecedores
          </span>
          <h2
            id="partners-heading"
            className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3"
          >
            Trabalhamos com as melhores marcas do mercado
          </h2>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            Parcerias com fabricantes líderes garantem qualidade, disponibilidade
            e suporte técnico nos equipamentos que utilizamos.
          </p>
        </div>

        {/* Partners Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          role="list"
          aria-label="Parceiros e fabricantes"
        >
          {PARTNERS.map((partner, index) => (
            <PartnerCard key={partner.name} partner={partner} index={index} />
          ))}
        </div>

        <p className="text-center text-xs text-gray-500 mt-8">
          Trabalhamos com diversos outros fabricantes e fornecedores conforme a necessidade de cada projeto.
        </p>
      </div>
    </section>
  )
}
