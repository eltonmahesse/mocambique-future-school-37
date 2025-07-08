const SobreSection = () => {
  return (
    <section id="sobre" className="section-spacing bg-white">
      <div className="container">
        <div className="grid-responsive-2 items-center">
          {/* Imagem */}
          <div className="animate-fade-in order-2 md:order-1">
            <div className="relative max-w-lg mx-auto md:max-w-none">
              <img
                src="imagens/fysic-pic1.jpg"
                alt="Estudante a desenvolver actividades"
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 lg:-bottom-6 lg:-right-6 bg-green-primary text-white card-padding rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="font-poppins font-bold text-responsive-lg">
                    100%
                  </p>
                  <p className="font-poppins text-xs md:text-sm">Dedicação</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="animate-fade-in order-1 md:order-2">
            <h2 className="font-poppins font-bold text-responsive-xl text-gray-800 mb-4 md:mb-6 text-center md:text-left">
              A nossa missão é educar com{" "}
              <span className="text-green-primary">propósito</span>
            </h2>

            <div className="space-y-4 md:space-y-6">
              <p className="font-poppins text-responsive-base text-gray-600 leading-relaxed text-center md:text-left">
                O Colégio Pércia nasceu com o compromisso de oferecer uma
                educação transformadora em Moçambique. Acreditamos que cada
                criança tem potencial único e a nossa missão é desenvolver esse
                potencial através de metodologias inovadoras e um ambiente de
                aprendizagem estimulante.
              </p>

              <p className="font-poppins text-responsive-base text-gray-600 leading-relaxed text-center md:text-left">
                Com uma sólida experiência educacional, formamos gerações de
                jovens preparados para os desafios do futuro. A nossa equipa
                pedagógica qualificada, infraestrutura moderna e valores sólidos
                fazem do Colégio Pércia a melhor escolha para o desenvolvimento
                integral dos vossos filhos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
