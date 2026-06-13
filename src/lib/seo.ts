import { SITE, CONTACT } from './constants'

// ─── JSON-LD Schema Markup ────────────────────────────────────────────────────

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: CONTACT.phoneDDI,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.state,
      postalCode: CONTACT.address.zip,
      addressCountry: CONTACT.address.country,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    currenciesAccepted: 'BRL',
    paymentAccepted: 'Cash, Check, Invoice',
    areaServed: {
      '@type': 'State',
      name: 'São Paulo',
    },
    knowsAbout: [
      'Automação Industrial',
      'Programação de CLPs',
      'Painéis Elétricos',
      'Instalações Elétricas',
      'Sistemas Supervisórios',
      'SCADA',
      'IHMs',
      'Inversores de Frequência',
      'Engenharia de Automação',
      'Indústria 4.0',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Soluções de Automação Industrial',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Instalações Elétricas Industriais',
            description: 'Instalações elétricas industriais e residenciais, eletro-calhas, quadros elétricos',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Controle e Automação Industrial',
            description: 'CLPs, IHMs, inversores de frequência, servomotores',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Montagem de Painéis Elétricos',
            description: 'Montagem e retrofit de painéis elétricos e de controle',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Projetos Elétricos',
            description: 'Projetos elétricos industriais personalizados',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Programação de CLPs e IHMs',
            description: 'Programação conforme IEC 61131-3: Ladder, ST, FBD',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Manutenção Industrial',
            description: 'Manutenção preventiva e corretiva de máquinas e sistemas elétricos',
          },
        },
      ],
    },
    sameAs: [`https://wa.me/${CONTACT.whatsappNumber}`],
  }
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}/images/logo/rasp-logo.png`,
      width: 220,
      height: 110,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: CONTACT.phoneDDI,
        contactType: 'customer service',
        availableLanguage: 'Portuguese',
        areaServed: 'BR',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.state,
      addressCountry: CONTACT.address.country,
    },
    sameAs: [`https://wa.me/${CONTACT.whatsappNumber}`],
  }
}

export function getFAQSchema(
  items: ReadonlyArray<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: SITE.language,
    publisher: {
      '@id': `${SITE.url}/#organization`,
    },
  }
}
