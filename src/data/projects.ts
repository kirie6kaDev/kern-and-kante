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
  intro: string
  brief: string
  result: string
  materials: string[]
  duration: string
  galleryLayout: 'cabinet' | 'ribbon' | 'plan' | 'planes'
  gallery: { src: string; alt: string; caption: string }[]
  decisions: { title: string; text: string }[]
  journal: { step: string; caption: string; image: string }[]
  testimonial: string
  heroVideo?: string
  testimonialVideo?: string
  testimonialPoster?: string
}

const photos = [
  '/images/pexels-artbovich-7061421.webp',
  '/images/pexels-artbovich-6284237.webp',
  '/images/pexels-artbovich-6890392.webp',
  '/images/pexels-artbovich-6958141.webp',
  '/images/craft.webp',
]

const gallery = (title: string, offset: number) => Array.from({ length: 5 }, (_, index) => ({
  src: photos[(index + offset) % photos.length],
  alt: `${title}: handwerkliches Detail ${index + 1}`,
  caption: `${String(index + 1).padStart(2, '0')} / Material, Fuge und Licht im Zusammenspiel.`,
}))

export const projects: Project[] = [
  {
    id: 1,
    slug: 'haus-eiche',
    title: 'Haus Eiche',
    category: 'Maßküche · Eiche',
    location: 'Münster',
    year: 2025,
    image: '/images/pexels-artbovich-7061421.webp',
    theme: { background: '#20160f', foreground: '#f6efe7', accent: '#c7a27d' },
    hero: {
      textTheme: 'light',
      overlay: 'left-dark',
      objectPosition: '50% center',
      titleSize: 'short',
      navTheme: 'light',
    },
    intro: 'Stauraum, der sich nicht in den Vordergrund drängt.',
    brief: 'Für ein Familienhaus sollte eine großzügige Küche entstehen, die Alltag, Gäste und Vorräte organisiert, ohne wie eine Wand aus Möbeln zu wirken.',
    result: 'Ein ruhiger Rhythmus aus Eiche, Schattenfugen und grifflosen Flächen verbindet Küche und Architektur zu einem Ganzen.',
    materials: ['Eiche natur', 'Linoleum', 'Messing'],
    duration: '14 Wochen',
    galleryLayout: 'cabinet',
    gallery: gallery('Haus Eiche', 0),
    decisions: [
      { title: 'Ruhige Front', text: 'Durchlaufende Fasern und präzise Fugen lassen die große Fläche leicht wirken.' },
      { title: 'Innenleben', text: 'Jede Funktion liegt dort, wo sie im täglichen Ablauf tatsächlich gebraucht wird.' },
    ],
    journal: [
      { step: '01 / Furnierbild', caption: 'Die Fronten werden vor dem Zuschnitt als Gesamtbild gelegt.', image: photos[4] },
      { step: '04 / Trockenmontage', caption: 'Alle Fugen werden vor dem Transport in der Werkstatt geprüft.', image: photos[0] },
      { step: '07 / Oberfläche', caption: 'Zwei dünne Ölschichten bewahren die offene Haptik.', image: photos[2] },
    ],
    testimonial: 'Wir wollten Stauraum, aber keine Wand aus Möbeln. Kern & Kante hat genau diese Ruhe getroffen — bis in die kleinsten Fugen.',
  },
  {
    id: 2,
    slug: 'haus-nussbaum',
    title: 'Haus Nussbaum',
    category: 'Innenausbau · Nussbaum',
    location: 'Osnabrück',
    year: 2025,
    image: '/images/pexels-artbovich-6284237.webp',
    theme: { background: '#151311', foreground: '#f4efe9', accent: '#8e6548' },
    hero: {
      textTheme: 'light',
      overlay: 'left-dark',
      objectPosition: '50% center',
      titleSize: 'medium',
      navTheme: 'light',
    },
    intro: 'Ein Material zieht sich wie ein warmer Faden durch das Haus.',
    brief: 'Küche, Bibliothek und Übergangszonen sollten zusammengehören, ohne ihre jeweilige Funktion zu verlieren.',
    result: 'Das sorgfältig komponierte Furnierbild verbindet die Räume und verändert sich mit dem Tageslicht.',
    materials: ['Nussbaum', 'Naturstein', 'Bronze'],
    duration: '16 Wochen',
    galleryLayout: 'ribbon',
    gallery: gallery('Haus Nussbaum', 1),
    decisions: [
      { title: 'Grain match', text: 'Benachbarte Fronten führen das Furnierbild kontinuierlich weiter.' },
      { title: 'Tiefe', text: 'Dunkle Rücksprünge geben den warmen Holzflächen optische Ruhe.' },
    ],
    journal: [
      { step: '01 / Auswahl', caption: 'Jedes Furnierblatt wird im Tageslicht beurteilt.', image: photos[4] },
      { step: '03 / Fügen', caption: 'Die Maserung wird über mehrere Fronten hinweg ausgerichtet.', image: photos[1] },
      { step: '08 / Montage', caption: 'Die letzte Justierung erfolgt vor Ort auf Zehntelmillimeter.', image: photos[3] },
    ],
    testimonial: 'Das Holz wirkt nicht wie eine Oberfläche, sondern wie ein roter Faden durch das Haus.',
  },
  {
    id: 3,
    slug: 'apartment-nord',
    title: 'Apartment Nord',
    category: 'Einbaumöbel · Eiche',
    location: 'Münster',
    year: 2024,
    image: '/images/pexels-artbovich-6890392.webp',
    theme: { background: '#ede7dd', foreground: '#1b1a18', accent: '#b8916a' },
    hero: {
      textTheme: 'dark',
      overlay: 'full-soft',
      objectPosition: '55% center',
      titleSize: 'medium',
      navTheme: 'dark',
    },
    intro: 'Mehr Funktion, ohne einen kleinen Grundriss schwerer zu machen.',
    brief: 'Die kompakte Wohnung brauchte Stauraum, Arbeitsplatz und klare Übergänge, sollte aber offen und licht bleiben.',
    result: 'Einbauten organisieren den Grundriss, rahmen Blickachsen und lassen den vorhandenen Raum größer wirken.',
    materials: ['Eiche hell', 'Lack weiß', 'Edelstahl'],
    duration: '10 Wochen',
    galleryLayout: 'plan',
    gallery: gallery('Apartment Nord', 2),
    decisions: [
      { title: 'Grundriss als Möbel', text: 'Stauraum wird zugleich Trennung, Arbeitsplatz und Lichtführung.' },
      { title: 'Visuelle Leichtigkeit', text: 'Helle Flächen und zurückgesetzte Sockel lösen das Volumen vom Boden.' },
    ],
    journal: [
      { step: '01 / Aufmaß', caption: 'Der Bestand wird vor der Planung vollständig digital erfasst.', image: photos[2] },
      { step: '05 / Probe', caption: 'Griffe, Kanten und Farben werden im Raum bemustert.', image: photos[4] },
      { step: '09 / Übergabe', caption: 'Jede Funktion wird gemeinsam mit den Bewohnern geprüft.', image: photos[0] },
    ],
    testimonial: 'Die Wohnung fühlt sich jetzt größer an, obwohl wir mehr untergebracht haben.',
  },
  {
    id: 4,
    slug: 'haus-linie',
    title: 'Haus Linie',
    category: 'Raumteiler · Eiche',
    location: 'Bielefeld',
    year: 2024,
    image: '/images/pexels-artbovich-6958141.webp',
    theme: { background: '#d8c8b5', foreground: '#1a1815', accent: '#9d734b' },
    hero: {
      textTheme: 'light',
      overlay: 'left-heavy',
      objectPosition: '25% center',
      titleSize: 'short',
      navTheme: 'light',
    },
    intro: 'Möbel, die eine architektonische Linie weiterführen.',
    brief: 'Lange Sichtachsen und offene Räume verlangten Einbauten, die strukturieren, ohne die Großzügigkeit zu verlieren.',
    result: 'Schiebende Ebenen und präzise Fluchten verbinden Raumteiler, Stauraum und Architektur.',
    materials: ['Eiche geräuchert', 'Glas', 'Schwarzstahl'],
    duration: '18 Wochen',
    galleryLayout: 'planes',
    gallery: gallery('Haus Linie', 3),
    decisions: [
      { title: 'Durchgehende Achse', text: 'Kanten und Öffnungen folgen den Linien des Hauses.' },
      { title: 'Bewegliche Ebene', text: 'Schiebeelemente wechseln zwischen Offenheit, Filter und Rückzug.' },
    ],
    journal: [
      { step: '01 / Linie', caption: 'Architekturachsen werden auf jedes Bauteil übertragen.', image: photos[3] },
      { step: '06 / Beschlag', caption: 'Verdeckte Führungen werden unter realer Last getestet.', image: photos[4] },
      { step: '10 / Justage', caption: 'Die Ebenen werden im fertigen Raum exakt ausgerichtet.', image: photos[1] },
    ],
    testimonial: 'Kern & Kante hat die Architektur nicht ergänzt, sondern weitergeführt.',
  },
]
