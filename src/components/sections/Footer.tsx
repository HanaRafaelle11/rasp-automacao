'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, MessageCircle } from 'lucide-react'
import { SITE, CONTACT, WHATSAPP_LINKS } from '@/lib/constants'

const FOOTER_NAV = {
  soluções: [
    { label: 'Instalações Elétricas', href: '#solucoes' },
    { label: 'Controle e Automação', href: '#solucoes' },
    { label: 'Painéis Elétricos', href: '#solucoes' },
    { label: 'Projetos Elétricos', href: '#solucoes' },
    { label: 'Manutenção Industrial', href: '#solucoes' },
    { label: 'Programação CLP/IHM', href: '#solucoes' },
  ],
  empresa: [
    { label: 'Quem Somos', href: '#inicio' },
    { label: 'Como Trabalhamos', href: '#processo' },
    { label: 'Parceiros', href: '#parceiros' },
    { label: 'FAQ', href: '#faq' },
  ],
  contato: [
    { label: `WhatsApp: ${CONTACT.phoneFormatted}`, href: WHATSAPP_LINKS.footer },
    { label: CONTACT.email, href: `mailto:${CONTACT.email}` },
  ],
}

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    if (!href?.startsWith('#')) return
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer
      role="contentinfo"
      className="bg-gray-900 text-gray-400"
      aria-label="Rodapé da RASP Automação"
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="#inicio" onClick={handleNavClick} aria-label="RASP Automação — ir para o início">
              <Image
                src="/images/logo/rasp-logo.png"
                alt="RASP Automação"
                width={140}
                height={70}
                className="h-12 w-auto brightness-0 invert opacity-90 mb-4"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Engenharia de automação industrial de alta performance.
              Soluções integradas em CLPs, painéis elétricos e projetos elétricos.
            </p>

            {/* Contact Details */}
            <div className="flex flex-col gap-2">
              <a
                href={WHATSAPP_LINKS.footer}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar pelo WhatsApp"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>{CONTACT.phoneFormatted}</span>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                aria-label={`Enviar e-mail para ${CONTACT.email}`}
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span className="break-all">{CONTACT.email}</span>
              </a>
            </div>
          </div>

          {/* Soluções */}
          <nav aria-label="Soluções">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Soluções
            </h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_NAV.soluções.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Empresa */}
          <nav aria-label="Empresa">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Empresa
            </h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_NAV.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Contato
            </h3>
            <ul className="space-y-3" role="list">
              {FOOTER_NAV.contato.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-gray-400 hover:text-gray-200 transition-colors break-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_LINKS.footer}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar orçamento técnico pelo WhatsApp"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>
              © {currentYear} {SITE.name} — Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/politica-privacidade"
                className="hover:text-gray-400 transition-colors"
              >
                Política de Privacidade
              </Link>
              <span aria-hidden="true">·</span>
              <span>São Paulo — SP — Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
