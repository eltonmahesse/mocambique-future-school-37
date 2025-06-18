
import { Button } from '@/components/ui/button';
import { Phone, Clock, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-green-dark to-green-medium">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-red-bright/10 text-red-bright rounded-full px-4 py-2 text-sm font-semibold mb-4">
              <Clock size={16} />
              <span>Vagas Limitadas - Ação Rápida Necessária</span>
            </div>
            
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
              Garanta o Futuro do Seu Filho
            </h2>
            
            <p className="font-poppins text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Não deixe para depois. As matrículas estão abertas e as vagas são limitadas para garantir a qualidade do ensino.
            </p>

            {/* Benefícios da matrícula imediata */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3 justify-center">
                <CheckCircle className="w-5 h-5 text-green-primary" />
                <span className="font-poppins text-gray-700">Matrícula Gratuita</span>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <CheckCircle className="w-5 h-5 text-green-primary" />
                <span className="font-poppins text-gray-700">Desconto na 1ª Mensalidade</span>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <CheckCircle className="w-5 h-5 text-green-primary" />
                <span className="font-poppins text-gray-700">Kit Escolar Incluído</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-red-bright hover:bg-red-600 text-white font-poppins font-bold px-10 py-4 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full md:w-auto"
            >
              Matricular Agora - Vaga Garantida
            </Button>
            
            <div className="flex items-center space-x-4 bg-gray-50 rounded-2xl p-4">
              <div className="bg-green-primary p-3 rounded-full">
                <Phone className="text-white" size={20} />
              </div>
              <div className="text-left">
                <p className="font-poppins text-sm text-gray-600">Ligue agora</p>
                <a 
                  href="tel:858681368" 
                  className="font-poppins font-bold text-lg text-gray-800 hover:text-green-primary transition-colors"
                >
                  858 681 368
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
