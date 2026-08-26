const SOCIAL_ICONS = {
  facebook: { label: 'Facebook', icon: 'M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z' },
  youtube: { label: 'YouTube', icon: 'M23 12s0-3.4-.4-5a3 3 0 00-2.1-2C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.5.5a3 3 0 00-2.1 2C1 8.6 1 12 1 12s0 3.4.4 5a3 3 0 002.1 2c1.6.5 8.5.5 8.5.5s6.9 0 8.5-.5a3 3 0 002.1-2c.4-1.6.4-5 .4-5zM10 15.5v-7l6 3.5-6 3.5z' },
  instagram: { label: 'Instagram', icon: 'M12 2c-2.7 0-3.1 0-4.1.1-1 .1-1.7.2-2.3.5-.6.2-1.2.6-1.7 1.1-.5.5-.9 1-1.1 1.7-.3.6-.4 1.3-.5 2.3C2.2 8.9 2.2 9.3 2.2 12s0 3.1.1 4.1c.1 1 .2 1.7.5 2.3.2.6.6 1.2 1.1 1.7.5.5 1 .9 1.7 1.1.6.3 1.3.4 2.3.5 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c1-.1 1.7-.2 2.3-.5.6-.2 1.2-.6 1.7-1.1.5-.5.9-1 1.1-1.7.3-.6.4-1.3.5-2.3.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c-.1-1-.2-1.7-.5-2.3-.2-.6-.6-1.2-1.1-1.7-.5-.5-1-.9-1.7-1.1-.6-.3-1.3-.4-2.3-.5C15.1 2.2 14.7 2.2 12 2.2zm0 1.8c2.7 0 3 0 4 .1.9 0 1.4.2 1.8.3.4.2.7.4 1 .7.3.3.5.6.7 1 .1.4.3.9.3 1.8.1 1 .1 1.3.1 4s0 3-.1 4c0 .9-.2 1.4-.3 1.8-.2.4-.4.7-.7 1-.3.3-.6.5-1 .7-.4.1-.9.3-1.8.3-1 .1-1.3.1-4 .1s-3 0-4-.1c-.9 0-1.4-.2-1.8-.3-.4-.2-.7-.4-1-.7-.3-.3-.5-.6-.7-1-.1-.4-.3-.9-.3-1.8-.1-1-.1-1.3-.1-4s0-3 .1-4c0-.9.2-1.4.3-1.8.2-.4.4-.7.7-1 .3-.3.6-.5 1-.7.4-.1.9-.3 1.8-.3 1-.1 1.3-.1 4-.1zm0 3a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z' },
  tiktok: { label: 'TikTok', icon: 'M16.6 2h-3.2v13.4a3 3 0 11-2.1-2.9v-3.3a6.3 6.3 0 105.3 6.2V8.6a7.6 7.6 0 004.4 1.4V6.8a4.4 4.4 0 01-4.4-4.4z' },
}

function MapPin() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
    </svg>
  )
}

function Phone() {
  return (
    <svg className="h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1.1.5 1.1 1.1V20c0 .6-.5 1.1-1.1 1.1C10.9 21.1 2.9 13.1 2.9 3.2 2.9 2.6 3.4 2.1 4 2.1h3.5c.6 0 1.1.5 1.1 1.1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1L6.6 10.8z" />
    </svg>
  )
}

export default function Footer({ data }) {
  const socialEntries = Object.entries(SOCIAL_ICONS)
    .map(([key, meta]) => ({ ...meta, href: data.footer[key] }))
    .filter((s) => s.href)

  return (
    <footer id="footer" className="scroll-mt-24 bg-ink text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {data.footer.branches.map((loc) => (
            <div key={loc.name}>
              <h4 className="text-base font-bold text-white">{loc.name}</h4>
              <a href="#map" className="mt-3 flex items-start gap-2 text-sm hover:text-primary">
                <MapPin />
                {loc.address}
              </a>
              <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="mt-2 flex items-center gap-2 text-sm hover:text-primary">
                <Phone />
                Mobile: {loc.phone}
              </a>
            </div>
          ))}

          <div>
            <h4 className="text-base font-bold text-white">Liên hệ nhanh</h4>
            <a href={`tel:${data.brand.hotline.replace(/\s/g, '')}`} className="mt-3 flex items-center gap-2 text-sm hover:text-primary">
              <Phone />
              Hotline: {data.brand.hotline}
            </a>
            <p className="mt-2 text-sm">
              Email: <a href={`mailto:${data.brand.email}`} className="hover:text-primary">{data.brand.email}</a>
            </p>
            <p className="mt-1 text-sm">
              Website: <a href={data.brand.website} className="hover:text-primary">{data.brand.website.replace(/^https?:\/\//, 'www.')}</a>
            </p>
            <div className="mt-4 flex gap-3">
              {socialEntries.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-primary"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d={s.icon} /></svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2">
          <div>
            <h4 className="text-base font-bold text-white">Giờ làm việc</h4>
            <p className="mt-3 text-sm leading-relaxed">{data.footer['hours-weekday']}</p>
            <p className="mt-2 text-sm leading-relaxed">
              Chủ nhật &amp; Ngày lễ<br />{data.footer['hours-weekend']}
            </p>
          </div>
          <div>
            <h4 className="text-base font-bold text-white">Cấp cứu 24/7</h4>
            <a href={`tel:${data.footer.phone.replace(/\s/g, '')}`} className="mt-3 flex items-center gap-2 text-sm hover:text-primary">
              <Phone /> Hotline: {data.footer.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-400 sm:flex-row">
          <p>{data.footer.copyright}</p>
          <a href="#terms" className="hover:text-primary">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  )
}
