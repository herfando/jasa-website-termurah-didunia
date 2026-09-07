export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xl font-black text-white">
              Web<span className="text-orange-500">500K</span>
            </div>

            <p className="mt-2 text-sm text-slate-400">
              Professional, fast, and affordable website services.
            </p>
          </div>

          <div className="flex gap-6 text-sm font-medium text-slate-300">
            <a href="#harga" className="transition hover:text-orange-400">
              Pricing
            </a>

            <a href="#portfolio" className="transition hover:text-orange-400">
              Portfolio
            </a>

            <a href="#faq" className="transition hover:text-orange-400">
              FAQ
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Web500K. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
