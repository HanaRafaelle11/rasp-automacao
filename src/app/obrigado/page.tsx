import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, MessageCircle, ArrowRight } from 'lucide-react'
import { WHATSAPP_LINKS } from '@/lib/constants'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { WhatsAppFAB } from '@/components/sections/WhatsAppFAB'

export const metadata: Metadata = {
  title: 'Obrigado pelo Contato',
  description: 'Recebemos sua mensagem! A equipe da RASP Automação entrará em contato em breve.',
  robots: { index: false, follow: false },
}

export default function ObrigadoPage() {
  return (
    <>
      <Header />
      <main id="conteudo-principal" className="min-h-screen flex items-center justify-center py-24 hero-gradient">
        <div className="max-w-lg mx-auto px-4 text-center">
          {/* Success icon */}
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-green-500" aria-hidden="true" />
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Mensagem recebida!
          </h1>
          <p className="text-lg text-gray-600 mb-3">
            Obrigado pelo seu contato, <strong className="text-gray-800">mensagem enviada com sucesso</strong>.
          </p>
          <p className="text-gray-500 mb-10">
            Nossa equipe técnica analisará sua necessidade e entrará em contato
            em até <strong>24 horas</strong>. Caso queira agilizar, fale diretamente no WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINKS.contact}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a RASP Automação pelo WhatsApp agora"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-xl transition-all duration-200 shadow-whatsapp"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Falar no WhatsApp Agora
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-gray-200 text-gray-700 hover:border-primary-300 hover:text-primary-600 font-medium rounded-xl transition-all duration-200"
            >
              <ArrowRight className="w-4 h-4 rotate-180" aria-hidden="true" />
              Voltar ao site
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
