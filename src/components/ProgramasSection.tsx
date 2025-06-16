
const ProgramasSection = () => {
  const programas = [
    {
      titulo: 'Ensino Primário',
      subtitulo: '1ª - 7ª Classe',
      descricao: 'Base sólida para o desenvolvimento cognitivo e social das crianças com metodologia lúdica e participativa.',
      imagem: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      cor: 'bg-green-dark'
    },
    {
      titulo: 'Ensino Secundário Geral',
      subtitulo: '8ª - 10ª Classe',
      descricao: 'Consolidação dos conhecimentos fundamentais com foco no desenvolvimento crítico e analítico.',
      imagem: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      cor: 'bg-red-bright'
    },
    {
      titulo: 'Ensino Pré-Universitário',
      subtitulo: '11ª - 12ª Classe',
      descricao: 'Preparação especializada para o ensino superior com orientação vocacional e acadêmica.',
      imagem: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
      cor: 'bg-green-primary'
    },
    {
      titulo: 'Reforço & Preparatórios',
      subtitulo: 'Apoio Especializado',
      descricao: 'Aulas de reforço e preparação para exames com acompanhamento personalizado.',
      imagem: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
      cor: 'bg-green-medium'
    }
  ];

  return (
    <section id="programas" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-poppins font-bold text-xl md:text-2xl lg:text-3xl text-gray-800 mb-4">
            Nossos <span className="text-green-primary">Programas</span>
          </h2>
          <p className="font-poppins text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos programas educacionais completos para todas as fases do desenvolvimento
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {programas.map((programa, index) => (
            <div
              key={index}
              className="group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full">
                {/* Imagem */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={programa.imagem}
                    alt={programa.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute top-3 right-3 ${programa.cor} text-white px-2 py-1 rounded-full`}>
                    <span className="font-poppins font-semibold text-xs">{programa.subtitulo}</span>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-4 md:p-6">
                  <h3 className="font-poppins font-bold text-lg md:text-xl text-gray-800 mb-2 md:mb-3">
                    {programa.titulo}
                  </h3>
                  
                  <p className="font-poppins text-sm md:text-base text-gray-600 leading-relaxed mb-3 md:mb-4">
                    {programa.descricao}
                  </p>

                  <div className={`w-12 h-1 ${programa.cor} rounded-full`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramasSection;
