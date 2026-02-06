import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import NoDataSection from '@/components/NoDataSection';
import FeaturesAccordion from '@/components/FeaturesAccordion';
import StepsSection from '@/components/StepsSection';
import IndustryGrid from '@/components/IndustryGrid';
import TrialCTA from '@/components/TrialCTA';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
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
        <PricingSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
