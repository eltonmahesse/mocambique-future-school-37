
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
      {/* Faixa Superior Utilitária */}
      <div className="bg-green-medium text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between text-sm">
            {/* Esquerda: Mensagem promocional */}
            <div className="flex-1">
              <p className="font-poppins text-green-100">
                Primeiros 20 alunos ganham 10% de desconto na primeira mensalidade. Aproveite!
              </p>
            </div>
            
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
            <div className="flex items-center space-x-4 flex-1 justify-end">
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

      {/* Faixa Principal de Navegação */}
      <div className="bg-green-dark">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between py-4">
            {/* Logo à esquerda */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <div className="w-10 h-10 bg-green-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">CP</span>
              </div>
              <span className="text-white font-poppins font-bold text-xl">Colégio Pércia</span>
            </div>

            {/* Menu principal centralizado - Desktop */}
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
                Estrutura
              </button>
              <button 
                onClick={() => scrollToSection('sobre')} 
                className="text-white hover:text-green-light transition-colors font-poppins font-medium"
              >
                Programa
              </button>
              <button 
                onClick={() => scrollToSection('contato')} 
                className="text-white hover:text-green-light transition-colors font-poppins font-medium"
              >
                Contacto
              </button>
            </nav>

            {/* Botão CTA à direita - Desktop */}
            <div className="hidden lg:block">
              <Button 
                onClick={() => scrollToSection('contato')}
                className="bg-red-bright hover:bg-green-primary text-white font-poppins font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Matricular Agora
              </Button>
            </div>

            {/* Menu Tablet - versão simplificada */}
            <div className="hidden md:flex lg:hidden items-center space-x-4">
              <nav className="flex items-center space-x-4">
                <button onClick={() => scrollToSection('home')} className="text-white hover:text-green-light transition-colors font-poppins font-medium text-sm">Home</button>
                <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-green-light transition-colors font-poppins font-medium text-sm">Sobre</button>
                <button onClick={() => scrollToSection('contato')} className="text-white hover:text-green-light transition-colors font-poppins font-medium text-sm">Contacto</button>
              </nav>
              <Button 
                onClick={() => scrollToSection('contato')}
                className="bg-red-bright hover:bg-green-primary text-white font-poppins font-semibold px-4 py-2 rounded-full transition-colors text-sm"
              >
                Matricular
              </Button>
            </div>

            {/* Botão do menu hambúrguer - Mobile */}
            <button
              className="md:hidden text-white z-50 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Colapsável */}
        {isMenuOpen && (
          <div className="md:hidden bg-green-dark border-t border-green-medium">
            <nav className="py-4 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-3 text-white hover:bg-green-medium font-poppins">Home</button>
              <button onClick={() => scrollToSection('sobre')} className="block w-full text-left px-4 py-3 text-white hover:bg-green-medium font-poppins">Sobre</button>
              <button onClick={() => scrollToSection('localizacao')} className="block w-full text-left px-4 py-3 text-white hover:bg-green-medium font-poppins">Estrutura</button>
              <button onClick={() => scrollToSection('sobre')} className="block w-full text-left px-4 py-3 text-white hover:bg-green-medium font-poppins">Programa</button>
              <button onClick={() => scrollToSection('contato')} className="block w-full text-left px-4 py-3 text-white hover:bg-green-medium font-poppins">Contacto</button>
              
              {/* Informações de contato mobile */}
              <div className="px-4 py-2 border-t border-green-medium mt-2">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone size={16} className="text-green-light" />
                  <span className="text-white font-poppins text-sm">858 681 368</span>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin size={16} className="text-green-light" />
                  <span className="text-white font-poppins text-sm">Matola, Intaka 2</span>
                </div>
                <div className="flex items-center space-x-3 mb-3">
                  <a href="#" className="text-green-light hover:text-white transition-colors">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="text-green-light hover:text-white transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href="https://wa.me/258858681368" className="text-green-light hover:text-white transition-colors">
                    <MessageCircle size={18} />
                  </a>
                </div>
              </div>
              
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
