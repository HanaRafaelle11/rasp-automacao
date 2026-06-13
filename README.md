<div align="center">

# 🤖 RASP Automação

**Site institucional da RASP Automação — especialistas em automação residencial e comercial.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

[🌐 Visitar Site](https://raspautomacao.com.br) · [📧 Contato](mailto:contato@raspautomacao.com.br) · [💬 WhatsApp](https://wa.me/5511963987438)

</div>

---

## 📋 Sobre o Projeto

Site institucional completo para a **RASP Automação**, desenvolvido com as mais modernas tecnologias web. O projeto inclui:

- 🎯 Landing page otimizada para conversão de leads
- 📬 Formulário de contato com envio de e-mail via [Resend](https://resend.com)
- 🔍 SEO completo com sitemap automático e meta tags dinâmicas
- 🔒 Headers de segurança configurados no Next.js
- ⚡ Performance otimizada (imagens AVIF/WebP, compressão, etc.)
- 📱 Layout totalmente responsivo

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Linguagem | TypeScript 5 |
| Estilização | Tailwind CSS 4 |
| UI Components | Radix UI |
| Animações | Framer Motion |
| Formulários | React Hook Form + Zod |
| E-mail | Resend |
| Ícones | Lucide React |
| SEO | next-sitemap |

---

## 🚀 Iniciando o Desenvolvimento

### Pré-requisitos

- **Node.js** >= 18.17.0
- **npm** >= 9 (ou yarn / pnpm)

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/HanaRafaelle11/rasp-automacao.git
cd rasp-automacao

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com seus valores reais

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## ⚙️ Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env.local` e preencha os valores:

```bash
cp .env.example .env.local
```

| Variável | Descrição | Obrigatória |
|---|---|---|
| `CONTACT_EMAIL` | E-mail que receberá os leads do formulário | ✅ |
| `RESEND_API_KEY` | API Key do [Resend](https://resend.com) para envio de e-mails | ✅ |
| `NEXT_PUBLIC_WHATSAPP` | Número do WhatsApp (com DDI, sem formatação) | ✅ |
| `NEXT_PUBLIC_SITE_URL` | URL pública do site (para SEO e sitemap) | ✅ |
| `NEXT_PUBLIC_GA_ID` | ID do Google Analytics 4 (opcional) | ❌ |
| `NEXT_PUBLIC_GTM_ID` | ID do Google Tag Manager (opcional) | ❌ |

> ⚠️ **NUNCA** commite o arquivo `.env.local` no repositório. Ele já está protegido pelo `.gitignore`.

---

## 📁 Estrutura do Projeto

```
rasp-automacao/
├── public/                  # Arquivos estáticos (imagens, robots.txt)
├── src/
│   ├── app/                 # App Router do Next.js
│   │   ├── api/contact/     # Route Handler do formulário de contato
│   │   ├── obrigado/        # Página de confirmação pós-formulário
│   │   ├── politica-privacidade/  # Página de política de privacidade
│   │   ├── layout.tsx       # Layout raiz (SEO, fontes, providers)
│   │   ├── page.tsx         # Home page
│   │   └── sitemap.ts       # Geração dinâmica do sitemap
│   ├── components/
│   │   └── sections/        # Seções da landing page
│   ├── hooks/               # Custom React Hooks
│   └── lib/                 # Utilitários e helpers
├── .env.example             # Modelo de variáveis de ambiente
├── next.config.ts           # Configuração do Next.js (headers, imagens)
├── tailwind.config.ts       # Configuração do Tailwind CSS
└── tsconfig.json            # Configuração do TypeScript
```

---

## 📜 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento (com hot reload)
npm run build    # Build de produção
npm run start    # Inicia o servidor de produção (após build)
npm run lint     # Verifica erros de linting (ESLint)
```

---

## 🚢 Deploy

O projeto está otimizado para deploy na **Vercel**:

1. Faça fork/import deste repositório na [Vercel](https://vercel.com/new)
2. Configure as variáveis de ambiente no painel da Vercel
3. Deploy automático a cada `git push` na branch `main`

---

## 📄 Licença

Este projeto é proprietário. Todos os direitos reservados © 2025 RASP Automação.

---

<div align="center">
  Desenvolvido com ❤️ para a <strong>RASP Automação</strong>
</div>
