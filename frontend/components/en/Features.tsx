export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Fast Delivery",
      description:
        "Your website is built quickly and efficiently without compromising quality.",
    },
    {
      icon: "🔄",
      title: "Revisions Until Satisfied",
      description:
        "We provide revisions until the website matches what you want.",
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description:
        "The website is designed to look great and work comfortably on smartphones.",
    },
    {
      icon: "💻",
      title: "Professional on Desktop",
      description:
        "The design stays clean and professional on laptops and desktop computers.",
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      description:
        "$79 is the real price for a simple website, not just a bait price.",
    },
    {
      icon: "🚀",
      title: "Ready to Go Online",
      description:
        "Your website is prepared for publishing so your business can go online right away.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-900" id="fitur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Why Choose Us?
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Professional websites with a simple process, fast delivery, and
            reasonable pricing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-300 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="text-3xl">{feature.icon}</div>

              <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
