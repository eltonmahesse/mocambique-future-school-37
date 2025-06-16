
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[70vh] md:min-h-[85vh] bg-gradient-to-br from-green-dark to-green-medium flex items-center overflow-hidden">
      {/* Nuvens decorativas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 md:h-20 fill-white">
          <path d="M0,120 C200,80 400,40 600,60 C800,80 1000,100 1200,80 L1200,120 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Conteúdo */}
          <div className="text-white animate-fade-in">
            <h1 className="font-poppins font-bold text-2xl md:text-4xl lg:text-5xl leading-tight tracking-wide mb-4 md:mb-6">
              Educação primária e secundária com 
              <span className="text-green-light"> excelência</span>
            </h1>
            
            <p className="font-poppins text-base md:text-lg mb-6 md:mb-8 text-green-100 leading-relaxed">
              Formamos mentes para transformar o futuro. Uma educação de qualidade que prepara seus filhos para os desafios do amanhã.
            </p>

            <div className="flex justify-center md:justify-start">
              <Button 
                onClick={() => scrollToSection('sobre')}
                className="bg-red-bright hover:bg-green-primary text-white font-poppins font-semibold px-8 py-3 rounded-full text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Imagem ilustrativa */}
          <div className="relative animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
                alt="Estudantes do Colégio Pércia"
                className="w-full h-48 md:h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-green-primary text-white p-3 md:p-4 rounded-xl shadow-lg">
                <p className="font-poppins font-bold text-xs md:text-sm text-center">
                  "Formamos mentes para<br />transformar o futuro"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
