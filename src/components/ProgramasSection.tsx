
const ProgramasSection = () => {
  const programas = [
    {
      titulo: 'Ensino Primário',
      subtitulo: '1ª - 6ª Classe',
      descricao: 'Base sólida para o desenvolvimento cognitivo e social das crianças com metodologia lúdica e participativa.',
      imagem: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      cor: 'bg-green-dark'
    },
    {
      titulo: 'Ensino Secundário',
      subtitulo: '7ª - 9ª Classe',
      descricao: 'Consolidação dos conhecimentos fundamentais com foco no desenvolvimento crítico e analítico.',
      imagem: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      cor: 'bg-red-bright'
    },
    {
      titulo: 'Ensino Pré-Universitário',
      subtitulo: '10ª - 12ª Classe',
      descricao: 'Preparação especializada para o ensino superior com orientação vocacional e acadêmica.',
      imagem: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
      cor: 'bg-green-primary'
    },
    {
      titulo: 'Reforço Escolar',
      subtitulo: 'Apoio Especializado',
      descricao: 'Aulas de reforço com acompanhamento personalizado para melhor desempenho acadêmico.',
      imagem: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
      cor: 'bg-green-medium'
    }
  ];

  return (
    <section id="programas" className="section-spacing bg-gray-50">
      <div className="container">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-poppins font-bold text-responsive-2xl text-gray-800 mb-4">
            Nossos <span className="text-green-primary">Programas</span>
          </h2>
          <p className="font-poppins text-responsive-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos programas educacionais completos para todas as fases do desenvolvimento
          </p>
        </div>

        <div className="grid-responsive-4">
          {programas.map((programa, index) => (
            <div
              key={index}
              className="group hover:scale-105 transition-all duration-300"
            >
              <div className="card-uniform bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Imagem */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={programa.imagem}
                    alt={programa.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute top-3 right-3 ${programa.cor} text-white px-3 py-1 rounded-full`}>
                    <span className="font-poppins font-semibold text-xs">{programa.subtitulo}</span>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="card-padding card-content">
                  <h3 className="font-poppins font-bold text-responsive-base text-gray-800 mb-3">
                    {programa.titulo}
                  </h3>
                  
                  <p className="font-poppins text-responsive-sm text-gray-600 leading-relaxed mb-4 flex-grow">
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
