
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play, Star, Users, Award } from 'lucide-react';

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
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 group"
      >
        <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 group"
      >
        <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
      </button>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              {/* Stats Cards */}
              <div className="flex gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 border border-white/20">
                  <div className="bg-green-primary rounded-full p-2">
                    <Users size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-gray-200">Alunos</div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 border border-white/20">
                  <div className="bg-green-primary rounded-full p-2">
                    <Award size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm text-gray-200">Anos</div>
                  </div>
                </div>
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="font-poppins font-bold text-5xl lg:text-7xl leading-tight">
                  {slides[currentSlide].title}
                  <br />
                  <span className="text-green-light relative">
                    {slides[currentSlide].highlight}
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-light to-green-primary rounded-full" />
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-200 font-light max-w-2xl">
                  {slides[currentSlide].subtitle}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={() => scrollToSection('sobre')}
                  className="bg-green-primary hover:bg-green-medium text-white font-poppins font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Descobrir Mais
                </Button>
                
                <Button 
                  onClick={() => scrollToSection('contato')}
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-dark font-poppins font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 backdrop-blur-sm"
                >
                  <Play size={20} className="mr-2" />
                  Ver Vídeo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-8">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-200">4.9/5 Avaliação dos Pais</span>
                </div>
              </div>
            </div>

            {/* Right Content - Floating Cards */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Main Achievement Card */}
                <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-green-primary rounded-full p-3">
                      <Award size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Certificação Internacional</h3>
                      <p className="text-green-primary text-sm">Cambridge English</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Nossos alunos obtêm certificações reconhecidas mundialmente
                  </p>
                </div>

                {/* Secondary Cards */}
                <div className="absolute -top-8 -right-8 bg-green-primary/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl text-white transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm opacity-90">Taxa de Aprovação</div>
                </div>

                <div className="absolute -bottom-4 -left-8 bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="text-3xl font-bold text-green-primary">24</div>
                  <div className="text-sm text-gray-600">Alunos por Turma</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
