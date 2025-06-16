
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-royal to-blue-800 flex items-center overflow-hidden">
      {/* Nuvens decorativas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-24 fill-white">
          <path d="M0,120 C200,80 400,40 600,60 C800,80 1000,100 1200,80 L1200,120 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="text-white animate-fade-in">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl leading-tight tracking-wide mb-6">
              Educação primária e secundária com 
              <span className="text-green-light"> excelência</span>
            </h1>
            
            <p className="font-poppins text-lg md:text-xl mb-8 text-blue-100 leading-relaxed">
              Formamos mentes para transformar o futuro. Uma educação de qualidade que prepara seus filhos para os desafios do amanhã.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('sobre')}
                className="bg-red-bright hover:bg-green-primary text-white font-poppins font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Saiba Mais
              </Button>
              
              <Button 
                onClick={() => scrollToSection('contato')}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-royal font-poppins font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300"
              >
                Matricule Agora
              </Button>
            </div>
          </div>

          {/* Imagem ilustrativa */}
          <div className="relative animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
                alt="Estudantes do Colégio Pércia"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-primary text-white p-4 rounded-2xl shadow-lg">
                <p className="font-poppins font-bold text-sm text-center">
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
