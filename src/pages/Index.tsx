import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhyItWorksSection } from "@/components/WhyItWorksSection";
import { ClassroomFlowSection } from "@/components/ClassroomFlowSection";
import { CredibilitySection } from "@/components/CredibilitySection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <WhyItWorksSection />
        <ClassroomFlowSection />
        <CredibilitySection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
