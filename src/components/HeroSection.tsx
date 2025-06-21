
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen bg-gradient-to-br from-green-dark via-green-medium to-green-primary flex items-center overflow-hidden">
      {/* Background Pattern - minimalista */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 60%)`
        }}></div>
      </div>

      {/* Bottom wave - ajustado para eliminar linha verde */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg 
          viewBox="0 0 1200 120" 
          className="w-full h-20 fill-white block" 
          preserveAspectRatio="none"
          style={{ transform: 'translateY(1px)' }}
        >
          <path d="M0,120 L0,80 C300,60 600,40 1200,80 L1200,120 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-6xl w-full relative z-10 pt-20 md:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center h-full">
          {/* Conteúdo Principal - simplificado e focado */}
          <div className="text-white text-center lg:text-left space-y-6 md:space-y-8">
            
            {/* Social Proof Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <div className="flex -space-x-1">
                <div className="w-6 h-6 bg-green-light rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-white rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-green-primary rounded-full border-2 border-white"></div>
              </div>
              <span className="text-white font-medium">+200 famílias confiam em nós</span>
            </div>
            
            {/* Título Principal - mais direto */}
            <div className="space-y-4">
              <h1 className="font-poppins font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                O Futuro do seu{' '}
                <span className="text-green-light">Filho</span>{' '}
                Começa Aqui
              </h1>
              <p className="font-poppins text-lg md:text-xl lg:text-2xl text-green-100 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Educação de qualidade do 1º ao 12º ano em Moçambique
              </p>
            </div>
            
            {/* Proposta de Valor - clara e concisa */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl md:text-2xl font-bold text-green-light">15+</div>
                  <div className="text-xs md:text-sm text-white/80">Anos de experiência</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-green-light">98%</div>
                  <div className="text-xs md:text-sm text-white/80">Taxa de aprovação</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-green-light">200+</div>
                  <div className="text-xs md:text-sm text-white/80">Alunos matriculados</div>
                </div>
              </div>
            </div>

            {/* CTA Principal - mais proeminente */}
            <div className="space-y-4">
              <Button 
                onClick={() => scrollToSection('contato')}
                className="group relative bg-red-bright hover:bg-red-600 text-white font-poppins font-bold px-8 md:px-10 py-3 md:py-4 rounded-2xl text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl w-full lg:w-auto"
              >
                <span className="flex items-center justify-center space-x-3">
                  <span>Garantir Vaga Agora</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <p className="text-green-100 text-sm">
                <Star className="w-4 h-4 inline text-yellow-400 mr-1" />
                Vagas limitadas para 2024 | Matrícula gratuita até 31 de Janeiro
              </p>
            </div>
          </div>

          {/* Imagem Principal - mais limpa */}
          <div className="flex justify-center">
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
