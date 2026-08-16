export type SiteAction = {
  label: string
  href: string
}

export type BusinessInfo = {
  city: string
  country: string
  email: string
  phone?: string
  openingHours?: string[]
  primaryAction: SiteAction
}

export const site = {
  demo: {
    label: 'K/DEV · FICTIONAL CONCEPT',
    linkLabel: 'Case study ↗',
  },
  brand: {
    name: 'KERN & KANTE',
    descriptor: 'HOLZMANUFAKTUR',
  },
  about: {
    eyebrow: 'Über uns',
    heading: 'Räume aus Holz.',
    headingAccent: 'Für Menschen gemacht.',
    text: 'Kern & Kante ist eine fiktive Holzmanufaktur für individuelle Möbel und Innenausbau. Wir verbinden traditionelles Handwerk mit zeitgemäßem Design.',
    image: '/images/craft.jpg',
    imageAlt: 'Holzhandwerk in der Werkstatt',
  },
  business: {
    city: 'Münster',
    country: 'Deutschland',
    email: 'hello@example.com',
    openingHours: ['Mo–Fr · 08:00–17:00', 'Termine nach Vereinbarung'],
    primaryAction: {
      label: 'Projekt anfragen',
      href: 'mailto:hello@example.com',
    },
  } satisfies BusinessInfo,
}
