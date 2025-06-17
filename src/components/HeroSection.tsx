
import { Button } from '@/components/ui/button';
import { Search, Star } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center overflow-hidden pt-16">
      {/* Elementos decorativos no fundo */}
      <div className="absolute top-20 left-10 opacity-30">
        <div className="w-16 h-16 border-2 border-white rounded-lg transform rotate-12"></div>
      </div>
      
      <div className="absolute top-32 right-20 opacity-20">
        <div className="w-12 h-12 bg-yellow-300 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-300 rounded-full mt-2 ml-4"></div>
      </div>

      <div className="absolute bottom-32 left-20 opacity-20">
        <div className="w-20 h-1 bg-white rounded-full"></div>
        <div className="w-12 h-1 bg-white rounded-full mt-2"></div>
        <div className="w-16 h-1 bg-white rounded-full mt-2"></div>
      </div>

      {/* Formas geométricas decorativas */}
      <div className="absolute top-40 right-32 opacity-30">
        <div className="w-8 h-8 bg-white transform rotate-45"></div>
      </div>

      <div className="absolute bottom-40 right-10 opacity-20">
        <div className="w-6 h-6 bg-yellow-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Conteúdo */}
          <div className="text-white text-center md:text-left relative z-10">
            {/* Badge de destaque */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">🎓 Saiba mais da Top Online</span>
            </div>

            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Educação primária e secundária com 
              <span className="block text-white"> excelência</span>
            </h1>
            
            <p className="font-poppins text-lg md:text-xl mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Formamos mentes para transformar o futuro. Uma educação de qualidade que prepara seus filhos para os desafios do amanhã.
            </p>

            {/* Barra de pesquisa estilizada */}
            <div className="relative max-w-md mx-auto md:mx-0 mb-8">
              <div className="flex items-center bg-white rounded-full px-6 py-4 shadow-lg">
                <Search className="text-gray-400 mr-3" size={20} />
                <input 
                  type="text" 
                  placeholder="Busque por cursos..."
                  className="flex-1 outline-none text-gray-700"
                />
              </div>
            </div>
          </div>

          {/* Lado direito com estudante e cards */}
          <div className="relative flex justify-center items-center">
            {/* Card de avaliação - canto superior esquerdo */}
            <div className="absolute top-0 left-0 bg-white rounded-2xl p-4 shadow-xl z-20 max-w-[120px]">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">4.8</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 leading-tight">
                  By students wordwide for quality learning and support.
                </p>
              </div>
            </div>

            {/* Card de estatísticas - canto superior direito */}
            <div className="absolute top-8 right-0 bg-white rounded-2xl p-4 shadow-xl z-20 max-w-[140px]">
              <div className="flex items-center mb-2">
                <div className="flex -space-x-2 mr-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-yellow-500 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white"></div>
                </div>
              </div>
              <div className="text-xl font-bold text-gray-800">60K+</div>
              <p className="text-xs text-gray-600 leading-tight">
                Learners growing with expert guidance from trusted mentors.
              </p>
            </div>

            {/* Imagem principal da estudante */}
            <div className="relative">
              <div className="w-80 h-96 relative">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616c9936d58?w=600&h=800&fit=crop&crop=face"
                  alt="Estudante do Colégio Pércia"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
                
                {/* Elementos decorativos ao redor da imagem */}
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full opacity-80"></div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full opacity-90 flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ondas decorativas na parte inferior */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 md:h-20 fill-white">
          <path d="M0,120 C200,80 400,40 600,60 C800,80 1000,100 1200,80 L1200,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
