'use client'

import {
  Search, FileText, Code2, Wrench, CheckCircle, Package, Headphones,
} from 'lucide-react'
import { PROCESS_STEPS } from '@/lib/constants'
import { useIntersection } from '@/hooks/useIntersection'
import { cn } from '@/lib/utils'

const ICON_MAP = {
  Search, FileText, Code2, Wrench, CheckCircle, Package, HeadphonesIcon: Headphones,
} as const

type IconName = keyof typeof ICON_MAP

function ProcessStep({
  step,
  index,
  isLast,
}: {
  step: typeof PROCESS_STEPS[number]
  index: number
  isLast: boolean
}) {
  const { ref, isVisible } = useIntersection({ threshold: 0.1 })
  const Icon = ICON_MAP[step.icon as IconName] || CheckCircle

  return (
    <li
      ref={ref as React.RefObject<HTMLLIElement>}
      className={cn(
        'flex lg:flex-col items-start lg:items-center lg:text-center gap-4 lg:gap-0 group',
        'transition-all duration-500 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
      aria-label={`Etapa ${step.number}: ${step.title}`}
    >
      {/* Step circle */}
      <div className="relative flex-shrink-0 mb-3 lg:mb-4">
        <div
          className={cn(
            'w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center',
            'bg-white border-2 border-primary-200 shadow-card',
            'transition-all duration-300 ease-out',
            'group-hover:scale-110 group-hover:border-primary-500 group-hover:shadow-card-hover',
            isLast ? 'border-primary-500 bg-primary-50' : ''
          )}
        >
          <Icon
            className={cn(
              'w-7 h-7 transition-colors duration-300',
              isLast ? 'text-primary-600' : 'text-primary-500 group-hover:text-primary-600'
            )}
            aria-hidden="true"
          />
        </div>
        <span
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary-600 text-white text-xs font-bold flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        >
          {step.number}
        </span>
      </div>

      {/* Step content */}
      <div className="flex-1 lg:flex-none">
        <h3 className="text-sm font-bold text-gray-900 mb-1 lg:mb-2 transition-colors duration-300 group-hover:text-primary-700">
          {step.title}
        </h3>
        <p className="text-xs text-gray-600 leading-relaxed max-w-[150px] mx-auto hidden lg:block">
          {step.description}
        </p>
        <p className="text-xs text-gray-600 leading-relaxed lg:hidden">
          {step.description}
        </p>
      </div>
    </li>
  )
}

export function ProcessSection() {
  const { ref: headerRef, isVisible: headerVisible } = useIntersection({ threshold: 0.1 })

  return (
    <section
      id="processo"
      aria-labelledby="process-heading"
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
            Como Trabalhamos
          </span>
          <h2
            id="process-heading"
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Do diagnóstico à entrega com excelência técnica
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Nossa metodologia garante que cada projeto seja executado com precisão,
            transparência e mínima interferência na sua operação.
          </p>
        </div>

        {/* Process Steps */}
        <ol
          className="relative"
          aria-label="Etapas do processo de trabalho"
          role="list"
        >
          {/* Connector line — desktop */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-100 via-primary-400 to-primary-100 mx-36"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={index}
                isLast={index === PROCESS_STEPS.length - 1}
              />
            ))}
          </div>
        </ol>
      </div>
    </section>
  )
}
