// =============================================================================
// RASP Automação — Site Constants
// =============================================================================

export const SITE = {
  name: 'RASP Automação',
  tagline: 'Engenharia de Automação Industrial de Alta Performance',
  description:
    'Especialistas em automação industrial, programação de CLPs, montagem de painéis elétricos e projetos elétricos em São Paulo. Solicite orçamento técnico gratuito.',
  url: 'https://raspautomacao.com.br',
  locale: 'pt_BR',
  language: 'pt-BR',
} as const

export const CONTACT = {
  phone: '11963987438',
  phoneFormatted: '(11) 96398-7438',
  phoneDDI: '+5511963987438',
  email: 'contato@raspautomacao.com.br',
  emailLeads: 'contato@raspautomacao.com.br',
  whatsappNumber: '5511963987438',
  whatsappDefaultMessage: 'Olá! Gostaria de solicitar um orçamento técnico.',
  // Endereço comercial (Atendimento em SP e região)
  address: {
    street: 'Atendimento presencial e remoto',
    neighborhood: 'Centro',
    city: 'São Paulo',
    state: 'SP',
    zip: '01000-000',
    country: 'BR',
    full: 'São Paulo, SP',
  },
  hours: {
    weekdays: 'Segunda a Sexta: 8h às 18h',
    saturday: 'Sábado: Mediante agendamento',
    sunday: 'Fechado',
    schema: 'Mo-Fr 08:00-18:00',
  },
} as const

export const SOCIAL = {
  linkedin: 'https://linkedin.com/company/rasp-automacao',
  instagram: 'https://instagram.com/raspautomacao',
  facebook: 'https://facebook.com/RaspAutomacao',
  youtube: '',
  whatsapp: `https://wa.me/${CONTACT.whatsappNumber}`,
} as const

// WhatsApp links with context-specific pre-filled messages
export const WHATSAPP_LINKS = {
  default: `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.whatsappDefaultMessage)}`,
  hero: `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Olá! Vi o site da RASP Automação e gostaria de Falar com um Especialista.')}`,
  services: `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Olá! Tenho interesse nas soluções da RASP Automação. Gostaria de Solicitar um Orçamento Técnico.')}`,
  contact: `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de entrar em contato com a RASP Automação.')}`,
  faq: `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Olá! Tenho uma dúvida sobre os serviços da RASP Automação.')}`,
  footer: `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de Solicitar um Orçamento Técnico.')}`,
} as const

export const STATS = [
  { value: 15, suffix: '+', label: 'Anos de Experiência', description: 'Atuando no mercado industrial' },
  { value: 200, suffix: '+', label: 'Projetos Entregues', description: 'Com excelência técnica' },
  { value: 6, suffix: '', label: 'Especialidades Técnicas', description: 'Soluções integradas' },
  { value: 100, suffix: '%', label: 'Com Suporte Técnico', description: 'Pós-implantação garantido' },
] as const

