
import { useState } from 'react';
import { Menu, X, Facebook, Instagram, Phone } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 bg-green-dark z-50 shadow-lg">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-green-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm md:text-lg">CP</span>
            </div>
            <span className="text-white font-poppins font-bold text-base md:text-xl lg:text-xl">Colégio Pércia</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-green-light transition-colors font-poppins font-medium text-base">Home</button>
            <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-green-light transition-colors font-poppins font-medium text-base">Sobre</button>
            <button onClick={() => scrollToSection('localizacao')} className="text-white hover:text-green-light transition-colors font-poppins font-medium text-base">Localização</button>
            <button onClick={() => scrollToSection('contato')} className="text-white hover:text-green-light transition-colors font-poppins font-medium text-base">Contacto</button>
          </nav>

          {/* Social Icons & CTA - Desktop */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <div className="flex items-center space-x-3">
              <a href="tel:858681368" className="text-green-light hover:text-white transition-colors">
                <Phone size={18} />
              </a>
              <a href="#" className="text-white hover:text-green-light transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white hover:text-green-light transition-colors">
                <Instagram size={18} />
              </a>
            </div>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-red-bright hover:bg-green-primary text-white font-poppins font-semibold px-4 py-2 rounded-full transition-colors text-sm whitespace-nowrap"
            >
              Matricular Agora
            </Button>
          </div>

          {/* Tablet Navigation - Simplified */}
          <div className="hidden md:flex lg:hidden items-center space-x-6">
            <button onClick={() => scrollToSection('contato')} className="text-white hover:text-green-light transition-colors font-poppins font-medium text-sm">Contacto</button>
            <a href="tel:858681368" className="text-green-light hover:text-white transition-colors">
              <Phone size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed top-16 left-0 right-0 bg-green-dark border-t border-green-medium lg:hidden z-40">
            <nav className="py-4 space-y-1 max-h-screen overflow-y-auto">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-3 text-white hover:bg-green-medium font-poppins">Home</button>
              <button onClick={() => scrollToSection('sobre')} className="block w-full text-left px-4 py-3 text-white hover:bg-green-medium font-poppins">Sobre</button>
              <button onClick={() => scrollToSection('localizacao')} className="block w-full text-left px-4 py-3 text-white hover:bg-green-medium font-poppins">Localização</button>
              <button onClick={() => scrollToSection('contato')} className="block w-full text-left px-4 py-3 text-white hover:bg-green-medium font-poppins">Contacto</button>
              <div className="px-4 py-2">
                <Button 
                  onClick={() => scrollToSection('contato')}
                  className="w-full bg-red-bright hover:bg-green-primary text-white font-poppins font-semibold py-3 rounded-full transition-colors"
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
