
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
    <section id="home" className="relative min-h-[85vh] bg-gradient-to-br from-green-dark via-green-medium to-green-primary flex items-center overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-light/20 to-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-br from-white/10 to-green-light/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
        
        {/* Floating icons */}
        <div className="absolute top-1/4 right-1/4 animate-bounce delay-1000">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-green-light" />
          </div>
        </div>
        
        {/* Enhanced Mozambique silhouette */}
        <div className="absolute bottom-0 right-0 opacity-8">
          <svg width="250" height="350" viewBox="0 0 200 300" className="fill-white/5">
            <path d="M120 20C140 25 160 40 170 60L180 80C185 100 180 120 175 140L170 160C165 180 160 200 155 220L150 240C145 260 140 280 120 290L100 295C80 290 60 285 50 270L40 250C35 230 40 210 45 190L50 170C55 150 60 130 65 110L70 90C75 70 80 50 90 35L100 25C105 20 115 18 120 20Z"/>
          </svg>
        </div>
      </div>

      {/* Improved bottom waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-16 md:h-24 fill-white">
          <path d="M0,120 C200,60 400,20 600,40 C800,60 1000,90 1200,70 L1200,120 Z" />
          <path d="M0,120 C300,80 600,100 900,80 C1000,70 1100,60 1200,65 L1200,120 Z" className="fill-white/50" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl w-full relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 md:gap-16 items-center">
          {/* Enhanced Content - 60% */}
          <div className="lg:col-span-3 text-white text-center lg:text-left space-y-8">
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-sm font-medium animate-fade-in">
              <Sparkles className="w-4 h-4 text-green-light animate-pulse" />
              <span className="text-green-light">Educação de Excelência</span>
            </div>
            
            {/* Enhanced Headline */}
            <div className="space-y-4 animate-fade-in">
              <h1 className="font-poppins font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] tracking-tight">
                Educação{' '}
                <span className="relative inline-block">
                  <span className="text-green-light font-extrabold italic bg-gradient-to-r from-green-light to-white bg-clip-text text-transparent">
                    Integral
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-light to-transparent rounded-full"></div>
                </span>
              </h1>
              <h2 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-green-100 leading-tight">
                do 1º ao 12º Ano
              </h2>
              <h3 className="font-poppins font-semibold text-xl md:text-2xl lg:text-3xl text-white/90">
                em Moçambique
              </h3>
            </div>
            
            {/* Enhanced Subtitle */}
            <p className="font-poppins text-lg md:text-xl lg:text-2xl text-green-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in">
              Formamos cidadãos preparados para o futuro, com aulas regulares e opções extracurriculares{' '}
              <span className="text-white font-semibold">exclusivas</span>.
            </p>

            {/* Enhanced Extracurricular Activities */}
            <div className="animate-fade-in space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-0.5 bg-green-light rounded-full"></div>
                <h3 className="font-poppins font-bold text-lg text-green-light tracking-wide">
                  ATIVIDADES EXTRACURRICULARES
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
                <div className="group flex items-center justify-center lg:justify-start space-x-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-lg border border-white/10">
                  <div className="p-2 bg-green-light/20 rounded-lg group-hover:bg-green-light/30 transition-colors">
                    <Globe className="w-6 h-6 text-green-light" />
                  </div>
                  <span className="font-poppins font-semibold text-white">Francês</span>
                </div>
                
                <div className="group flex items-center justify-center lg:justify-start space-x-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-lg border border-white/10">
                  <div className="p-2 bg-green-light/20 rounded-lg group-hover:bg-green-light/30 transition-colors">
                    <Users className="w-6 h-6 text-green-light" />
                  </div>
                  <span className="font-poppins font-semibold text-white">Taekwondo</span>
                </div>
                
                <div className="group flex items-center justify-center lg:justify-start space-x-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-lg border border-white/10">
                  <div className="p-2 bg-green-light/20 rounded-lg group-hover:bg-green-light/30 transition-colors">
                    <GraduationCap className="w-6 h-6 text-green-light" />
                  </div>
                  <span className="font-poppins font-semibold text-white">Informática</span>
                </div>
              </div>
            </div>

            {/* Enhanced CTAs - Improved button alignment */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 animate-fade-in pt-4">
              <Button 
                onClick={() => scrollToSection('programas')}
                className="group relative bg-gradient-to-r from-green-light to-green-primary hover:from-green-primary hover:to-green-medium text-green-dark font-poppins font-bold px-10 py-6 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-light/25 border-0 overflow-hidden min-w-[200px]"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center space-x-2">
                  <span>Saiba mais</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button
                onClick={() => scrollToSection('contato')}
                variant="outline"
                className="group font-poppins font-semibold text-white border-2 border-white/30 hover:border-green-light hover:bg-green-light/10 transition-all duration-300 py-6 px-8 rounded-2xl text-lg min-w-[200px] backdrop-blur-sm"
              >
                <span className="relative flex items-center justify-center space-x-2">
                  <span>Matricule hoje</span>
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </span>
              </Button>
            </div>
          </div>

          {/* Enhanced Image Section - 40% with improved design */}
          <div className="lg:col-span-2 relative flex justify-center animate-fade-in">
            <div className="relative group">
              {/* Clean image container without borders */}
              <div className="relative overflow-hidden rounded-3xl max-w-md w-full">
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop"
                  alt="Estudantes do Colégio Pércia em sala de aula moderna"
                  className="w-full h-64 md:h-80 object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Subtle overlay only on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-dark/20 via-transparent to-transparent"></div>
                
                {/* Location badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 border-0">
                    <div className="flex items-center space-x-2 text-green-dark">
                      <MapPin className="w-4 h-4 text-green-primary" />
                      <span className="font-poppins text-sm font-semibold">Maputo, Moçambique</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-green-light to-green-primary rounded-2xl animate-pulse shadow-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-red-bright to-red-600 rounded-xl animate-pulse delay-500 shadow-lg"></div>
              
              {/* Floating particles */}
              <div className="absolute top-1/4 -left-8 w-6 h-6 bg-white/20 rounded-full animate-bounce delay-700"></div>
              <div className="absolute bottom-1/3 -right-4 w-4 h-4 bg-green-light/30 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
