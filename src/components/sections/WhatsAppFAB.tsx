'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { CONTACT, WHATSAPP_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function WhatsAppFAB() {
  const [expanded, setExpanded] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [whatsAppUrl, setWhatsAppUrl] = useState<string>(WHATSAPP_LINKS.default)

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setWhatsAppUrl(
        `https://web.whatsapp.com/send?phone=${CONTACT.whatsappNumber}&text=${encodeURIComponent(CONTACT.whatsappDefaultMessage)}`
      )
    }
  }, [])

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 no-print"
      role="complementary"
      aria-label="Canal de contato WhatsApp"
    >
      {/* Expanded tooltip / quick message */}
      {expanded && !dismissed && (
        <div
          className="relative bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-[0_20px_50px_rgba(26,73,88,0.22)] border-2 border-primary-200/90 p-5 w-80 animate-fade-up z-55"
          role="dialog"
          aria-modal="false"
          aria-label="Contato via WhatsApp"
        >
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => setDismissed(true)}
            className="absolute top-4 right-4 p-1.5 text-gray-500 hover:text-gray-800 rounded-full hover:bg-gray-150 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-3 mb-4 pr-4">
            <div className="w-11 h-11 rounded-full bg-whatsapp flex items-center justify-center flex-shrink-0 shadow-sm border border-emerald-600/20">
              <MessageCircle className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-black text-gray-950">RASP Automação</p>
              <p className="text-xs text-green-700 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                Online agora
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-3.5 mb-5 border border-primary-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.01)]">
            <p className="text-sm font-semibold text-gray-800 leading-relaxed">
              Olá! Como podemos ajudar com sua automação industrial? 👋
            </p>
            <p className="text-xs font-bold text-gray-550 mt-1.5 text-right">Equipe de Engenharia</p>
          </div>

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Iniciar conversa no WhatsApp"
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-whatsapp via-[#16a085] to-whatsapp bg-[length:200%_auto] hover:bg-right hover:scale-[1.02] active:scale-[0.98] text-white text-sm font-bold rounded-xl transition-all duration-300 shadow-[0_8px_20px_rgba(18,140,126,0.28)] hover:shadow-[0_10px_25px_rgba(18,140,126,0.38)] focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 border border-emerald-700/10"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Iniciar Conversa
          </a>
        </div>
      )}

      {/* FAB Button */}
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Especialista pelo WhatsApp"
        onClick={(e) => {
          // On desktop, show tooltip first; on mobile open directly
          if (window.innerWidth >= 1024 && !expanded) {
            e.preventDefault()
            setExpanded(true)
            setDismissed(false)
          }
        }}
        className={cn(
          'flex items-center gap-3 bg-gradient-to-r from-whatsapp via-[#16a085] to-whatsapp bg-[length:200%_auto] hover:bg-right',
          'text-white font-bold rounded-full border border-emerald-700/10',
          'shadow-[0_12px_24px_rgba(18,140,126,0.3)] hover:shadow-[0_16px_32px_rgba(18,140,126,0.4)]',
          'hover:scale-[1.05] active:scale-[0.95]',
          'transition-all duration-300',
          'whatsapp-pulse',
          'px-6 py-4.5 sm:px-7',
          'focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2',
        )}
      >
        <MessageCircle className="w-6 h-6 flex-shrink-0" aria-hidden="true" />
        <span className="hidden sm:block text-sm whitespace-nowrap tracking-wide">
          Falar com Especialista
        </span>
      </a>
    </div>
  )
}
