
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DiferenciaisSection from '@/components/DiferenciaisSection';
import SobreSection from '@/components/SobreSection';
import ProgramasSection from '@/components/ProgramasSection';
import GaleriaSection from '@/components/GaleriaSection';
import TransporteSection from '@/components/TransporteSection';
import TabelaPrecos2026Section from '@/components/TabelaPrecos2026Section';
import VideoInstitucionalSection from '@/components/VideoInstitucionalSection';
import DepoimentosSection from '@/components/DepoimentosSection';
import CTASection from '@/components/CTASection';
import LocalizacaoSection from '@/components/LocalizacaoSection';
import ContatoSection from '@/components/ContatoSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <HeroSection />
      <DiferenciaisSection />
      <SobreSection />
      <ProgramasSection />
      <GaleriaSection />
      <TransporteSection />
      <TabelaPrecos2026Section />
      <VideoInstitucionalSection />
      <DepoimentosSection />
      <CTASection />
      <LocalizacaoSection />
      <ContatoSection />
      <Footer />
    </div>
  );
};

export default Index;
