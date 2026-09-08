export default function Pricing() {
  return (
    <section id="harga" className="bg-white py-20 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Harga
          </span>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Jasa Pembuatan Website
            <span className="block text-orange-500">Rp500.000</span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Harga nyata untuk website standar profesional. Bukan harga
            pancingan.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-lg rounded-3xl border-2 border-orange-500 bg-white p-8 shadow-xl dark:bg-slate-900">
          {/* HOT PROMO */}
          <div className="absolute -left-1 -top-4 rounded-r-lg bg-red-600 px-4 py-2 text-sm font-black uppercase tracking-wide text-white shadow-md">
            🔥 HOT PROMO
          </div>

          <div className="text-center">
            <p className="text-lg font-bold text-slate-700 dark:text-slate-200">
              Website Standar Profesional
            </p>

            <div className="mt-4 text-5xl font-black text-slate-900 dark:text-white">
              Rp500K
            </div>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Aktif seumur hidup
            </p>
          </div>

          <div className="my-8 h-px bg-slate-300 dark:bg-slate-800" />

          <ul className="space-y-4 text-slate-700 dark:text-slate-200">
            <li>✓ Website keren, modern & profesional</li>
            <li>✓ Tampil sempurna di HP, tablet & desktop</li>
            <li>✓ Siap online & mudah digunakan</li>
            <li>✓ Pengerjaan cepat</li>
            <li>✓ Tanpa biaya bulanan</li>
            <li>✓ Aktif seumur hidup</li>
            <li>✓ No Ribet</li>
            <li>✓ Harga Fix Rp500.000</li>
          </ul>

          <a
            href="https://wa.me/6282213114640?text=Halo%20kak%2C%20saya%20mau%20tanya%20tentang%20jasa%20pembuatan%20website"
            className="cta-shake mt-8 block rounded-xl bg-[#25D366] px-6 py-4 text-center font-bold text-white shadow-lg transition hover:scale-105 hover:bg-[#128C7E]"
          >
            🚀 Pesan Website Sekarang
          </a>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-slate-500 dark:text-slate-400">
          Harga Rp500.000 berlaku untuk website standar profesional. Website
          dengan fitur kompleks seperti login, database, payment gateway,
          marketplace, atau sistem custom akan dihitung berdasarkan kebutuhan.
        </p>
      </div>
    </section>
  );
}
