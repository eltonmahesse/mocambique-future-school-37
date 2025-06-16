
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const CTASection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-green-dark to-green-medium">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center animate-fade-in">
          <h2 className="font-poppins font-bold text-xl md:text-2xl lg:text-3xl text-white mb-4 md:mb-6 leading-tight">
            Garanta o futuro do seu filho com educação de <span className="text-green-light">qualidade</span>
          </h2>
          
          <p className="font-poppins text-base md:text-lg text-green-100 mb-6 md:mb-8 max-w-3xl mx-auto">
            Não perca a oportunidade de oferecer o melhor para seu filho. Matrículas abertas para o próximo ano letivo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-red-bright hover:bg-red-600 text-white font-poppins font-bold px-8 py-3 rounded-full text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Matricule Agora
            </Button>
            
            <div className="flex items-center space-x-3">
              <div className="bg-green-primary p-2 md:p-3 rounded-full">
                <Phone className="text-white" size={20} />
              </div>
              <div className="text-left">
                <p className="font-poppins text-sm text-green-200">Ligue agora</p>
                <a 
                  href="https://wa.me/258123456789" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-poppins font-bold text-base md:text-lg text-white hover:text-green-light transition-colors"
                >
                  +258 12 345 6789
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
