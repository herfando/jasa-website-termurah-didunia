export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Pengerjaan Cepat",
      description:
        "Website dikerjakan dengan proses yang cepat dan efisien tanpa mengorbankan kualitas.",
    },
    {
      icon: "🔄",
      title: "Revisi Sampai Puas",
      description:
        "Kami melakukan revisi sampai website sesuai dengan yang kamu inginkan.",
    },
    {
      icon: "📱",
      title: "Bagus di HP",
      description:
        "Website dirancang agar tetap nyaman dilihat dan digunakan melalui smartphone.",
    },
    {
      icon: "💻",
      title: "Profesional di Desktop",
      description:
        "Tampilan tetap rapi dan profesional di laptop maupun desktop.",
    },
    {
      icon: "💰",
      title: "Harga Transparan",
      description:
        "Rp500.000 adalah harga nyata untuk website sederhana, bukan sekadar harga pancingan.",
    },
    {
      icon: "🚀",
      title: "Siap Online",
      description:
        "Website siap dipublikasikan sehingga bisnis kamu bisa langsung tampil online.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-900" id="fitur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Kenapa Pilih Jasa Pembuatan Website Kami?
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Jasa pembuatan website dengan proses sederhana, pengerjaan cepat,
            dan harga yang transparan.
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
