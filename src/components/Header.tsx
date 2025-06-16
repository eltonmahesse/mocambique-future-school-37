
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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">CP</span>
            </div>
            <span className="text-white font-poppins font-bold text-xl">Colégio Pércia</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-green-light transition-colors font-poppins font-medium">Home</button>
            <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-green-light transition-colors font-poppins font-medium">Sobre</button>
            <button onClick={() => scrollToSection('programas')} className="text-white hover:text-green-light transition-colors font-poppins font-medium">Programas</button>
            <button onClick={() => scrollToSection('instalacoes')} className="text-white hover:text-green-light transition-colors font-poppins font-medium">Instalações</button>
            <button onClick={() => scrollToSection('localizacao')} className="text-white hover:text-green-light transition-colors font-poppins font-medium">Localização</button>
            <button onClick={() => scrollToSection('depoimentos')} className="text-white hover:text-green-light transition-colors font-poppins font-medium">Depoimentos</button>
            <button onClick={() => scrollToSection('contato')} className="text-white hover:text-green-light transition-colors font-poppins font-medium">Contato</button>
          </nav>

          {/* Social Icons & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <a href="https://wa.me/258123456789" target="_blank" rel="noopener noreferrer" className="text-green-light hover:text-white transition-colors">
                <Phone size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-light transition-colors">
                <Instagram size={20} />
              </a>
            </div>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-red-bright hover:bg-green-primary text-white font-poppins font-semibold px-6 py-2 rounded-full transition-colors"
            >
              Admissão
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-green-dark border-t border-green-medium">
            <nav className="py-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-white hover:bg-green-medium font-poppins">Home</button>
              <button onClick={() => scrollToSection('sobre')} className="block w-full text-left px-4 py-2 text-white hover:bg-green-medium font-poppins">Sobre</button>
              <button onClick={() => scrollToSection('programas')} className="block w-full text-left px-4 py-2 text-white hover:bg-green-medium font-poppins">Programas</button>
              <button onClick={() => scrollToSection('instalacoes')} className="block w-full text-left px-4 py-2 text-white hover:bg-green-medium font-poppins">Instalações</button>
              <button onClick={() => scrollToSection('localizacao')} className="block w-full text-left px-4 py-2 text-white hover:bg-green-medium font-poppins">Localização</button>
              <button onClick={() => scrollToSection('depoimentos')} className="block w-full text-left px-4 py-2 text-white hover:bg-green-medium font-poppins">Depoimentos</button>
              <button onClick={() => scrollToSection('contato')} className="block w-full text-left px-4 py-2 text-white hover:bg-green-medium font-poppins">Contato</button>
              <div className="px-4 py-2">
                <Button 
                  onClick={() => scrollToSection('contato')}
                  className="w-full bg-red-bright hover:bg-green-primary text-white font-poppins font-semibold py-2 rounded-full transition-colors"
                >
                  Admissão
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
