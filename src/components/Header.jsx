import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Trang chủ', href: '#home' },
  { label: 'Dịch vụ', href: '#services' },
  { label: 'Đánh giá', href: '#reviews' },
  { label: 'Liên hệ', href: '#footer' },
]

function PawLogo() {
  return (
    <svg viewBox="0 0 48 48" className="h-9 w-9 text-primary" fill="currentColor">
      <circle cx="12" cy="14" r="5" />
      <circle cx="24" cy="9" r="5.5" />
      <circle cx="36" cy="14" r="5" />
      <path d="M24 20c-8 0-14 6.5-14 13 0 4.5 3.5 7.5 8 7.5 3 0 4.5-1.5 6-1.5s3 1.5 6 1.5c4.5 0 8-3 8-7.5 0-6.5-6-13-14-13z" />
    </svg>
  )
}

export default function Header({ data }) {
  const [open, setOpen] = useState(false)
  const hotlineHref = `tel:${data.brand.hotline.replace(/\s/g, '')}`

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <div className="bg-ink text-white text-xs sm:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          <div className="flex items-center gap-4">
            <a href={hotlineHref} className="flex items-center gap-1.5 hover:text-primary">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1.1.5 1.1 1.1V20c0 .6-.5 1.1-1.1 1.1C10.9 21.1 2.9 13.1 2.9 3.2 2.9 2.6 3.4 2.1 4 2.1h3.5c.6 0 1.1.5 1.1 1.1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1L6.6 10.8z"/></svg>
              Hotline 24/7: {data.brand.hotline}
            </a>
            <a href={`mailto:${data.brand.email}`} className="hidden items-center gap-1.5 hover:text-primary sm:flex">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0l8 6 8-6"/></svg>
              {data.brand.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-white/70 md:inline">Tiếng Việt / English</span>
            <a href="#cart" aria-label="Giỏ hàng" className="hover:text-primary">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4h-2l-1 2v1h2l3.6 7.6-1.4 2.5c-.3.6.1 1.4.8 1.4h12v-2H9.4l1-2h7.5c.6 0 1.1-.4 1.3-.9l3-6.6c.3-.7-.2-1.5-1-1.5H6.2l-.9-2zM7 20a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm10 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <PawLogo />
          <span className="text-2xl font-extrabold tracking-tight text-ink">
            {data.brand.name}
          </span>
        </a>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="group relative">
                <a
                  href={link.href}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-ink transition hover:bg-primary/10 hover:text-primary"
                >
                  {link.label}
                  {link.children && (
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
                  )}
                </a>
                {link.children && (
                  <ul className="invisible absolute left-0 top-full min-w-64 rounded-xl border border-slate-100 bg-white py-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.href} className="block px-4 py-2 text-sm text-slate-600 hover:bg-primary/10 hover:text-primary">
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#booking"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/30 transition hover:bg-primary-dark sm:inline-block"
          >
            Đặt lịch khám
          </a>
          <button
            type="button"
            aria-label="Mở menu"
            className="rounded-lg p-2 text-ink hover:bg-slate-100 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white px-4 py-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-primary/10" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
                {link.children && (
                  <ul className="ml-3 flex flex-col gap-1 border-l border-slate-100 pl-3">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.href} className="block rounded-lg px-3 py-1.5 text-sm text-slate-500 hover:bg-primary/10 hover:text-primary" onClick={() => setOpen(false)}>
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-2">
              <a href="#booking" className="block rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-white" onClick={() => setOpen(false)}>
                Đặt lịch khám
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
