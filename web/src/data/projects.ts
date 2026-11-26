export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  location: string;
  category: 'documental' | 'editorial' | 'territorio';
  platesCount: number;
  coverImage: string;
  ratio: string;
  curatorialStatement: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'territorios-do-tempo',
    title: 'Capítulo I: Territórios do Tempo',
    subtitle: 'Arqueologia visual do patrimônio e da luz no Nordeste',
    year: '2022 — 2024',
    location: 'Pernambuco e Paraíba',
    category: 'territorio',
    platesCount: 24,
    coverImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
    ratio: '4 / 5',
    curatorialStatement: 'Um ensaio sobre a permanência silenciosa das estruturas materiais em contraste com o fluxo implacável das transformações urbanas. Cada quadro investiga a camada de pó, cal e sol que repousa sobre a memória das cidades.',
  },
  {
    slug: 'cronicas-do-cais',
    title: 'Capítulo II: Crônicas do Cais',
    subtitle: 'O cotidiano invisível dos portos e estuários fluviais',
    year: '2023 — 2024',
    location: 'Bacia do Capibaribe & Porto do Recife',
    category: 'documental',
    platesCount: 32,
    coverImage: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=85',
    ratio: '3 / 2',
    curatorialStatement: 'Inspirado na tradição do fotojornalismo humanista da Magnum Photos, o projeto acompanha homens e mulheres cujas vidas são regidas pelo balanço das marés e pelo ferro dos navios.',
  },
  {
    slug: 'expedicao-vento-silencio',
    title: 'Capítulo III: Vento & Silêncio',
    subtitle: 'Variações monocromáticas sobre o sertão profundo',
    year: '2021 — 2023',
    location: 'Cariri Paraibano & Sertão do Pajeú',
    category: 'territorio',
    platesCount: 18,
    coverImage: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1600&q=85',
    ratio: '4 / 5',
    curatorialStatement: 'Uma jornada fotográfica pelos vazios habitados, onde a luz do meio-dia reduz a paisagem aos seus ossos essenciais: pedras polidas, espinhos e horizontes infinitos.',
  },
  {
    slug: 'pulso-metropole',
    title: 'Capítulo IV: O Pulso de Concreto',
    subtitle: 'Geometrias e solidões na metrópole brasileira',
    year: '2022 — 2024',
    location: 'São Paulo & Brasília',
    category: 'editorial',
    platesCount: 28,
    coverImage: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1600&q=85',
    ratio: '16 / 9',
    curatorialStatement: 'O indivíduo diante da monumentalidade do concreto moderno. Diálogos visuais entre sombras projetadas, passantes em movimento e as arestas afiadas dos edifícios.',
  },
];

