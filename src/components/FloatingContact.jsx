import { getContactChannels } from '../data/contactChannels'

export default function FloatingContact({ data }) {
  const address = data.popup.address || data.footer.branches[0]?.address || ''
  const channels = [
    ...getContactChannels(data),
    {
      label: 'Chỉ đường',
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
      external: true,
      color: '#f97316',
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" /></svg>
      ),
    },
  ]

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3">
      {channels.map((c) => (
        <a
          key={c.label}
          href={c.href}
          aria-label={c.label}
          {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="group relative flex h-13 w-13 items-center justify-center rounded-full text-white shadow-lg transition hover:scale-110"
          style={{ backgroundColor: c.color, boxShadow: `0 8px 20px -4px ${c.color}99` }}
        >
          <span className="absolute inset-0 animate-ping rounded-full" style={{ backgroundColor: c.color, opacity: 0.55 }} />
          <span className="relative z-10">{c.icon}</span>
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100">
            {c.label}
          </span>
        </a>
      ))}
    </div>
  )
}
