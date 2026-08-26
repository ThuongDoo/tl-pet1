import { getContactChannels } from '../data/contactChannels'

export default function Hero({ data }) {
  const contactChannels = getContactChannels(data)

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white to-secondary/10">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-28 pt-14 lg:grid-cols-2 lg:pb-32 lg:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary-dark">
            {data.hero.badge}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            {data.hero.titleLine1}<br /> {data.hero.titlePrefix} <span className="text-primary">{data.hero.titleHighlight}</span>
          </h1>
          <p className="mt-5 max-w-lg text-base text-slate-600 sm:text-lg">
            {data.hero.desc}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#booking" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark">
              {data.hero.ctaPrimary}
            </a>
            <a href="#services" className="rounded-full border-2 border-ink/10 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary">
              {data.hero.ctaSecondary}
            </a>
          </div>
          <div className="mt-10 flex gap-8">
            {data.hero.stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-extrabold text-primary">{s.value}</p>
                <p className="text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-4/3 overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={data.hero.image}
              alt={data.brand.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl bg-white p-4 shadow-xl sm:block">
            <p className="text-sm font-semibold text-ink">{data.hero.cardTitle}</p>
            <p className="mt-1 text-xs text-slate-500">{data.hero.cardDesc}</p>
          </div>
        </div>
      </div>

      <div id="booking" className="mx-auto -mt-16 max-w-5xl scroll-mt-24 px-4 sm:-mt-20">
        <div className="grid gap-4 rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-black/5 sm:p-8 lg:grid-cols-[auto_1fr_1fr_1fr] lg:items-center lg:gap-4">
          <div className="flex items-center gap-2 text-primary lg:flex-col lg:items-start">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" /></svg>
            <h3 className="text-lg font-extrabold uppercase tracking-tight text-ink">Đặt lịch khám</h3>
            <p className="text-xs text-slate-500 lg:mt-1">Liên hệ ngay để được tư vấn &amp; đặt lịch nhanh nhất</p>
          </div>

          {contactChannels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                {c.icon}
              </span>
              <span>
                <span className="block text-xs font-normal text-slate-500">{c.label}</span>
                {c.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
