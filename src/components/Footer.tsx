
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-green-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo e descrição */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-green-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">CP</span>
              </div>
              <span className="font-poppins font-bold text-2xl">Colégio Pércia</span>
            </div>
            <p className="font-poppins text-green-100 leading-relaxed mb-6">
              Formamos mentes para transformar o futuro. Educação de qualidade em Moçambique há mais de 15 anos.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/258123456789" target="_blank" rel="noopener noreferrer" className="bg-green-primary p-3 rounded-full hover:bg-green-medium transition-colors">
                <Phone size={20} />
              </a>
              <a href="#" className="bg-green-medium p-3 rounded-full hover:bg-green-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-pink-600 p-3 rounded-full hover:bg-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links úteis */}
          <div>
            <h3 className="font-poppins font-bold text-xl mb-4">Links Úteis</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('home')} className="font-poppins text-green-100 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('sobre')} className="font-poppins text-green-100 hover:text-white transition-colors">
                  Sobre Nós
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('programas')} className="font-poppins text-green-100 hover:text-white transition-colors">
                  Programas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('instalacoes')} className="font-poppins text-green-100 hover:text-white transition-colors">
                  Instalações
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('videos')} className="font-poppins text-green-100 hover:text-white transition-colors">
                  Vídeos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('depoimentos')} className="font-poppins text-green-100 hover:text-white transition-colors">
                  Depoimentos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contato')} className="font-poppins text-green-100 hover:text-white transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contatos */}
          <div>
            <h3 className="font-poppins font-bold text-xl mb-4">Contactos</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-green-primary mt-1" size={20} />
                <div>
                  <p className="font-poppins font-semibold">Telefone</p>
                  <a href="tel:+258123456789" className="font-poppins text-green-100 hover:text-white transition-colors">
                    +258 12 345 6789
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="text-green-primary mt-1" size={20} />
                <div>
                  <p className="font-poppins font-semibold">Email</p>
                  <a href="mailto:info@colegiopercia.co.mz" className="font-poppins text-green-100 hover:text-white transition-colors">
                    info@colegiopercia.co.mz
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-green-primary mt-1" size={20} />
                <div>
                  <p className="font-poppins font-semibold">Endereço</p>
                  <p className="font-poppins text-green-100">
                    6H42+8F, Maputo<br />
                    Próximo à Primeira Rotunda da Circular, Matola
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-medium mt-8 pt-8 text-center">
          <p className="font-poppins text-green-100">
            © 2024 Colégio Pércia. Todos os direitos reservados. | Educação de qualidade para um futuro melhor.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
