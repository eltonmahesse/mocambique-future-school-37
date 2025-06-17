
import { Button } from '@/components/ui/button';
import { GraduationCap, Globe, Users, MapPin } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[80vh] bg-gradient-to-br from-green-dark via-green-medium to-green-primary flex items-center overflow-hidden pt-16">
      {/* Shapes decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Círculos orgânicos */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-light/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-green-light/15 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
        
        {/* Silhueta sutil do mapa de Moçambique */}
        <div className="absolute bottom-0 right-0 opacity-5">
          <svg width="200" height="300" viewBox="0 0 200 300" className="fill-white">
            <path d="M120 20C140 25 160 40 170 60L180 80C185 100 180 120 175 140L170 160C165 180 160 200 155 220L150 240C145 260 140 280 120 290L100 295C80 290 60 285 50 270L40 250C35 230 40 210 45 190L50 170C55 150 60 130 65 110L70 90C75 70 80 50 90 35L100 25C105 20 115 18 120 20Z"/>
          </svg>
        </div>
      </div>

      {/* Nuvens decorativas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 md:h-20 fill-white">
          <path d="M0,120 C200,80 400,40 600,60 C800,80 1000,100 1200,80 L1200,120 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl w-full relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Conteúdo Principal - 60% */}
          <div className="lg:col-span-3 text-white text-center lg:text-left">
            {/* Headline Principal */}
            <h1 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 animate-fade-in">
              Educação <span className="text-green-light font-extrabold italic">Integral</span>
              <br />
              do 1º ao 12º Ano
              <br />
              <span className="text-green-100 text-2xl md:text-3xl lg:text-4xl">em Moçambique</span>
            </h1>
            
            {/* Subtítulo */}
            <p className="font-poppins text-lg md:text-xl lg:text-2xl mb-8 text-green-100 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in">
              Formamos cidadãos preparados para o futuro, com aulas regulares e opções extracurriculares exclusivas.
            </p>

            {/* Atividades Extracurriculares */}
            <div className="mb-8 animate-fade-in">
              <h3 className="font-poppins font-semibold text-lg mb-4 text-green-light">
                Atividades Extracurriculares:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center justify-center lg:justify-start space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <Globe className="w-6 h-6 text-green-light" />
                  <span className="font-poppins font-medium">Francês</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <Users className="w-6 h-6 text-green-light" />
                  <span className="font-poppins font-medium">Taekwondo</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <GraduationCap className="w-6 h-6 text-green-light" />
                  <span className="font-poppins font-medium">Informática</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in">
              <Button 
                onClick={() => scrollToSection('contato')}
                className="bg-red-bright hover:bg-red-bright/90 text-white font-poppins font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl animate-pulse hover:animate-none"
              >
                Matricule seu filho hoje
              </Button>
              <button
                onClick={() => scrollToSection('programas')}
                className="font-poppins font-medium text-green-light hover:text-white underline underline-offset-4 transition-colors duration-300 py-4 px-2"
              >
                Saiba mais sobre os extracurriculares
              </button>
            </div>
          </div>

          {/* Imagem Ilustrativa - 40% */}
          <div className="lg:col-span-2 relative flex justify-center animate-fade-in">
            <div className="relative">
              {/* Container da imagem com overlay */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-2xl max-w-md w-full">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop"
                    alt="Estudantes do Colégio Pércia em sala de aula moderna"
                    className="w-full h-48 md:h-64 object-cover shadow-lg transition-transform duration-500 hover:scale-110"
                  />
                  {/* Overlay com informação */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-dark/90 to-transparent p-4">
                    <div className="flex items-center space-x-2 text-white">
                      <MapPin className="w-4 h-4 text-green-light" />
                      <span className="font-poppins text-sm font-medium">Maputo, Moçambique</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos ao redor da imagem */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-light rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-bright rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
