"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-300 bg-slate-800 dark:border-slate-800 dark:bg-slate-900">
      <nav className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-2 md:py-4">
          {/* Logo */}
          <Link
            href="/id"
            onClick={closeMenu}
            className="text-xl font-black tracking-tight text-white"
          >
            Web<span className="text-orange-500">500K</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#harga"
              className="text-sm font-medium text-slate-300 transition hover:text-blue-400"
            >
              Harga
            </Link>

            <Link
              href="#portfolio"
              className="text-sm font-medium text-slate-300 transition hover:text-blue-400"
            >
              Portfolio
            </Link>

            <Link
              href="#faq"
              className="text-sm font-medium text-slate-300 transition hover:text-blue-400"
            >
              FAQ
            </Link>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-lg border border-slate-200 px-3 py-2 text-lg transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
            )}

            <Link
              href="https://wa.me/6282213114640?text=Halo%20kak%2C%20saya%20mau%20tanya%20tentang%20jasa%20pembuatan%20website%20%F0%9F%98%8A"
              className="rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#128C7E]"
            >
              Chat WhatsApp
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-3 md:hidden">
            <span className="rounded-md bg-blue-50 px-2 py-1 text-sm dark:bg-blue-950">
              🇮🇩
            </span>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-lg border border-slate-700 px-3 py-2 text-lg transition hover:bg-slate-800"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
            )}

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg border border-slate-700 px-3 py-2 text-xl text-slate-300 transition hover:bg-slate-800"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-slate-800 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              <Link
                href="#harga"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                Harga
              </Link>

              <Link
                href="#portfolio"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                Portfolio
              </Link>

              <Link
                href="#faq"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                FAQ
              </Link>

              <Link
                href="https://wa.me/6282213114640?text=Halo%20kak%2C%20saya%20mau%20tanya%20tentang%20jasa%20pembuatan%20website"
                onClick={closeMenu}
                className="mt-2 rounded-lg bg-[#25D366] px-4 py-3 text-center font-bold text-white transition hover:bg-[#128C7E]"
              >
                Chat WhatsApp
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
