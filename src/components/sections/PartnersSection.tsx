'use client'

import { PARTNERS } from '@/lib/constants'
import { useIntersection } from '@/hooks/useIntersection'
import { cn } from '@/lib/utils'

// ─── Logos SVG fiéis às marcas oficiais ───────────────────────────────────────

const PARTNER_LOGOS: Record<string, React.ReactNode> = {

  // WEG — wordmark azul com curva característica
  WEG: (
    <svg viewBox="0 0 160 60" className="h-9 w-auto" aria-hidden="true" role="img">
      <title>WEG</title>
      {/* Fundo azul oficial WEG */}
      <rect width="160" height="60" rx="4" fill="#003087" />
      {/* Wordmark branco */}
      <text
        x="80"
        y="42"
        textAnchor="middle"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="30"
        letterSpacing="2"
        fill="#ffffff"
      >
        WEG
      </text>
    </svg>
  ),

  // Panasonic — wordmark azul escuro em caixa alta
  Panasonic: (
    <svg viewBox="0 0 200 50" className="h-8 w-auto" aria-hidden="true" role="img">
      <title>Panasonic</title>
      {/* Azul oficial Panasonic #0052A5 */}
      <text
        x="4"
        y="36"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontWeight="700"
        fontSize="28"
        fill="#0052A5"
        letterSpacing="-0.5"
      >
        Panasonic
      </text>
    </svg>
  ),

  // Delta — triângulo + wordmark, azul oficial #0060AF
  Delta: (
    <svg viewBox="0 0 180 55" className="h-9 w-auto" aria-hidden="true" role="img">
      <title>Delta Electronics</title>
      {/* Triângulo estilizado Delta */}
      <polygon points="0,46 22,10 44,46" fill="#0060AF" />
      <polygon points="8,46 22,21 36,46" fill="#ffffff" />
      {/* Wordmark DELTA */}
      <text
        x="52"
        y="40"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontWeight="900"
        fontSize="26"
        fill="#0060AF"
        letterSpacing="1"
      >
        DELTA
      </text>
    </svg>
  ),

  // Prysmian — wordmark vermelho corporativo
  Prysmian: (
    <svg viewBox="0 0 200 50" className="h-8 w-auto" aria-hidden="true" role="img">
      <title>Prysmian Group</title>
      {/* Vermelho oficial Prysmian #E30613 */}
      <text
        x="2"
        y="36"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontWeight="700"
        fontSize="26"
        fill="#E30613"
      >
        Prysmian
      </text>
      {/* Subelemento "Group" em cinza */}
      <text
        x="2"
        y="48"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontWeight="400"
        fontSize="11"
        fill="#555555"
        letterSpacing="3"
      >
        GROUP
      </text>
    </svg>
  ),

  // Metaltex — wordmark cinza escuro/preto industrial
  Metaltex: (
    <svg viewBox="0 0 200 50" className="h-8 w-auto" aria-hidden="true" role="img">
      <title>Metaltex</title>
      <text
        x="2"
        y="36"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight="900"
        fontSize="26"
        fill="#1A1A1A"
        letterSpacing="-0.5"
      >
        METALTEX
      </text>
    </svg>
  ),

  // Celmar — wordmark azul + tagline
  Celmar: (
    <svg viewBox="0 0 180 55" className="h-9 w-auto" aria-hidden="true" role="img">
      <title>Celmar Materiais Elétricos</title>
      {/* Azul corporativo Celmar */}
      <text
        x="2"
        y="34"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight="900"
        fontSize="30"
        fill="#004A8F"
        letterSpacing="1"
      >
        CELMAR
      </text>
      <text
        x="3"
        y="48"
        fontFamily="Arial, sans-serif"
        fontWeight="400"
        fontSize="10"
        fill="#666666"
        letterSpacing="1.5"
      >
        MATERIAIS ELÉTRICOS
      </text>
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
