
import { useState } from 'react';
import { Menu, X, Facebook, Instagram, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg">
      {/* Faixa Superior - simplificada */}
      <div className="bg-green-medium text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between text-sm">
            {/* Centro: Informações de contato */}
            <div className="flex items-center space-x-6 flex-1 justify-center">
              <div className="flex items-center space-x-2">
                <Phone size={14} className="text-green-light" />
                <span className="font-poppins">858 681 368</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} className="text-green-light" />
                <span className="font-poppins">info@colegiopercia.co.mz</span>
              </div>
            </div>
            
            {/* Direita: Localização e redes sociais */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <MapPin size={14} className="text-green-light" />
                <span className="font-poppins">Matola, Intaka 2</span>
              </div>
              <div className="flex items-center space-x-2">
                <a href="#" className="text-green-light hover:text-white transition-colors">
                  <Facebook size={14} />
                </a>
                <a href="#" className="text-green-light hover:text-white transition-colors">
                  <Instagram size={14} />
                </a>
                <a href="https://wa.me/258858681368" className="text-green-light hover:text-white transition-colors">
                  <MessageCircle size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa Principal - menu simplificado */}
      <div className="bg-green-dark">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-green-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm md:text-lg">CP</span>
              </div>
              <span className="text-white font-poppins font-bold text-lg md:text-xl">Colégio Pércia</span>
            </div>

            {/* Menu Desktop - simplificado */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-white hover:text-green-light transition-colors font-poppins font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('sobre')} 
                className="text-white hover:text-green-light transition-colors font-poppins font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('localizacao')} 
                className="text-white hover:text-green-light transition-colors font-poppins font-medium"
              >
                Localização
              </button>
              <button 
                onClick={() => scrollToSection('contato')} 
                className="text-white hover:text-green-light transition-colors font-poppins font-medium"
              >
                Contacto
              </button>
            </nav>

            {/* Botão CTA Desktop */}
            <div className="hidden lg:block">
              <Button 
                onClick={() => scrollToSection('contato')}
                className="bg-red-bright hover:bg-red-600 text-white font-poppins font-semibold px-6 py-2.5 rounded-full transition-colors text-sm"
              >
                Matricular Agora
              </Button>
            </div>

            {/* Menu Tablet */}
            <div className="hidden md:flex lg:hidden items-center space-x-4">
              <nav className="flex items-center space-x-4">
                <button onClick={() => scrollToSection('home')} className="text-white hover:text-green-light transition-colors font-poppins font-medium text-sm">Home</button>
                <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-green-light transition-colors font-poppins font-medium text-sm">Sobre</button>
                <button onClick={() => scrollToSection('contato')} className="text-white hover:text-green-light transition-colors font-poppins font-medium text-sm">Contacto</button>
              </nav>
              <Button 
                onClick={() => scrollToSection('contato')}
                className="bg-red-bright hover:bg-red-600 text-white font-poppins font-semibold px-4 py-2 rounded-full transition-colors text-sm"
              >
                Matricular
              </Button>
            </div>

            {/* Menu Mobile Toggle */}
            <button
              className="md:hidden text-white z-50 relative p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-green-dark border-t border-green-medium">
            <nav className="py-4 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-3 text-white hover:bg-green-medium font-poppins transition-colors">Home</button>
              <button onClick={() => scrollToSection('sobre')} className="block w-full text-left px-4 py-3 text-white hover:bg-green-medium font-poppins transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('localizacao')} className="block w-full text-left px-4 py-3 text-white hover:bg-green-medium font-poppins transition-colors">Localização</button>
              <button onClick={() => scrollToSection('contato')} className="block w-full text-left px-4 py-3 text-white hover:bg-green-medium font-poppins transition-colors">Contacto</button>
              
              {/* Informações de contato mobile */}
              <div className="px-4 py-3 border-t border-green-medium mt-2">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone size={14} className="text-green-light" />
                  <span className="text-white font-poppins text-sm">858 681 368</span>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin size={14} className="text-green-light" />
                  <span className="text-white font-poppins text-sm">Matola, Intaka 2</span>
                </div>
                <div className="flex items-center space-x-3 mb-3">
                  <a href="#" className="text-green-light hover:text-white transition-colors">
                    <Facebook size={16} />
                  </a>
                  <a href="#" className="text-green-light hover:text-white transition-colors">
                    <Instagram size={16} />
                  </a>
                  <a href="https://wa.me/258858681368" className="text-green-light hover:text-white transition-colors">
                    <MessageCircle size={16} />
                  </a>
                </div>
              </div>
              
              <div className="px-4 py-2">
                <Button 
                  onClick={() => scrollToSection('contato')}
                  className="w-full bg-red-bright hover:bg-red-600 text-white font-poppins font-semibold py-3 rounded-full transition-colors"
                >
                  Matricular Agora
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