export const SERVICES = [
  {
    id: 'instalacoes-eletricas',
    icon: 'Zap',
    title: 'Instalações Elétricas',
    subtitle: 'Industriais e Residenciais',
    description:
      'Executamos instalações elétricas industriais e residenciais com segurança e conformidade técnica: eletro-calhas, quadros elétricos, alimentação de máquinas, iluminação e DPS.',
    benefits: ['Conformidade NR10', 'Quadros de força', 'Eletro-calhas e DPS', 'Iluminação industrial'],
    whatsappMessage: 'Olá! Preciso de um orçamento para instalações elétricas.',
  },
  {
    id: 'controle-automacao',
    icon: 'Cpu',
    title: 'Controle e Automação',
    subtitle: 'CLPs, IHMs e Inversores',
    description:
      'Implementamos soluções completas de controle de processos: servomotores, inversores de frequência, CLPs e IHMs para automação de máquinas e processos industriais.',
    benefits: ['CLPs e IHMs', 'Inversores de frequência', 'Servomotores', 'Automação de processos'],
    whatsappMessage: 'Olá! Preciso de um orçamento para automação industrial.',
  },
  {
    id: 'paineis-eletricos',
    icon: 'LayoutGrid',
    title: 'Montagem de Painéis',
    subtitle: 'Elétricos e de Controle',
    description:
      'Montagem e retrofit de painéis elétricos com diagramação técnica completa. Desde painéis de força a painéis de controle para qualquer nível de complexidade.',
    benefits: ['Montagem e retrofit', 'Diagramação técnica', 'Painéis de força e controle', 'Documentação completa'],
    whatsappMessage: 'Olá! Preciso de um orçamento para montagem de painel elétrico.',
  },
  {
    id: 'projetos-eletricos',
    icon: 'FileText',
    title: 'Projetos Elétricos',
    subtitle: 'Do Diagnóstico à Entrega',
    description:
      'Desenvolvemos projetos elétricos personalizados conforme sua aplicação. Do diagnóstico da necessidade à documentação técnica completa, sob medida para seu processo.',
    benefits: ['Diagnóstico técnico', 'Projetos personalizados', 'Documentação completa', 'Normas ABNT'],
    whatsappMessage: 'Olá! Preciso de um orçamento para projeto elétrico.',
  },
  {
    id: 'manutencao-industrial',
    icon: 'Wrench',
    title: 'Manutenção Industrial',
    subtitle: 'Preventiva e Corretiva',
    description:
      'Manutenção de máquinas e sistemas elétricos industriais e residenciais: preventiva, corretiva e upgrades que reduzem paradas e aumentam a vida útil dos equipamentos.',
    benefits: ['Manutenção preventiva', 'Manutenção corretiva', 'Upgrades de sistema', 'Atendimento de emergência'],
    whatsappMessage: 'Olá! Preciso de manutenção industrial urgente.',
  },
  {
    id: 'programacao-clp-ihm',
    icon: 'Code2',
    title: 'Programação CLP e IHM',
    subtitle: 'IEC 61131-3',
    description:
      'Programação de CLPs e IHMs conforme a norma IEC 61131-3: linguagens Ladder, Structured Text e Function Block Diagram para qualquer aplicação industrial.',
    benefits: ['Norma IEC 61131-3', 'Ladder, ST, FBD', 'IHMs e supervisórios', 'Qualquer aplicação'],
    whatsappMessage: 'Olá! Preciso de programação de CLP ou IHM.',
  },
] as const

export const DIFFERENTIALS = [
  {
    icon: 'Award',
    title: 'Experiência Comprovada',
    description: 'Mais de 15 anos atuando no mercado de automação industrial com resultados mensuráveis.',
  },
  {
    icon: 'Users',
    title: 'Equipe Técnica Especializada',
    description: 'Profissionais qualificados com formação técnica e constante atualização no setor.',
  },
  {
    icon: 'MessageSquare',
    title: 'Atendimento Consultivo',
    description: 'Diagnóstico técnico detalhado antes de qualquer proposta. Você merece a solução certa.',
  },
  {
    icon: 'Settings',
    title: 'Soluções Personalizadas',
    description: 'Cada projeto é único. Desenvolvemos soluções sob medida para sua aplicação específica.',
  },
  {
    icon: 'Shield',
    title: 'Conformidade com Normas',
    description: 'Todos os projetos seguem normas técnicas vigentes: NR10, IEC 61131-3, ABNT.',
  },
  {
    icon: 'HeadphonesIcon',
    title: 'Suporte Técnico Contínuo',
    description: 'Suporte técnico após a entrega. Estamos disponíveis para garantir o sucesso da sua operação.',
  },
] as const

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Análise técnica detalhada do seu processo e necessidades específicas.',
    icon: 'Search',
  },
  {
    number: '02',
    title: 'Projeto Técnico',
    description: 'Elaboração da proposta técnica e comercial personalizada.',
    icon: 'FileText',
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description: 'Programação, dimensionamento e preparação de todos os componentes.',
    icon: 'Code2',
  },
  {
    number: '04',
    title: 'Implementação',
    description: 'Instalação e configuração com mínima interferência na sua operação.',
    icon: 'Wrench',
  },
  {
    number: '05',
    title: 'Testes e Validação',
    description: 'Testes completos para garantir funcionamento perfeito antes da entrega.',
    icon: 'CheckCircle',
  },
  {
    number: '06',
    title: 'Entrega e Docs',
    description: 'Entrega formal com documentação técnica completa e treinamento da equipe.',
    icon: 'Package',
  },
  {
    number: '07',
    title: 'Suporte Contínuo',
    description: 'Suporte técnico pós-implantação para garantir sua operação.',
    icon: 'HeadphonesIcon',
  },
] as const

