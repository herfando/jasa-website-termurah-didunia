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
  title: "Website Development $79 | Lifetime Active Website | Web500K",
  description:
    "Professional website development for just $79. Your website stays active for life — fast, responsive, mobile-friendly, and ready to go online. Perfect for businesses, small businesses, and professionals.",
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
