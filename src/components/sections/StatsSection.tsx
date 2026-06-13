'use client'


import { useCountUp } from '@/hooks/useCountUp'
import { useIntersection } from '@/hooks/useIntersection'
import { STATS } from '@/lib/constants'
import { cn } from '@/lib/utils'

function StatItem({
  value,
  suffix,
  label,
  description,
  delay,
}: {
  value: number
  suffix: string
  label: string
  description: string
  delay: number
}) {
  const { count, ref: countRef } = useCountUp({ end: value, duration: 2200 })
  const { ref: sectionRef, isVisible } = useIntersection({ threshold: 0.1 })

  return (
    <div
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className={cn(
        'flex flex-col items-center text-center p-6 lg:p-8 bg-white h-full hover:bg-primary-50/20 transition-colors duration-300',
        'transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        ref={countRef as React.RefObject<HTMLDivElement>}
        className="text-5xl lg:text-6.5xl font-black text-primary-700 tabular-nums tracking-tight transition-transform duration-300 hover:scale-[1.03] cursor-default"
        aria-live="polite"
        aria-atomic="true"
      >
        {count}{suffix}
      </div>
      <div className="mt-2 text-base font-bold text-gray-900 tracking-tight">{label}</div>
      <div className="mt-1.5 text-sm font-medium text-gray-650 max-w-[190px]">{description}</div>
    </div>
  )
}

export function StatsSection() {
  const { ref, isVisible } = useIntersection({ threshold: 0.1 })

  return (
    <section
      aria-label="Números de impacto da RASP Automação"
      className="section-gradient-alt py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={cn(
            'text-center mb-16 transition-all duration-600',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          <p className="text-xs font-bold text-primary-700 uppercase tracking-widest mb-3">
            Nossa Experiência
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            Números que comprovam nossa trajetória
          </h2>
          <p className="mt-3 text-gray-600 text-base max-w-xl mx-auto font-medium">
            Mais de uma década de engenharia dedicada à automação industrial com resultados concretos.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gradient-to-r from-primary-250 via-primary-350 to-primary-250 p-px rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(26,73,88,0.12)] bg-gray-100 border border-primary-100/50">
          {STATS.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
