import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CONTACT, SITE } from '@/lib/constants'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de Privacidade da RASP Automação — como tratamos seus dados pessoais.',
  alternates: { canonical: `${SITE.url}/politica-privacidade` },
}

export default function PoliticaPrivacidadePage() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <Header />
      <main id="conteudo-principal" className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-primary-600 transition-colors">Início</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-800 font-medium">Política de Privacidade</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Política de Privacidade
          </h1>
          <p className="text-gray-500 mb-10">Última atualização: {currentYear}</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section aria-labelledby="intro">
              <p className="text-gray-600 leading-relaxed">
                A <strong>{SITE.name}</strong> está comprometida com a proteção dos seus dados pessoais,
                em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
                Esta política explica como coletamos, usamos e protegemos suas informações.
              </p>
            </section>

            {[
              {
                title: '1. Dados que coletamos',
                content: 'Ao utilizar nosso formulário de contato, coletamos: nome completo, endereço de e-mail, número de telefone, serviço de interesse e mensagem. Também podemos coletar automaticamente dados de navegação (como página de origem e parâmetros UTM) para entender como você chegou ao nosso site.',
              },
              {
                title: '2. Como utilizamos seus dados',
                content: 'Utilizamos seus dados exclusivamente para: responder sua solicitação de contato ou orçamento; entrar em contato para apresentar nossos serviços; melhorar nosso atendimento e comunicação. Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais.',
              },
              {
                title: '3. Base legal para tratamento',
                content: 'O tratamento dos seus dados é realizado com base no seu consentimento (fornecido ao preencher o formulário) e no legítimo interesse para a execução dos serviços solicitados, nos termos do Art. 7º da LGPD.',
              },
              {
                title: '4. Retenção dos dados',
                content: 'Seus dados são armazenados pelo tempo necessário para atender à finalidade para a qual foram coletados, ou conforme exigido por lei. Você pode solicitar a exclusão dos seus dados a qualquer momento.',
              },
              {
                title: '5. Seus direitos (LGPD)',
                content: 'Você tem direito a: confirmar se tratamos seus dados; acessar seus dados; corrigir dados incompletos ou incorretos; solicitar exclusão; revogar consentimento a qualquer momento. Para exercer seus direitos, entre em contato conosco.',
              },
              {
                title: '6. Segurança dos dados',
                content: 'Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda ou destruição. Nossa comunicação é realizada por canais seguros.',
              },
              {
                title: '7. Cookies',
                content: 'Nosso site pode utilizar cookies técnicos essenciais para o funcionamento do site. Não utilizamos cookies de rastreamento de terceiros sem seu consentimento.',
              },
              {
                title: '8. Contato do Controlador',
                content: `Para dúvidas sobre esta política ou para exercer seus direitos: E-mail: ${CONTACT.email} | Telefone/WhatsApp: ${CONTACT.phoneFormatted}`,
              },
              {
                title: '9. Alterações nesta política',
                content: 'Podemos atualizar esta política periodicamente. Recomendamos verificá-la regularmente. Alterações significativas serão comunicadas através do site.',
              },
            ].map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </section>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-800 font-medium transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" aria-hidden="true" />
              Voltar ao site
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
