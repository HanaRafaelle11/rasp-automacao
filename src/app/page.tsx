import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { StatsSection } from '@/components/sections/StatsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { DifferentialsSection } from '@/components/sections/DifferentialsSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { PartnersSection } from '@/components/sections/PartnersSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/sections/Footer'
import { WhatsAppFAB } from '@/components/sections/WhatsAppFAB'

export default function HomePage() {
  return (
    <>
      <Header />

      <main id="conteudo-principal" tabIndex={-1}>
        <Hero />
        <StatsSection />
        <ServicesSection />
        <DifferentialsSection />
        <ProcessSection />
        <PartnersSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppFAB />
    </>
  )
}
