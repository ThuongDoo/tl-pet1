// The UI components assume every field exists (e.g. `data.branches.map`,
// `data.hotline.replace`). Firestore `config` is hand-edited in the back
// office and can be partially filled, so this fills in the gaps with safe
// empty defaults before the config reaches the components.
const EMPTY = {
  brand: '',
  hotline: '',
  email: '',
  website: '',
  zalo: '',
  messenger: '',
  socials: {},
  hours: {},
  emergencyNote: '',
  copyright: '',
  hero: {
    badge: '',
    titleLine1: '',
    titlePrefix: '',
    titleHighlight: '',
    desc: '',
    ctaPrimary: '',
    ctaSecondary: '',
    image: '',
    cardTitle: '',
    cardDesc: '',
    stats: [],
  },
  services: { title: '', desc: '', main: [] },
  products: { title: '', desc: '', items: [] },
  reviews: { title: '', desc: '', items: [] },
  branches: [],
  emergency: [],
  popup: {
    delaySeconds: 0,
    image: '',
    badge: '',
    title: '',
    address: '',
    desc: '',
    cta: '',
  },
  visible: {},
}

export function normalizeConfig(config) {
  const c = config ?? {}
  return {
    ...EMPTY,
    ...c,
    socials: { ...EMPTY.socials, ...c.socials },
    hours: { ...EMPTY.hours, ...c.hours },
    hero: { ...EMPTY.hero, ...c.hero, stats: c.hero?.stats ?? [] },
    services: { ...EMPTY.services, ...c.services, main: c.services?.main ?? [] },
    products: { ...EMPTY.products, ...c.products, items: c.products?.items ?? [] },
    reviews: { ...EMPTY.reviews, ...c.reviews, items: c.reviews?.items ?? [] },
    branches: c.branches ?? [],
    emergency: c.emergency ?? [],
    popup: { ...EMPTY.popup, ...c.popup },
    visible: { ...EMPTY.visible, ...c.visible },
  }
}
