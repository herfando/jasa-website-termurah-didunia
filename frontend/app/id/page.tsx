import type { Metadata } from "next";
import Navbar from "@/components/id/Navbar";
import Hero from "@/components/id/Hero";
import Features from "@/components/id/Features";
import Pricing from "@/components/id/Pricing";
import Portfolio from "@/components/id/Portfolio";
import FAQ from "@/components/id/FAQ";
import CTA from "@/components/id/CTA";
import Footer from "@/components/id/Footer";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Termurah didunia - PROMO 500K - NO RIBET 🔥",
  description:
    "🔥 HOT PROMO! Website cuma Rp500.000, tanpa ribet dan sudah all-in. Bayar cukup sekali, tanpa biaya bulanan, dan website aktif seumur hidup.",
  alternates: {
    canonical: "/id",
    languages: {
      id: "/id",
      en: "/en",
    },
  },
};

export default function IndonesiaPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Portfolio />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
