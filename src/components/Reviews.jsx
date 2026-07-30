function Stars({ rating }) {
  const filled = Math.max(0, Math.min(5, Number(rating) || 0))
  return (
    <div className="flex items-center gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4" viewBox="0 0 24 24" fill={i < filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5-4.7-4.6 6.5-.9z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews({ data }) {
  const { title, desc, items } = data.reviews

  return (
    <section id="reviews" className="scroll-mt-24 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">{title}</h2>
          <p className="mt-3 text-slate-600">{desc}</p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => (
            <div key={r.name} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <Stars rating={r.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">“{r.comment}”</p>
              <div className="mt-5 flex items-center gap-3">
                <img src={r.avatar} alt={r.name} className="h-11 w-11 shrink-0 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-bold text-ink">{r.name}</p>
                  <p className="text-xs text-slate-500">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
