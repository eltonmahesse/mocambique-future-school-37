
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-green-dark to-green-medium flex items-center overflow-hidden pt-16">
      {/* Nuvens decorativas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 md:h-20 fill-white">
          <path d="M0,120 C200,80 400,40 600,60 C800,80 1000,100 1200,80 L1200,120 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Conteúdo */}
          <div className="text-white text-center md:text-left">
            <h1 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 md:mb-6">
              Educação primária e secundária com 
              <span className="text-green-light"> excelência</span>
            </h1>
            
            <p className="font-poppins text-lg md:text-xl mb-6 md:mb-8 text-green-100 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Formamos mentes para transformar o futuro. Uma educação de qualidade que prepara seus filhos para os desafios do amanhã.
            </p>

            <div className="flex justify-center md:justify-start">
              <Button 
                onClick={() => scrollToSection('sobre')}
                className="bg-red-bright hover:bg-green-primary text-white font-poppins font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Imagem ilustrativa - sem caixa de texto sobreposta */}
          <div className="relative flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-2xl max-w-md w-full">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
                alt="Estudantes do Colégio Pércia"
                className="w-full h-48 md:h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
