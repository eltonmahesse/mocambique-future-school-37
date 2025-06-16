
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const DepoimentosSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const depoimentos = [
    {
      nome: 'Maria Santos',
      foto: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=150&h=150&fit=crop&crop=face',
      depoimento: 'A Escola Futuro transformou a vida do meu filho. Ele desenvolveu não apenas conhecimento acadêmico, mas também valores importantes para a vida. A equipe é excepcional!',
      filho: 'João, 12 anos',
      cor: 'bg-red-bright'
    },
    {
      nome: 'Carlos Muchanga',
      foto: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=150&h=150&fit=crop&crop=face',
      depoimento: 'Excelente qualidade de ensino e infraestrutura moderna. Minha filha se sente motivada a aprender todos os dias. Recomendo para todas as famílias que buscam o melhor.',
      filho: 'Ana, 15 anos',
      cor: 'bg-green-primary'
    },
    {
      nome: 'Fatima Abdul',
      foto: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=150&h=150&fit=crop&crop=face',
      depoimento: 'O acompanhamento personalizado e o carinho com que tratam cada aluno faz toda a diferença. Meu filho melhorou muito suas notas e sua autoestima.',
      filho: 'Pedro, 9 anos',
      cor: 'bg-blue-royal'
    }
  ];

  const nextDepoimento = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % depoimentos.length);
  };

  const prevDepoimento = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + depoimentos.length) % depoimentos.length);
  };

  return (
    <section id="depoimentos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            O que os <span className="text-green-primary">pais</span> dizem
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
            Depoimentos reais de famílias que confiam na Escola Futuro
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {depoimentos.map((depoimento, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className={`${depoimento.cor} rounded-3xl p-8 md:p-12 shadow-2xl text-white relative animate-fade-in`}>
                    {/* Aspas decorativas */}
                    <div className="absolute top-6 left-6 text-white/20 text-6xl font-bold">"</div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        {/* Foto do pai/mãe */}
                        <div className="flex-shrink-0">
                          <img
                            src={depoimento.foto}
                            alt={depoimento.nome}
                            className="w-20 h-20 rounded-full object-cover border-4 border-white/20 shadow-lg"
                          />
                        </div>

                        {/* Conteúdo */}
                        <div className="flex-1 text-center md:text-left">
                          <p className="font-poppins text-lg md:text-xl leading-relaxed mb-6 italic">
                            {depoimento.depoimento}
                          </p>

                          <div className="mb-4">
                            <h4 className="font-poppins font-bold text-xl">{depoimento.nome}</h4>
                            <p className="font-poppins text-white/80">Mãe/Pai de {depoimento.filho}</p>
                          </div>

                          {/* Estrelas */}
                          <div className="flex justify-center md:justify-start space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={20} className="fill-current text-yellow-300" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação */}
          <button
            onClick={prevDepoimento}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextDepoimento}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-8 space-x-2">
            {depoimentos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-green-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection;
