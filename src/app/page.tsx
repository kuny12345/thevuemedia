import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceSection from "@/components/ServiceSection";
import ProcessSection from "@/components/ProcessSection";
import ProofSection from "@/components/ProofSection";
import CtaSection from "@/components/CtaSection";
import InsightsSection from "@/components/InsightsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <ServiceSection />
      <ProcessSection />
      <ProofSection />
      <CtaSection />
      <InsightsSection />
      <Footer />
    </>
  );
}
