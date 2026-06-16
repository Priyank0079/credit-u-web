import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Products from "@/components/Products";
import EmiCalculator from "@/components/EmiCalculator";
import HowItWorks from "@/components/HowItWorks";
import KYCSection from "@/components/KYCSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import DownloadApp from "@/components/DownloadApp";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden pt-16 sm:pt-20 lg:pt-24">
      <Hero />
      <AnimateOnScroll>
        <TrustBar />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Products />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <EmiCalculator />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <HowItWorks />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <KYCSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhyChooseUs />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Stats />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Partners />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <FAQ />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <DownloadApp />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CTA />
      </AnimateOnScroll>
      <Footer />
    </main>
  );
}
