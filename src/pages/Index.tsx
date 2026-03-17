import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import EcosystemSection from "@/components/EcosystemSection";
import AISection from "@/components/AISection";
import ProductsSection from "@/components/ProductsSection";
import TractionSection from "@/components/TractionSection";
import BusinessModelSection from "@/components/BusinessModelSection";
import VisionSection from "@/components/VisionSection";
import WhyInvestSection from "@/components/WhyInvestSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div dir="rtl" className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <EcosystemSection />
    <AISection />
    <ProductsSection />
    <TractionSection />
    <BusinessModelSection />
    <VisionSection />
    <WhyInvestSection />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
