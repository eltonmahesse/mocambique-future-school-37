
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DiferenciaisSection from '@/components/DiferenciaisSection';
import SobreSection from '@/components/SobreSection';
import ProgramasSection from '@/components/ProgramasSection';
import PrecosSection from '@/components/PrecosSection';
import VideoInstitucionalSection from '@/components/VideoInstitucionalSection';
import CTASection from '@/components/CTASection';
import GaleriaSection from '@/components/GaleriaSection';
import LocalizacaoSection from '@/components/LocalizacaoSection';
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
      <PrecosSection />
      <VideoInstitucionalSection />
      <CTASection />
      <GaleriaSection />
      <LocalizacaoSection />
      <DepoimentosSection />
      <ContatoSection />
      <Footer />
    </div>
  );
};

export default Index;
