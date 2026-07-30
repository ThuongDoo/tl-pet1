import { useEffect, useState } from 'react'
import { getContactChannels } from '../data/contactChannels'

function MapPin() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
    </svg>
  )
}

export default function ContactPopup({ data }) {
  const [visible, setVisible] = useState(false)
  const contactChannels = getContactChannels(data)
  const ctaHref = `tel:${data.hotline.replace(/\s/g, '')}`

  useEffect(() => {
    if (!data.visible.popup) return

    const timer = setTimeout(() => setVisible(true), data.popup.delaySeconds * 1000)
    return () => clearTimeout(timer)
  }, [data.visible.popup, data.popup.delaySeconds])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 px-4 backdrop-blur-sm"
      onClick={() => setVisible(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-popup-title"
        className="relative grid max-h-[90vh] w-full max-w-3xl grid-cols-1 overflow-y-auto rounded-3xl bg-white shadow-2xl sm:grid-cols-2 sm:overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Đóng"
          onClick={() => setVisible(false)}
          className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink shadow transition hover:bg-white"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>

        <div className="relative h-56 sm:h-full">
          <img src={data.popup.image} alt={data.brand} className="h-full w-full object-cover" />
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-dark">
            {data.popup.badge}
          </span>
          <h3 id="contact-popup-title" className="mt-3 text-xl font-extrabold leading-snug text-ink">
            {data.popup.title}
          </h3>
          <a href="#map" className="mt-2 flex items-start gap-2 text-sm text-slate-600 hover:text-primary">
            <MapPin />
            {data.popup.address}
          </a>
          <p className="mt-2 text-sm text-slate-600">
            {data.popup.desc}
          </p>

          <a
            href={ctaHref}
            className="mt-4 flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark"
          >
            🩺 {data.popup.cta}
          </a>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {contactChannels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex flex-col items-center gap-1.5 rounded-xl border border-slate-200 px-2 py-3 text-center transition hover:border-primary hover:text-primary"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {c.icon}
                </span>
                <span className="text-[11px] font-semibold text-ink">{c.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
