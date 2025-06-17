
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Users, Award, BookOpen, Star } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop",
      title: "Educação de",
      highlight: "Excelência",
      subtitle: "Formamos líderes para o futuro"
    },
    {
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1920&h=1080&fit=crop",
      title: "Inovação em",
      highlight: "Aprendizagem",
      subtitle: "Tecnologia e tradição em harmonia"
    },
    {
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=1080&fit=crop",
      title: "Preparamos",
      highlight: "Campeões",
      subtitle: "Cada aluno é único e especial"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/60 to-green-900/70" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full pt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content - Main Text */}
            <div className="lg:col-span-7 text-white space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">Escola #1 da Região</span>
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
                  {slides[currentSlide].title}
                  <br />
                  <span className="relative bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {slides[currentSlide].highlight}
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 rounded-full" />
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-200 font-light max-w-2xl leading-relaxed">
                  {slides[currentSlide].subtitle}
                </p>
              </div>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-gray-300">Alunos Ativos</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm text-gray-300">Anos de Experiência</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm text-gray-300">Taxa de Aprovação</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={() => scrollToSection('sobre')}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-poppins font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Conheça Nossa Escola
                </Button>
                
                <Button 
                  onClick={() => scrollToSection('contato')}
                  variant="outline"
                  className="border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 font-poppins font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 backdrop-blur-sm"
                >
                  <Play size={20} className="mr-2" />
                  Agendar Visita
                </Button>
              </div>
            </div>

            {/* Right Content - Floating Elements */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative h-96">
                {/* Main Card */}
                <div className="absolute top-8 right-0 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl max-w-sm transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Certificação Internacional</h3>
                      <p className="text-green-600 text-sm font-medium">Cambridge English</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Nossos alunos obtêm certificações reconhecidas mundialmente, preparando-os para o futuro global.
                  </p>
                </div>

                {/* Secondary Card */}
                <div className="absolute top-0 left-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-4 shadow-xl text-white transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold">4.9★</div>
                    <div className="text-xs opacity-90">Avaliação dos Pais</div>
                  </div>
                </div>

                {/* Third Card */}
                <div className="absolute bottom-0 left-8 bg-white/90 backdrop-blur-lg rounded-xl p-4 shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">24</div>
                    <div className="text-xs text-gray-600">Alunos por Turma</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-10 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;
