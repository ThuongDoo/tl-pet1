// The UI components assume every field exists (e.g. `data.branches.map`,
// `data.hotline.replace`). Firestore `config` is hand-edited in the back
// office and can be partially filled, so this fills in the gaps with safe
// empty defaults before the config reaches the components.
const EMPTY = {
  brand: {
    name: '',
    hotline: '',
    email: '',
    website: '',
    zalo: '',
    messenger: '',
  },
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
  footer: {
    branches: [],
    facebook: '',
    youtube: '',
    instagram: '',
    tiktok: '',
    'hours-weekday': '',
    'hours-weekend': '',
    phone: '',
    copyright: '',
  },
  reviews: { title: '', desc: '', items: [] },
  popup: {
    delaySeconds: 0,
    image: '',
    badge: '',
    title: '',
    address: '',
    desc: '',
    cta: '',
  },
  theme: { primary: '', primaryDark: '', secondary: '', ink: '' },
  visible: {},
  products: { title: '', desc: '', items: [] },
}

export function normalizeConfig(config) {
  const c = config ?? {}
  return {
    ...EMPTY,
    ...c,
    brand: { ...EMPTY.brand, ...c.brand },
    hero: { ...EMPTY.hero, ...c.hero, stats: c.hero?.stats ?? [] },
    services: { ...EMPTY.services, ...c.services, main: c.services?.main ?? [] },
    footer: {
      ...EMPTY.footer,
      ...c.footer,
      branches: c.footer?.branches ?? [],
    },
    reviews: { ...EMPTY.reviews, ...c.reviews, items: c.reviews?.items ?? [] },
    popup: { ...EMPTY.popup, ...c.popup },
    theme: { ...EMPTY.theme, ...c.theme },
    visible: { ...EMPTY.visible, ...c.visible },
    products: { ...EMPTY.products, ...c.products, items: c.products?.items ?? [] },
  }
}
