'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, MessageCircle } from 'lucide-react'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/lib/utils'
import { WHATSAPP_LINKS } from '@/lib/constants'

const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#solucoes', label: 'Soluções' },
  { href: '#processo', label: 'Como Trabalhamos' },
  { href: '#parceiros', label: 'Parceiros' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
]

export function Header() {
  const scrolled = useScrolled(20)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (!href) return
    const target = document.querySelector(href)
    if (target) {
      const headerHeight = scrolled ? 68 : 88
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <>
      <header
        role="banner"
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(26,73,88,0.12)] border-b border-primary-100 py-3'
            : 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link
              href="#inicio"
              onClick={handleNavClick}
              aria-label="RASP Automação — Ir para o início"
              className="flex-shrink-0 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-md transition-transform duration-200 hover:scale-[1.02]"
            >
              <Image
                src="/images/logo/rasp-logo.png"
                alt="RASP Automação — Engenharia de Automação Industrial"
                width={170}
                height={85}
                priority
                className={cn(
                  "w-auto object-contain transition-all duration-300",
                  scrolled ? "h-10" : "h-12"
                )}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Navegação principal"
              className="hidden lg:flex items-center gap-1.5"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:text-primary-750 hover:bg-primary-50/70 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={WHATSAPP_LINKS.default}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com Especialista pelo WhatsApp"
                className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 bg-[length:200%_auto] hover:bg-right hover:scale-[1.03] active:scale-[0.97] text-white text-sm font-bold rounded-lg transition-all duration-300 shadow-cta hover:shadow-lg focus-visible:ring-2 focus-visible:ring-primary-550 focus-visible:ring-offset-2 border border-primary-700/20"
              >
                <MessageCircle className="w-4.5 h-4.5" aria-hidden="true" />
                <span>Falar com Especialista</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-lg text-gray-800 hover:text-primary-700 hover:bg-primary-50/50 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500"
            >
              {mobileOpen
                ? <X className="w-6 h-6" aria-hidden="true" />
                : <Menu className="w-6 h-6" aria-hidden="true" />
              }
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menu de navegação"
        aria-modal="true"
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[90vw] bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Image
            src="/images/logo/rasp-logo.png"
            alt="RASP Automação"
            width={120}
            height={60}
            className="h-10 w-auto"
          />
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-primary-500"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav aria-label="Menu mobile" className="px-4 py-6">
          <ul className="space-y-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="flex items-center px-4 py-3.5 rounded-lg text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile CTAs */}
          <div className="mt-8 space-y-3">
            <a
              href={WHATSAPP_LINKS.hero}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Falar com Especialista
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
