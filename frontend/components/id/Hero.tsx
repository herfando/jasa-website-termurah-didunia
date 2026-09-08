export default function Hero() {
  return (
    <section className="bg-white dark:bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center md:py-28">
        <div className="mb-6 animate-[wiggle_1.5s_ease-in-out_infinite] text-xl font-black tracking-tight  sm:text-4xl border bg-red-700 text-white px-4 py-2 rounded-lg">
          🔥 PROMO LAUNCHING 🔥
        </div>

        <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
          Jasa Pembuatan Website
        </h1>

        <div className="mt-5 flex flex-col items-center">
          <span className="text-base font-bold text-slate-500 dark:text-slate-400 sm:text-lg">
            Harga Normal
          </span>

          <span className="mt-1 text-3xl font-black italic text-slate-400 line-through decoration-2 sm:text-4xl">
            Rp3.500.000
          </span>

          <span className="mt-5 text-base font-bold text-orange-600 dark:text-orange-400 sm:text-lg">
            HARGA PROMO
          </span>

          <span className="mt-1 text-3xl font-black italic text-orange-500 sm:text-6xl">
            Rp500.000
          </span>
        </div>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Punya bisnis tapi belum punya website?
          <br />
          Kami bantu buatkan website yang modern, cepat, responsive, dan siap
          online.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#harga"
            className="rounded-xl bg-orange-500 px-7 py-3.5 font-bold text-white transition hover:bg-orange-600"
          >
            Lihat Harga
          </a>

          <a
            href="https://wa.me/6282213114640?text=Halo%20kak%2C%20saya%20mau%20tanya%20tentang%20jasa%20pembuatan%20website"
            className="rounded-xl border border-slate-200 px-7 py-3.5 font-bold  transition hover:bg-[#128C7E] dark:border-slate-700 text-white dark:hover:bg-slate-900 bg-[#25D366]"
          >
            Chat WhatsApp
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600 dark:text-slate-300">
          <span>⚡ Pengerjaan cepat</span>
          <span>🔄 Revisi sampai puas</span>
          <span>📱 Mobile responsive</span>
          <span>🚀 Siap online</span>
        </div>
      </div>
    </section>
  );
}
