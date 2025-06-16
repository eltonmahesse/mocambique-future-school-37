
import { Button } from '@/components/ui/button';

const SobreSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
                alt="Estudante desenvolvendo atividades"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-primary text-white p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <p className="font-poppins font-bold text-2xl">15+</p>
                  <p className="font-poppins text-sm">Anos de excelência</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="animate-fade-in">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-6">
              Nossa missão é educar com <span className="text-green-primary">propósito</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="font-poppins text-lg text-gray-600 leading-relaxed">
                O Colégio Pércia nasceu com o compromisso de oferecer uma educação transformadora em Moçambique. 
                Acreditamos que cada criança tem potencial único e nossa missão é desenvolver esse potencial através 
                de metodologias inovadoras e um ambiente de aprendizagem estimulante.
              </p>
              
              <p className="font-poppins text-lg text-gray-600 leading-relaxed">
                Com mais de 15 anos de experiência, formamos gerações de jovens preparados para os desafios do 
                futuro. Nossa equipe pedagógica qualificada, infraestrutura moderna e valores sólidos fazem do 
                Colégio Pércia a melhor escolha para o desenvolvimento integral dos seus filhos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('programas')}
                className="bg-green-primary hover:bg-green-medium text-white font-poppins font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              >
                Conheça Nossa Escola
              </Button>
              
              <Button 
                onClick={() => scrollToSection('instalacoes')}
                variant="outline"
                className="border-2 border-green-primary text-green-primary hover:bg-green-primary hover:text-white font-poppins font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300"
              >
                Ver Instalações
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
