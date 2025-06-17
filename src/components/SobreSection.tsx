
const SobreSection = () => {
  return (
    <section id="sobre" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Imagem */}
          <div className="animate-fade-in order-2 md:order-1">
            <div className="relative max-w-lg mx-auto md:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
                alt="Estudante desenvolvendo atividades"
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 lg:-bottom-6 lg:-right-6 bg-green-primary text-white p-3 md:p-4 lg:p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="font-poppins font-bold text-lg md:text-xl lg:text-2xl">15+</p>
                  <p className="font-poppins text-xs md:text-sm">Anos de excelência</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="animate-fade-in order-1 md:order-2">
            <h2 className="font-poppins font-bold text-xl md:text-2xl lg:text-3xl text-gray-800 mb-4 md:mb-6 text-center md:text-left">
              Nossa missão é educar com <span className="text-green-primary">propósito</span>
            </h2>
            
            <div className="space-y-4 md:space-y-6">
              <p className="font-poppins text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed text-center md:text-left">
                O Colégio Pércia nasceu com o compromisso de oferecer uma educação transformadora em Moçambique. 
                Acreditamos que cada criança tem potencial único e nossa missão é desenvolver esse potencial através 
                de metodologias inovadoras e um ambiente de aprendizagem estimulante.
              </p>
              
              <p className="font-poppins text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed text-center md:text-left">
                Com mais de 15 anos de experiência, formamos gerações de jovens preparados para os desafios do 
                futuro. Nossa equipe pedagógica qualificada, infraestrutura moderna e valores sólidos fazem do 
                Colégio Pércia a melhor escolha para o desenvolvimento integral dos seus filhos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
