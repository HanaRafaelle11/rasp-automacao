'use client'

import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { FAQ_ITEMS, WHATSAPP_LINKS } from '@/lib/constants'
import { getFAQSchema } from '@/lib/seo'
import { useIntersection } from '@/hooks/useIntersection'
import { cn } from '@/lib/utils'

function FAQItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: typeof FAQ_ITEMS[number]
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const answerId = `faq-answer-${index}`
  const questionId = `faq-question-${index}`

  return (
    <div className={cn(
      'border rounded-xl overflow-hidden transition-all duration-300 border-gray-200',
      isOpen 
        ? 'border-primary-400 border-l-4 border-l-primary-600 shadow-[0_12px_30px_rgba(26,73,88,0.09)] bg-gradient-to-r from-primary-50/20 to-white' 
        : 'bg-white hover:border-primary-250 hover:shadow-sm'
    )}>
      <button
        type="button"
        id={questionId}
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-primary-50/30 transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500"
      >
        <span className={cn(
          "text-base leading-snug transition-colors duration-200",
          isOpen ? "font-bold text-primary-900" : "font-bold text-gray-900"
        )}>
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300',
            isOpen && 'rotate-180 text-primary-600'
          )}
          aria-hidden="true"
        />
      </button>

      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="px-6 pb-5 border-t border-gray-100/70 bg-white">
          <p className="text-sm text-gray-800 font-semibold leading-relaxed pt-4">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { ref: headerRef, isVisible: headerVisible } = useIntersection({ threshold: 0.1 })

  const faqSchema = getFAQSchema(FAQ_ITEMS as unknown as Array<{ question: string; answer: string }>)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 lg:py-28 bg-white"
    >
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={cn(
            'text-center mb-12 transition-all duration-600',
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary-100 text-primary-900 border border-primary-300 shadow-sm mb-4">
            Perguntas Frequentes
          </span>
          <h2
            id="faq-heading"
            className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight"
          >
            Respondemos suas principais dúvidas
          </h2>
          <p className="text-gray-650 text-base font-semibold">
            Não encontrou o que procura? Fale diretamente com um especialista.
          </p>
        </div>

        {/* FAQ Items */}
        <div
          className="space-y-3"
          role="list"
          aria-label="Perguntas frequentes"
        >
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} role="listitem">
              <FAQItem
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-8 bg-gradient-to-b from-gray-50 to-gray-100/60 rounded-2xl border border-gray-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
          <p className="text-gray-950 font-bold mb-2 text-base">
            Não encontrou sua dúvida aqui?
          </p>
          <p className="text-gray-700 text-sm mb-6 font-semibold">
            Nossos especialistas estão prontos para responder qualquer questão técnica.
          </p>
          <a
            href={WHATSAPP_LINKS.faq}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com especialista pelo WhatsApp"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 bg-[length:200%_auto] hover:bg-right hover:scale-[1.03] active:scale-[0.98] text-white font-bold rounded-xl transition-all duration-300 shadow-[0_10px_20px_rgba(31,90,109,0.22)] hover:shadow-[0_12px_24px_rgba(31,90,109,0.32)] focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 border border-primary-800/20"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  )
}
