
import { Button } from '@/components/ui/button';
import { GraduationCap, Globe, Users, MapPin, Sparkles, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] bg-gradient-to-br from-green-dark via-green-medium to-green-primary flex items-center overflow-hidden pt-20 pb-8">
      {/* Background Pattern - otimizado */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Floating Elements - reduzidos para melhor performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-green-light/20 to-white/10 rounded-full blur-xl animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-gradient-to-br from-white/10 to-green-light/15 rounded-full blur-2xl animate-pulse delay-1000 hidden lg:block"></div>
        
        {/* Mozambique silhouette - apenas desktop */}
        <div className="absolute bottom-0 right-0 opacity-5 hidden xl:block">
          <svg width="200" height="280" viewBox="0 0 200 300" className="fill-white/5">
            <path d="M120 20C140 25 160 40 170 60L180 80C185 100 180 120 175 140L170 160C165 180 160 200 155 220L150 240C145 260 140 280 120 290L100 295C80 290 60 285 50 270L40 250C35 230 40 210 45 190L50 170C55 150 60 130 65 110L70 90C75 70 80 50 90 35L100 25C105 20 115 18 120 20Z"/>
          </svg>
        </div>
      </div>

      {/* Bottom waves - otimizadas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 md:h-20 fill-white">
          <path d="M0,120 C200,60 400,20 600,40 C800,60 1000,90 1200,70 L1200,120 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Conteúdo Principal - melhor responsividade */}
          <div className="text-white text-center lg:text-left space-y-6 lg:space-y-8">
            {/* Badge Premium */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium animate-fade-in">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-green-light animate-pulse" />
              <span className="text-green-light">Educação de Excelência</span>
            </div>
            
            {/* Título Principal - responsivo */}
            <div className="space-y-2 md:space-y-4 animate-fade-in">
              <h1 className="font-poppins font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight">
                Educação{' '}
                <span className="relative inline-block">
                  <span className="text-green-light font-extrabold italic bg-gradient-to-r from-green-light to-white bg-clip-text text-transparent">
                    Integral
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-green-light to-transparent rounded-full"></div>
                </span>
              </h1>
              <h2 className="font-poppins font-bold text-xl md:text-2xl lg:text-3xl text-green-100 leading-tight">
                do 1º ao 12º Ano
              </h2>
              <h3 className="font-poppins font-semibold text-lg md:text-xl lg:text-2xl text-white/90">
                em Moçambique
              </h3>
            </div>
            
            {/* Subtítulo */}
            <p className="font-poppins text-base md:text-lg lg:text-xl text-green-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in">
              Formamos cidadãos preparados para o futuro, com aulas regulares e opções extracurriculares{' '}
              <span className="text-white font-semibold">exclusivas</span>.
            </p>

            {/* Atividades Extracurriculares - melhor layout */}
            <div className="animate-fade-in space-y-4 md:space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-6 md:w-8 h-0.5 bg-green-light rounded-full"></div>
                <h3 className="font-poppins font-bold text-sm md:text-base lg:text-lg text-green-light tracking-wide">
                  ATIVIDADES EXTRACURRICULARES
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto lg:mx-0">
                <div className="group flex items-center justify-center space-x-2 md:space-x-3 bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/10">
                  <div className="p-1.5 md:p-2 bg-green-light/20 rounded-lg group-hover:bg-green-light/30 transition-colors">
                    <Globe className="w-4 h-4 md:w-5 md:h-5 text-green-light" />
                  </div>
                  <span className="font-poppins font-semibold text-white text-sm md:text-base">Francês</span>
                </div>
                
                <div className="group flex items-center justify-center space-x-2 md:space-x-3 bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/10">
                  <div className="p-1.5 md:p-2 bg-green-light/20 rounded-lg group-hover:bg-green-light/30 transition-colors">
                    <Users className="w-4 h-4 md:w-5 md:h-5 text-green-light" />
                  </div>
                  <span className="font-poppins font-semibold text-white text-sm md:text-base">Taekwondo</span>
                </div>
                
                <div className="group flex items-center justify-center space-x-2 md:space-x-3 bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/10">
                  <div className="p-1.5 md:p-2 bg-green-light/20 rounded-lg group-hover:bg-green-light/30 transition-colors">
                    <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-green-light" />
                  </div>
                  <span className="font-poppins font-semibold text-white text-sm md:text-base">Informática</span>
                </div>
              </div>
            </div>

            {/* Botões CTA - melhor alinhamento */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3 md:gap-4 animate-fade-in pt-4">
              <Button 
                onClick={() => scrollToSection('sobre')}
                className="group relative bg-gradient-to-r from-green-light to-green-primary hover:from-green-primary hover:to-green-medium text-green-dark font-poppins font-bold px-6 md:px-10 py-3 md:py-6 rounded-xl md:rounded-2xl text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-light/25 border-0 overflow-hidden w-full sm:w-auto max-w-[200px]"
              >
                <span className="relative flex items-center justify-center space-x-2">
                  <span>Saiba mais</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button
                onClick={() => scrollToSection('contato')}
                variant="outline"
                className="group font-poppins font-semibold text-white border-2 border-white/30 hover:border-green-light hover:bg-green-light/10 transition-all duration-300 py-3 md:py-6 px-6 md:px-8 rounded-xl md:rounded-2xl text-base md:text-lg w-full sm:w-auto max-w-[200px] backdrop-blur-sm"
              >
                <span className="relative flex items-center justify-center space-x-2">
                  <span>Matricule hoje</span>
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
                </span>
              </Button>
            </div>
          </div>

          {/* Seção da Imagem - melhorada e responsiva */}
          <div className="flex justify-center animate-fade-in order-first lg:order-last">
            <div className="relative group max-w-sm md:max-w-md lg:max-w-lg w-full">
              {/* Container da imagem sem bordas */}
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop"
                  alt="Estudantes do Colégio Pércia em sala de aula moderna"
                  className="w-full h-48 md:h-64 lg:h-80 object-cover transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-dark/10 via-transparent to-transparent"></div>
                
                {/* Badge de localização */}
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                  <div className="bg-white/95 backdrop-blur-md rounded-lg md:rounded-xl p-2 md:p-3 border-0">
                    <div className="flex items-center space-x-2 text-green-dark">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 text-green-primary" />
                      <span className="font-poppins text-xs md:text-sm font-semibold">Maputo, Moçambique</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos - apenas em telas maiores */}
              <div className="absolute -top-4 -right-4 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-light to-green-primary rounded-xl md:rounded-2xl animate-pulse shadow-lg flex items-center justify-center hidden sm:flex">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-red-bright to-red-600 rounded-lg md:rounded-xl animate-pulse delay-500 shadow-lg hidden sm:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
