
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GaleriaSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagens = [
    {
      src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
      alt: 'Estudantes em sala de aula'
    },
    {
      src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      alt: 'Laboratório de informática'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      alt: 'Biblioteca da escola'
    },
    {
      src: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      alt: 'Atividades extracurriculares'
    },
    {
      src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
      alt: 'Eventos escolares'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagens.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imagens.length) % imagens.length);
  };

  return (
    <section id="instalacoes" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Nossas <span className="text-green-primary">Instalações</span>
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça nossos espaços modernos e equipados para o melhor aprendizado
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative max-w-4xl mx-auto animate-fade-in">
          <div className="relative h-80 md:h-96 overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={imagens[currentIndex].src}
              alt={imagens[currentIndex].alt}
              className="w-full h-full object-cover transition-all duration-500"
            />
            
            {/* Overlay com título */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="font-poppins font-bold text-white text-xl">
                {imagens[currentIndex].alt}
              </h3>
            </div>
          </div>

          {/* Botões de navegação */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-2">
            {imagens.map((_, index) => (
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

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 max-w-4xl mx-auto">
          {imagens.map((imagem, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                index === currentIndex ? 'ring-4 ring-green-primary' : ''
              }`}
            >
              <img
                src={imagem.src}
                alt={imagem.alt}
                className="w-full h-24 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Botão Ver Tudo */}
        <div className="text-center mt-8">
          <Button 
            className="bg-green-primary hover:bg-green-medium text-white font-poppins font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Eye className="mr-2" size={20} />
            Ver Todas as Fotos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GaleriaSection;
