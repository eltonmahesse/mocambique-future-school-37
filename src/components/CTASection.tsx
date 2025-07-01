
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const CTASection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-spacing-large bg-gradient-to-r from-green-dark to-green-medium">
      <div className="container">
        <div className="bg-white rounded-3xl card-padding shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="font-poppins font-bold text-responsive-2xl text-gray-800 mb-4">
              Garanta o Futuro do Seu Filho
            </h2>
            
            <p className="font-poppins text-responsive-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Não deixe para depois. As matrículas estão abertas e as vagas são limitadas para garantir a qualidade do ensino.
            </p>

            {/* Benefício único disponível */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 justify-center">
                <CheckCircle className="w-5 h-5 text-green-primary flex-shrink-0" />
                <span className="font-poppins text-gray-700 text-responsive-sm">Educação de Qualidade Garantida</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-red-bright hover:bg-red-600 text-white font-poppins font-bold px-6 md:px-10 py-3 md:py-4 rounded-2xl text-responsive-base transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Matricular Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
