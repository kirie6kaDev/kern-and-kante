export type ProjectTheme = {
  background: string
  foreground: string
  accent: string
}

export type HeroPresentation = {
  textTheme: 'light' | 'dark'
  overlay: 'none' | 'left-dark' | 'left-heavy' | 'full-soft'
  objectPosition: string
  titleSize: 'short' | 'medium' | 'long'
  navTheme: 'light' | 'dark'
}

export type Project = {
  id: number
  slug: string
  title: string
  category: string
  location: string
  year: number
  image: string
  theme: ProjectTheme
  hero: HeroPresentation
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'haus-eiche',
    title: 'Haus Eiche',
    category: 'Maßküche · Eiche',
    location: 'Münster',
    year: 2025,
    image: '/images/pexels-artbovich-7061421.jpg',
    theme: { background: '#20160f', foreground: '#f6efe7', accent: '#c7a27d' },
    hero: {
      textTheme: 'light',
      overlay: 'left-dark',
      objectPosition: '50% center',
      titleSize: 'short',
      navTheme: 'light',
    },
  },
  {
    id: 2,
    slug: 'haus-nussbaum',
    title: 'Haus Nussbaum',
    category: 'Innenausbau · Nussbaum',
    location: 'Osnabrück',
    year: 2025,
    image: '/images/pexels-artbovich-6284237.jpg',
    theme: { background: '#151311', foreground: '#f4efe9', accent: '#8e6548' },
    hero: {
      textTheme: 'light',
      overlay: 'left-dark',
      objectPosition: '50% center',
      titleSize: 'medium',
      navTheme: 'light',
    },
  },
  {
    id: 3,
    slug: 'apartment-nord',
    title: 'Apartment Nord',
    category: 'Einbaumöbel · Eiche',
    location: 'Münster',
    year: 2024,
    image: '/images/pexels-artbovich-6890392.jpg',
    theme: { background: '#ede7dd', foreground: '#1b1a18', accent: '#b8916a' },
    hero: {
      textTheme: 'dark',
      overlay: 'full-soft',
      objectPosition: '55% center',
      titleSize: 'medium',
      navTheme: 'dark',
    },
  },
  {
    id: 4,
    slug: 'haus-linie',
    title: 'Haus Linie',
    category: 'Raumteiler · Eiche',
    location: 'Bielefeld',
    year: 2024,
    image: '/images/pexels-artbovich-6958141.jpg',
    theme: { background: '#d8c8b5', foreground: '#1a1815', accent: '#9d734b' },
    hero: {
      textTheme: 'light',
      overlay: 'left-heavy',
      objectPosition: '25% center',
      titleSize: 'short',
      navTheme: 'light',
    },
  },
]
