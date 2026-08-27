const MAIN_ICONS = [
  "M12 2a9 9 0 100 18 9 9 0 000-18zM9 12h6M12 9v6",
  "M4 6h16M4 12h10M4 18h16",
  "M12 2l2 4 4 .5-3 3 1 4-4-2-4 2 1-4-3-3 4-.5z",
];

export default function Services({ data }) {
  const { title, desc, main } = data.services;

  return (
    <section id="services" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-slate-600">{desc}</p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {main.map((s, i) => (
            <div
              key={s.title}
              className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
