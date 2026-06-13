import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SITE, CONTACT } from '@/lib/constants'
import {
  getLocalBusinessSchema,
  getOrganizationSchema,
  getWebSiteSchema,
} from '@/lib/seo'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
})

export const viewport: Viewport = {
  themeColor: '#CC2200',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: `${SITE.name} | Automação Industrial e Instalações Elétricas em SP`,
    template: `%s | ${SITE.name}`,
  },

  description:
    'Especialistas em automação industrial, programação de CLPs e IHMs, montagem de painéis elétricos e projetos elétricos em São Paulo. Atendimento consultivo e suporte técnico especializado. Solicite orçamento gratuito.',

  keywords: [
    'automação industrial São Paulo',
    'programação CLP SP',
    'programação IHM',
    'montagem painel elétrico São Paulo',
    'instalação elétrica industrial SP',
    'retrofit painel elétrico',
    'empresa automação industrial SP',
    'controle e automação industrial',
    'inversores de frequência',
    'projetos elétricos industriais',
    'manutenção industrial SP',
    'sistemas supervisórios SCADA',
    'engenharia de automação',
    'IEC 61131-3',
    'Indústria 4.0 São Paulo',
    'RASP Automação',
  ],

  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Automação Industrial de Alta Performance em SP`,
    description:
      'Transformamos processos industriais com soluções integradas em CLPs, painéis elétricos e automação de máquinas. Atendimento consultivo em São Paulo.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RASP Automação — Engenharia de Automação Industrial em São Paulo',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | Automação Industrial em SP`,
    description:
      'Especialistas em CLPs, painéis elétricos e automação industrial em São Paulo.',
    images: ['/images/og-image.jpg'],
  },

  alternates: {
    canonical: SITE.url,
    languages: {
      'pt-BR': SITE.url,
    },
  },

  verification: {
    google: '',
  },

  other: {
    'revisit-after': '7 days',
    language: 'pt-BR',
    copyright: `© ${new Date().getFullYear()} ${SITE.name}`,
    'contact': CONTACT.email,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const localBusiness = getLocalBusinessSchema()
  const organization = getOrganizationSchema()
  const website = getWebSiteSchema()

  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="48x48" type="image/png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
      </head>
      <body className="bg-gray-50 text-gray-800 antialiased">
        {/* Skip to main content — Accessibility */}
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-primary-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold focus:text-sm"
        >
          Ir para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  )
}
