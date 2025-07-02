import { Button } from "@/components/ui/button";
import { Star, Users } from "lucide-react";
import foto from "../img/lab-quimica.jpg"; // Certifique-se de que o caminho está correto

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-green-dark via-green-medium to-green-primary flex items-center overflow-hidden 
        pt-32 
        min-h-hero
        md:hero-section-tablet md:min-h-hero-tablet
        xl:hero-section-large xl:min-h-hero-large
        2xl:hero-section-ultra"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 60%)`,
          }}
        ></div>
      </div>

      <div className="container relative z-10 hero-section-spacing">
        <div className="hero-grid">
          {/* Conteúdo Principal */}
          <div className="text-white text-center lg:text-left space-y-dynamic order-2 lg:order-1 hero-content-ultra">
            {/* Social Proof Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 hero-text">
              <div className="flex -space-x-1">
                <div className="w-6 h-6 bg-green-light rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-white rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-green-primary rounded-full border-2 border-white"></div>
              </div>
              <span className="text-white font-medium">
                +200 famílias confiam em nós
              </span>
            </div>

            {/* Título Principal */}
            <div className="space-y-dynamic">
              <h1 className="font-poppins font-black hero-title leading-tight">
                O Futuro do Vosso{" "}
                <span className="text-green-light">Filho</span> Começa Aqui
              </h1>
              <p className="font-poppins hero-subtitle text-green-100 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Educação de qualidade da 1ª à 12ª Classe
              </p>
            </div>

            {/* Proposta de Valor */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl card-padding border border-white/20">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="hero-subtitle font-bold text-green-light">
                    98%
                  </div>
                  <div className="hero-text text-white/80">
                    Taxa de aprovação
                  </div>
                </div>
                <div>
                  <div className="hero-subtitle font-bold text-green-light">
                    200+
                  </div>
                  <div className="hero-text text-white/80">
                    Alunos matriculados
                  </div>
                </div>
                <div>
                  <div className="hero-subtitle font-bold text-green-light">
                    100%
                  </div>
                  <div className="hero-text text-white/80">Dedicação</div>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem Principal */}
          <div className="flex justify-center order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="relative group w-full max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={foto}
                  alt="Estudantes do Colégio Pércia"
                  className="w-full object-cover transition-all duration-700 group-hover:scale-105
                    h-72 sm:h-80 
                    md:h-96 
                    lg:h-[350px] xl:h-[350px]
                    2xl:hero-image-ultra"
                />

                {/* Overlay com informação */}
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl card-padding">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-poppins font-bold text-green-dark hero-text">
                          Ensino de Qualidade
                        </div>
                        <div
                          className="text-gray-600"
                          style={{ fontSize: "clamp(0.75rem, 2vw, 0.875rem)" }}
                        >
                          Matola, Moçambique
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users
                          className="text-green-primary"
                          style={{
                            width: "clamp(1rem, 3vw, 1.25rem)",
                            height: "clamp(1rem, 3vw, 1.25rem)",
                          }}
                        />
                        <span className="hero-text font-semibold text-green-dark">
                          200+ alunos
                        </span>
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
