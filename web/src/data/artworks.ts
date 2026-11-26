export interface Artwork {
  id: string;
  title: string;
  series: string;
  category: 'arquitetura' | 'documental' | 'natureza' | 'expedicoes';
  categoryLabel: string;
  year: string;
  location: string;
  imageUrl: string;
  ratio: string;
  paperType: string;
  edition: string;
  sizes: string[];
  description: string;
  featured?: boolean;
}

export const ARTWORKS: Artwork[] = [
  {
    id: 'silencio-mineral-01',
    title: 'Silêncio Mineral nº 01',
    series: 'Capítulo I • Territórios do Tempo',
    category: 'arquitetura',
    categoryLabel: 'Arquitetura & Território',
    year: '2024',
    location: 'Recife, PE',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
    ratio: '4 / 5',
    paperType: 'Hahnemühle Photo Rag 308g • 100% Algodão',
    edition: 'Tiragem limitada de 15 cópias • Assinada e numerada',
    sizes: ['50 x 60 cm', '80 x 100 cm', '100 x 120 cm'],
    description: 'Estudo das geometrias coloniais e do encontro entre a alvenaria secular e a luz tropical do litoral pernambucano.',
    featured: true,
  },
  {
    id: 'horizonte-atlantico-02',
    title: 'Horizonte Atlântico sob Neblina',
    series: 'Capítulo II • Margens Oceânicas',
    category: 'natureza',
    categoryLabel: 'Natureza & Paisagem',
    year: '2023',
    location: 'Fernando de Noronha, PE',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    ratio: '16 / 9',
    paperType: 'Hahnemühle Bamboo 290g • Fibras Naturais',
    edition: 'Tiragem limitada de 10 cópias • Certificado com holograma',
    sizes: ['60 x 100 cm', '90 x 150 cm', '110 x 180 cm'],
    description: 'A serenidade oceânica capturada nas primeiras horas do amanhecer, onde o céu e o mar se fundem em tonalidades terrosas e azuis profundos.',
    featured: true,
  },
  {
    id: 'memoria-sertao-03',
    title: 'Veredas da Caatinga Antiga',
    series: 'Capítulo III • Memória Sertaneja',
    category: 'documental',
    categoryLabel: 'Documental & Rua',
    year: '2024',
    location: 'Cabaceiras, PB',
    imageUrl: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1600&q=85',
    ratio: '4 / 5',
    paperType: 'Canson Infinity Rag Photographique 310g',
    edition: 'Tiragem limitada de 15 cópias • Assinada',
    sizes: ['40 x 50 cm', '60 x 80 cm', '80 x 100 cm'],
    description: 'Registro documental das texturas e raízes da caatinga nordestina, revelando a resistência e a poética crua da paisagem semiárida.',
    featured: true,
  },
  {
    id: 'curvas-concreto-04',
    title: 'Geometria Modernista e Sombra',
    series: 'Capítulo I • Territórios do Tempo',
    category: 'arquitetura',
    categoryLabel: 'Arquitetura & Território',
    year: '2023',
    location: 'Brasília, DF',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    ratio: '1 / 1',
    paperType: 'Hahnemühle Photo Rag Bright White 310g',
    edition: 'Tiragem limitada de 12 cópias',
    sizes: ['60 x 60 cm', '90 x 90 cm', '110 x 110 cm'],
    description: 'Composição minimalista em preto e branco focada nas linhas austeras e sombras projetadas no concreto aparente.',
    featured: true,
  },
  {
    id: 'olhares-porto-05',
    title: 'Cais das Cinco Pontas ao Entardecer',
    series: 'Capítulo IV • Crônicas Urbanas',
    category: 'documental',
    categoryLabel: 'Documental & Rua',
    year: '2024',
    location: 'Recife Antigo, PE',
    imageUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=85',
    ratio: '3 / 2',
    paperType: 'Hahnemühle Museum Etching 350g',
    edition: 'Tiragem limitada de 10 cópias • Com chancela seca',
    sizes: ['50 x 75 cm', '70 x 105 cm', '90 x 135 cm'],
    description: 'A pulsação histórica do bairro portuário, a fumaça das marés e os vultos dos trabalhadores da aurora.',
    featured: false,
  },
  {
    id: 'trilhas-chapada-06',
    title: 'Abismo dos Cânions da Chapada',
    series: 'Capítulo V • Expedições Naturais',
    category: 'expedicoes',
    categoryLabel: 'Expedições',
    year: '2023',
    location: 'Chapada Diamantina, BA',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85',
    ratio: '16 / 9',
    paperType: 'Hahnemühle Photo Rag 308g • 100% Algodão',
    edition: 'Tiragem limitada de 15 cópias',
    sizes: ['60 x 100 cm', '80 x 140 cm', '100 x 170 cm'],
    description: 'Imensidão panorâmica das escarpas rochosas esculpidas por eras geológicas sob a incidência da luz poente.',
    featured: false,
  },
  {
    id: 'ritmo-ruas-07',
    title: 'Sombra e Passo na Avenida',
    series: 'Capítulo IV • Crônicas Urbanas',
    category: 'documental',
    categoryLabel: 'Documental & Rua',
    year: '2024',
    location: 'São Paulo, SP',
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1600&q=85',
    ratio: '4 / 5',
    paperType: 'Hahnemühle Photo Rag Satin 310g',
    edition: 'Tiragem limitada de 20 cópias',
    sizes: ['40 x 50 cm', '60 x 75 cm', '80 x 100 cm'],
    description: 'Trabalho de fotojornalismo autoral na tradição da Magnum Photos, flagrando o compasso solitário do transeunte.',
    featured: false,
  },
  {
    id: 'dunas-lencois-08',
    title: 'Escultura Eólica nas Areias Brancas',
    series: 'Capítulo V • Expedições Naturais',
    category: 'expedicoes',
    categoryLabel: 'Expedições',
    year: '2024',
    location: 'Lençóis Maranhenses, MA',
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=85',
    ratio: '3 / 2',
    paperType: 'Hahnemühle Photo Rag 308g • 100% Algodão',
    edition: 'Tiragem limitada de 12 cópias',
    sizes: ['60 x 90 cm', '80 x 120 cm', '100 x 150 cm'],
    description: 'Linhas ondulares infinitas gravadas pelo vento constante, num jogo sutil de sombras e pureza mineral.',
    featured: true,
  },
];

export const ARTWORK_CATEGORIES = [
  { id: 'todas', label: 'Todas as Obras', count: ARTWORKS.length },
  { id: 'arquitetura', label: 'Arquitetura & Território', count: ARTWORKS.filter(a => a.category === 'arquitetura').length },
  { id: 'documental', label: 'Documental & Rua', count: ARTWORKS.filter(a => a.category === 'documental').length },
  { id: 'natureza', label: 'Natureza & Paisagem', count: ARTWORKS.filter(a => a.category === 'natureza').length },
  { id: 'expedicoes', label: 'Expedições', count: ARTWORKS.filter(a => a.category === 'expedicoes').length },
];

