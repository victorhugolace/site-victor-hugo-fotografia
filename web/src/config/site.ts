// Configurações globais. Na Fase 3, estes valores passam a vir do Sanity (siteSettings).
export const SITE = {
  name: 'Victor Hugo Camará',
  description: 'Fotografia documental e fotojornalismo.',
  tagline: '', // frase de posicionamento: vazia até ser definida
  contactEmail: '', // preencher com o e-mail real
  whatsappNumber: '', // formato internacional, só dígitos (ex.: 5583...)
};

export const NAV = [
  { label: 'Projetos', href: '/projetos' },
  { label: 'Fotografias', href: '/fotografias' },
  { label: 'Trabalhos', href: '/trabalhos' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
];

// Áreas de interesse (extraídas do briefing). Editáveis no painel na Fase 3.
export const AREAS = [
  'Fotojornalismo, política e história',
  'Pessoas, cotidiano e cultura',
  'Territórios e comunidades',
  'Ensaios autorais em preto e branco',
];

// Dados pessoais: NÃO preencher com informação não confirmada.
export const ABOUT = {
  intro: '', // texto de apresentação real
  facts: [] as { label: string; value: string }[], // ex.: { label: 'Base', value: '...' }
};
