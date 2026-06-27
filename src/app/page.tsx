import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AiEngineMarquee from "@/components/AiEngineMarquee";
import ProblemSolution from "@/components/ProblemSolution";
import ServicesGrid from "@/components/ServicesGrid";
import ToolsSection from "@/components/ToolsSection";
import ProcessSection from "@/components/ProcessSection";
import ProofSection from "@/components/ProofSection";
import IndustriesSection from "@/components/IndustriesSection";
import InsightsSection from "@/components/InsightsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

import JsonLd from "@/components/JsonLd";
import { services } from "@/lib/services";
import { itemListSchema } from "@/lib/schema";

// LocalBusiness(Organization)+WebSite JSON-LD는 layout에서 emit.
// 홈에서는 추가로 Service ItemList(서비스 8개)를 emit해 GBP↔홈 정합성을 보강한다.
// FAQPage JSON-LD는 FaqSection 내부에서 emit하므로 여기서 중복 emit하지 않는다.
export default function Home() {
  return (
    <>
      <JsonLd
        data={itemListSchema(
          "더뷰미디어 서비스",
          services.map((s) => ({
            name: s.name,
            url: s.href,
            description: s.short,
          }))
        )}
      />

      <Navbar />
      <Hero />
      <AiEngineMarquee />
      <ProblemSolution />
      <ServicesGrid />
      <ToolsSection />
      <ProcessSection />
      <ProofSection />
      <IndustriesSection />
      <InsightsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </>
  );
}
