
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DiferenciaisSection from '@/components/DiferenciaisSection';
import SobreSection from '@/components/SobreSection';
import ProgramasSection from '@/components/ProgramasSection';
import CTASection from '@/components/CTASection';
import GaleriaSection from '@/components/GaleriaSection';
import ContatoSection from '@/components/ContatoSection';
import DepoimentosSection from '@/components/DepoimentosSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <HeroSection />
      <DiferenciaisSection />
      <SobreSection />
      <ProgramasSection />
      <CTASection />
      <GaleriaSection />
      <DepoimentosSection />
      <ContatoSection />
      <Footer />
    </div>
  );
};

export default Index;
