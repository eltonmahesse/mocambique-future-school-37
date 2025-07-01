
import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-header shadow-lg">
      {/* Faixa Superior - Desktop */}
      <div className="bg-green-dark text-white py-2 hidden lg:block">
        <div className="container">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} className="text-green-light flex-shrink-0" />
                <span className="font-poppins">858 681 368</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} className="text-green-light flex-shrink-0" />
                <span className="font-poppins">info@colegiopercia.co.mz</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <MapPin size={14} className="text-green-light flex-shrink-0" />
                <span className="font-poppins">Matola, Intaka 2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-header Tablet - Todas as informações sem contacto */}
      <div className="bg-green-dark text-white py-2 hidden md:block lg:hidden">
        <div className="container">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone size={12} className="text-green-light" />
                <span className="font-poppins">858 681 368</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={12} className="text-green-light" />
                <span className="font-poppins">info@colegiopercia.co.mz</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={12} className="text-green-light" />
              <span className="font-poppins">Matola, Intaka 2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-header Mobile - Simplificado */}
      <div className="bg-green-dark text-white py-2 md:hidden">
        <div className="container">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2">
              <Phone size={12} className="text-green-light" />
              <span className="font-poppins">858 681 368</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={12} className="text-green-light" />
              <span className="font-poppins">Matola</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Principal */}
      <div className="bg-green-medium">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            {/* Logo - com melhor espaçamento */}
            <div className="flex items-center space-x-3 flex-shrink-0 min-w-fit">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg md:text-xl">CP</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-poppins font-bold text-base md:text-lg lg:text-xl leading-tight">
                  <span className="hidden sm:inline">Colégio Pércia</span>
                  <span className="sm:hidden">C. Pércia</span>
                </span>
              </div>
            </div>

            {/* Menu Desktop - com links reduzidos */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-white hover:text-green-light transition-colors font-poppins font-medium text-base whitespace-nowrap"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')} 
                className="text-white hover:text-green-light transition-colors font-poppins font-medium text-base whitespace-nowrap"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('programas')} 
                className="text-white hover:text-green-light transition-colors font-poppins font-medium text-base whitespace-nowrap"
              >
                Programas
              </button>
              <button 
                onClick={() => scrollToSection('localizacao')} 
                className="text-white hover:text-green-light transition-colors font-poppins font-medium text-base whitespace-nowrap"
              >
                Localização
              </button>
              <button 
                onClick={() => scrollToSection('contato')} 
                className="text-white hover:text-green-light transition-colors font-poppins font-medium text-base whitespace-nowrap"
              >
                Contacto
              </button>
            </nav>

            {/* Menu Tablet - com links reduzidos */}
            <nav className="hidden md:flex lg:hidden items-center space-x-4 xl:space-x-6">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-white hover:text-green-light transition-colors font-poppins font-medium text-sm whitespace-nowrap px-1"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')} 
                className="text-white hover:text-green-light transition-colors font-poppins font-medium text-sm whitespace-nowrap px-1"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('programas')} 
                className="text-white hover:text-green-light transition-colors font-poppins font-medium text-sm whitespace-nowrap px-1"
              >
                Programas
              </button>
              <button 
                onClick={() => scrollToSection('localizacao')} 
                className="text-white hover:text-green-light transition-colors font-poppins font-medium text-sm whitespace-nowrap px-1"
              >
                Local
              </button>
              <button 
                onClick={() => scrollToSection('contato')} 
                className="text-white hover:text-green-light transition-colors font-poppins font-medium text-sm whitespace-nowrap px-1"
              >
                Contacto
              </button>
            </nav>

            {/* CTA Principal - com texto menor e padding reduzido */}
            <div className="hidden md:block flex-shrink-0 ml-2 lg:ml-4">
              <Button 
                onClick={() => scrollToSection('contato')}
                className="bg-red-bright hover-bg-red-600 text-white font-poppins font-bold px-3 lg:px-4 py-2 rounded-full transition-all duration-300 transform hover-scale-105 text-xs lg:text-sm whitespace-nowrap"
              >
                Matricular
              </Button>
            </div>

            {/* Menu Mobile Toggle - com espaçamento adequado */}
            <button
              className="md:hidden text-white z-dropdown relative p-2 ml-2 flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile - com links reduzidos */}
        {isMenuOpen && (
          <div className="md:hidden bg-green-dark border-t border-green-medium z-sub-header">
            <nav className="py-4 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-6 py-3 text-white hover:bg-green-medium font-poppins transition-colors">Início</button>
              <button onClick={() => scrollToSection('sobre')} className="block w-full text-left px-6 py-3 text-white hover:bg-green-medium font-poppins transition-colors">Sobre Nós</button>
              <button onClick={() => scrollToSection('programas')} className="block w-full text-left px-6 py-3 text-white hover:bg-green-medium font-poppins transition-colors">Programas</button>
              <button onClick={() => scrollToSection('localizacao')} className="block w-full text-left px-6 py-3 text-white hover:bg-green-medium font-poppins transition-colors">Localização</button>
              <button onClick={() => scrollToSection('contato')} className="block w-full text-left px-6 py-3 text-white hover:bg-green-medium font-poppins transition-colors">Contacto</button>
              
              <div className="px-6 py-4">
                <Button 
                  onClick={() => scrollToSection('contato')}
                  className="w-full bg-red-bright hover:bg-red-600 text-white font-poppins font-bold py-3 rounded-full text-sm"
                >
                  Matricular
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
