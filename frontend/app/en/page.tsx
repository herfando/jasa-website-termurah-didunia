import type { Metadata } from "next";
import Navbar from "@/components/en/Navbar";
import Hero from "@/components/en/Hero";
import Features from "@/components/en/Features";
import Pricing from "@/components/en/Pricing";
import Portfolio from "@/components/en/Portfolio";
import FAQ from "@/components/en/FAQ";
import CTA from "@/components/en/CTA";
import Footer from "@/components/en/Footer";

export const metadata: Metadata = {
  title: "The World's Cheapest Website Service - PROMO $79 - NO HASSLE 🔥",
  description:
    "🔥 HOT PROMO! Website for only $79, hassle-free and all-in. Pay just once, no monthly fees, and your website stays active for life.",
  alternates: {
    canonical: "/en",
    languages: {
      id: "/id",
      en: "/en",
    },
  },
};

export default function EnglishPage() {
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
