import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import NoDataSection from '@/components/NoDataSection';
import FeaturesAccordion from '@/components/FeaturesAccordion';
import StepsSection from '@/components/StepsSection';
import IndustryGrid from '@/components/IndustryGrid';
import TrialCTA from '@/components/TrialCTA';
import PaySpaceSection from '@/components/PaySpaceSection';
import PricingSection from '@/components/PricingSection';
import TimeBanditsSection from '@/components/TimeBanditsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <NoDataSection />
        <TimeBanditsSection />
        <FeaturesAccordion />
        <StepsSection />
        <IndustryGrid />
        <TrialCTA />
        <PaySpaceSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
