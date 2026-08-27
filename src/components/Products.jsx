export default function Products({ data }) {
  const { title, desc, items } = data.products;

  return (
    <section id="products" className="scroll-mt-24 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-slate-600">{desc}</p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <div
              key={p.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden bg-slate-100">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {p.brand}
                </p>
                <h3 className="mt-1 text-sm font-bold text-ink">{p.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-extrabold text-secondary">
                    {p.price}
                  </span>
                  <button
                    type="button"
                    className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary-dark transition hover:bg-primary hover:text-white"
                  >
                    Liên hệ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
