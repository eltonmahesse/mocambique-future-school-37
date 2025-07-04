
import { Button } from '@/components/ui/button';
import { Star, Users } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-green-dark via-green-medium to-green-primary flex items-center overflow-hidden pt-20 md:pt-32 lg:pt-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 60%)`
        }}></div>
      </div>

      <div className="container relative z-10 py-6 md:py-8 lg:py-12">
        <div className="grid-responsive-2 items-center min-h-[calc(100vh-200px)] md:min-h-[calc(100vh-220px)] lg:min-h-[calc(100vh-160px)]">
          {/* Conteúdo Principal */}
          <div className="text-white text-center lg:text-left space-y-6 md:space-y-8 order-2 lg:order-1">
            
            {/* Social Proof Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <div className="flex -space-x-1">
                <div className="w-6 h-6 bg-green-light rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-white rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-green-primary rounded-full border-2 border-white"></div>
              </div>
              <span className="text-white font-medium">+200 famílias confiam em nós</span>
            </div>
            
            {/* Título Principal */}
            <div className="space-y-4">
              <h1 className="font-poppins font-black text-responsive-2xl xl:text-5xl leading-tight">
                O Futuro do Vosso{' '}
                <span className="text-green-light">Filho</span>{' '}
                Começa Aqui
              </h1>
              <p className="font-poppins text-responsive-lg text-green-100 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Educação de qualidade da 1ª à 12ª Classe
              </p>
            </div>
            
            {/* Proposta de Valor */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl card-padding border border-white/20">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-responsive-lg font-bold text-green-light">98%</div>
                  <div className="text-xs md:text-sm text-white/80">Taxa de aprovação</div>
                </div>
                <div>
                  <div className="text-responsive-lg font-bold text-green-light">200+</div>
                  <div className="text-xs md:text-sm text-white/80">Alunos matriculados</div>
                </div>
                <div>
                  <div className="text-responsive-lg font-bold text-green-light">100%</div>
                  <div className="text-xs md:text-sm text-white/80">Dedicação</div>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem Principal */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative group max-w-md w-full">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500&h=600&fit=crop"
                  alt="Estudantes do Colégio Pércia"
                  className="w-full h-80 md:h-96 object-cover transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Overlay com informação */}
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 md:p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-poppins font-bold text-green-dark text-sm md:text-base">Ensino de Qualidade</div>
                        <div className="text-xs md:text-sm text-gray-600">Matola, Moçambique</div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-green-primary" />
                        <span className="text-xs md:text-sm font-semibold text-green-dark">200+ alunos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
