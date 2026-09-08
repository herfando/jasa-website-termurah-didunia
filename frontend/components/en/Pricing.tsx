export default function Pricing() {
  return (
    <section id="harga" className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Pricing
          </span>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Website Development
            <span className="block text-orange-500">$79</span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Real pricing for a simple website. No bait pricing.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-lg rounded-3xl border-2 border-orange-500 bg-white p-8 shadow-xl dark:bg-slate-900">
          {/* HOT PROMO */}
          <div className="absolute -left-1 -top-4 rounded-r-lg bg-red-600 px-4 py-2 text-sm font-black uppercase tracking-wide text-white shadow-md">
            🔥 HOT PROMO
          </div>

          <div className="text-center">
            <p className="text-lg font-bold text-slate-700 dark:text-slate-200">
              Simple Website
            </p>

            <div className="mt-4 text-5xl font-black text-slate-900 dark:text-white">
              $79
            </div>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              One-time payment
            </p>
          </div>

          <div className="my-8 h-px bg-slate-300 dark:bg-slate-800" />

          <ul className="space-y-4 text-slate-700 dark:text-slate-200">
            <li>✓ Modern and professional website</li>
            <li>✓ Responsive on mobile, tablet, and desktop</li>
            <li>✓ WhatsApp contact button</li>
            <li>✓ Basic SEO</li>
            <li>✓ Deployment / website online</li>
            <li>✓ Source code</li>
            <li>✓ Fast delivery</li>
            <li>✓ Revisions until satisfied</li>
          </ul>

          <a
            href="https://wa.me/6282213114640?text=Hi%2C%20I%27d%20like%20to%20ask%20about%20your%20website%20development%20service."
            className="cta-shake mt-8 block rounded-xl bg-[#25D366] px-6 py-4 text-center font-bold text-white shadow-lg transition hover:scale-105 hover:bg-[#128C7E]"
          >
            🚀 Order Your Website Now
          </a>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-slate-500 dark:text-slate-400">
          The $79 price applies to simple websites. Websites with complex
          features such as login, database, payment gateway, marketplace, or
          custom systems will be priced based on the requirements.
        </p>
      </div>
    </section>
  );
}
