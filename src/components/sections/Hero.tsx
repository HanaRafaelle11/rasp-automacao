'use client'

import Image from 'next/image'
import { MessageCircle, ArrowRight, CheckCircle, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { CONTACT, WHATSAPP_LINKS } from '@/lib/constants'

const HERO_BADGES = [
  'Automação Industrial',
  'Painéis Elétricos',
  'Indústria 4.0',
]

const HERO_BULLETS = [
  'Atendimento Consultivo',
  'Soluções Personalizadas',
  'Suporte Técnico Especializado',
]

export function Hero() {
  const handleScrollToContact = () => {
    const el = document.querySelector('#contato')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="inicio"
      aria-label="Apresentação da RASP Automação"
      className="relative min-h-screen flex items-center overflow-hidden hero-gradient"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(to right, #1E293B 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-100/60 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-primary-50 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {HERO_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-primary-100 text-primary-900 border border-primary-300 shadow-sm"
                >
                  <Zap className="w-3.5 h-3.5 text-primary-600" aria-hidden="true" />
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight mb-6"
            >
              Engenharia de{' '}
              <span className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-850 bg-clip-text text-transparent">
                Automação Industrial
              </span>{' '}
              e Painéis Elétricos
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-800 font-medium leading-relaxed mb-8 max-w-xl"
            >
              Soluções integradas em{' '}
              <strong className="text-primary-800 font-bold">CLPs</strong>,{' '}
              <strong className="text-primary-800 font-bold">IHMs</strong>,{' '}
              <strong className="text-primary-800 font-bold">supervisórios SCADA</strong> e{' '}
              <strong className="text-primary-800 font-bold">montagem de painéis</strong>.
              Do projeto à operação, com excelência técnica.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button
                type="button"
                onClick={handleScrollToContact}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 bg-[length:200%_auto] hover:bg-right hover:scale-[1.03] active:scale-[0.98] text-white text-base font-bold rounded-xl transition-all duration-300 shadow-[0_12px_24px_rgba(31,90,109,0.3)] hover:shadow-[0_16px_32px_rgba(31,90,109,0.4)] group focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 border border-primary-850/20"
                aria-label="Solicitar orçamento técnico gratuito"
              >
                Solicitar Orçamento Técnico
                <ArrowRight
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>

              <a
                href={WHATSAPP_LINKS.hero}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com especialista pelo WhatsApp agora"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-whatsapp via-emerald-600 to-whatsapp bg-[length:200%_auto] hover:bg-right hover:scale-[1.03] active:scale-[0.98] text-white text-base font-bold rounded-xl transition-all duration-300 shadow-[0_12px_24px_rgba(18,140,126,0.25)] hover:shadow-[0_16px_32px_rgba(18,140,126,0.35)] focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 border border-emerald-700/20"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Falar com Especialista
              </a>
            </motion.div>

            {/* Trust bullets */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-3"
              role="list"
              aria-label="Diferenciais principais"
            >
              {HERO_BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                  <CheckCircle
                    className="w-4 h-4 text-green-600 flex-shrink-0"
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right: Visual */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-md lg:max-w-lg"
            >
              {/* Main visual card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-[4/3] ring-8 ring-white/90 shadow-[0_20px_50px_rgba(30,41,59,0.25)] hover:shadow-[0_25px_60px_rgba(30,41,59,0.35)] transition-all duration-300">
                <div className="absolute inset-0 bg-primary-900/20 mix-blend-multiply z-10 pointer-events-none" />
                <Image
                  src="/images/hero-bg.png"
                  alt="Painel elétrico industrial moderno com fiação e controladores lógicos programáveis (CLP) instalados pela RASP Automação"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center z-0 transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] px-5 py-3 border border-primary-100 hover:border-primary-350 transition-colors duration-300"
                aria-hidden="true"
              >
                <div className="text-2xl font-black text-primary-600">15+</div>
                <div className="text-xs text-gray-800 font-bold">Anos de Experiência</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] px-5 py-3 border border-primary-100 hover:border-primary-350 transition-colors duration-300"
                aria-hidden="true"
              >
                <div className="text-2xl font-black text-primary-600">200+</div>
                <div className="text-xs text-gray-800 font-bold">Projetos Entregues</div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Phone contact bar — mobile */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200 py-3 px-4 lg:hidden">
        <a
          href={`tel:+${CONTACT.phoneDDI.replace(/\D/g, '')}`}
          className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-800"
          aria-label={`Ligar: ${CONTACT.phoneFormatted}`}
        >
          Ligue agora:{' '}
          <span className="text-primary-600 font-bold">{CONTACT.phoneFormatted}</span>
        </a>
      </div>
    </section>
  )
}