export const PARTNERS = [
  { name: 'WEG', description: 'Motores e Automação' },
  { name: 'Panasonic', description: 'CLPs e Automação' },
  { name: 'Delta', description: 'Inversores e Servos' },
  { name: 'Prysmian', description: 'Cabos e Condutores' },
  { name: 'Metaltex', description: 'Infraestrutura Elétrica' },
  { name: 'Celmar', description: 'Materiais Elétricos' },
] as const

export const FAQ_ITEMS = [
  {
    question: 'Em quais regiões vocês atendem?',
    answer:
      'Atendemos principalmente na Grande São Paulo e interior do estado. Para projetos de maior porte, podemos atender em outras regiões mediante consulta. Entre em contato para verificar a disponibilidade para sua localidade.',
  },
  {
    question: 'Qual o prazo médio para um projeto de automação industrial?',
    answer:
      'O prazo varia conforme a complexidade do projeto. Manutenções e instalações simples podem ser realizadas em 1 a 5 dias. Projetos de automação completos, incluindo programação de CLPs e IHMs, variam de 2 a 8 semanas. O prazo exato é definido após o diagnóstico técnico.',
  },
  {
    question: 'Vocês fornecem os equipamentos ou apenas a mão de obra?',
    answer:
      'Oferecemos tanto serviços completos (fornecimento + instalação) quanto apenas serviços de instalação e programação com equipamentos do cliente. Trabalhamos com fabricantes parceiros como WEG, Panasonic e Delta, garantindo qualidade nos equipamentos fornecidos.',
  },
  {
    question: 'Quais normas técnicas os projetos seguem?',
    answer:
      'Todos os nossos projetos seguem as normas técnicas vigentes: NR-10 (Segurança em Instalações e Serviços em Eletricidade), IEC 61131-3 (Programação de CLPs), normas ABNT pertinentes e demais regulamentações aplicáveis a cada tipo de projeto.',
  },
  {
    question: 'Como funciona o suporte técnico após a entrega?',
    answer:
      'Oferecemos suporte técnico pós-implantação para todos os projetos. O nível de suporte é acordado durante a proposta comercial, podendo incluir garantia de funcionamento, manutenção preventiva agendada e atendimento de emergência. Entre em contato para conhecer os planos disponíveis.',
  },
  {
    question: 'Vocês atendem demandas de manutenção emergencial?',
    answer:
      'Sim, atendemos emergências industriais. Paradas de máquina e falhas em sistemas elétricos têm prioridade no nosso atendimento. Entre em contato via WhatsApp para agilizar o processo de atendimento emergencial.',
  },
  {
    question: 'Qual a diferença entre retrofit e um projeto novo de painel elétrico?',
    answer:
      'O retrofit consiste na modernização de um painel elétrico existente, substituindo componentes obsoletos, atualizando a lógica de controle e melhorando a segurança sem substituição completa. É geralmente mais econômico. Um projeto novo é indicado quando o painel atual não comporta as novas demandas ou está em condições críticas.',
  },
  {
    question: 'Como solicitar um orçamento?',
    answer:
      'Você pode solicitar orçamento pelo WhatsApp, pelo formulário de contato neste site ou pelo e-mail. Após o contato inicial, agendamos uma visita técnica para diagnóstico detalhado e elaboração de proposta personalizada sem custo.',
  },
] as const

export const SERVICE_OPTIONS = [
  'Instalações Elétricas Industriais',
  'Instalações Elétricas Residenciais',
  'Controle e Automação Industrial',
  'Montagem de Painel Elétrico',
  'Retrofit de Painel Elétrico',
  'Projeto Elétrico',
  'Manutenção Preventiva',
  'Manutenção Corretiva / Emergência',
  'Programação de CLP',
  'Programação de IHM',
  'Outro serviço',
] as const
