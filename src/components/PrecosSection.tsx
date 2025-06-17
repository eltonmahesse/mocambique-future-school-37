
import { Button } from '@/components/ui/button';
import { Check, Phone, FileText } from 'lucide-react';

const PrecosSection = () => {
  const precos = [
    {
      categoria: '1ª Classe',
      matricula: '2.352,00',
      propina: '3.568,78',
      processo: '525,00',
      disciplinas: 'Português, Matemática, Educação Física, Inglês, Francês, Habilidades Para Vida e Informática'
    },
    {
      categoria: '2ª e 3ª Classe',
      matricula: '2.352,00',
      propina: '4.062,59',
      processo: '525,00',
      disciplinas: 'Português, Matemática, Educação Física, Inglês, Francês, Habilidades Para Vida e Informática'
    },
    {
      categoria: '4ª a 5ª Classe',
      matricula: '2.352,00',
      propina: '4.679,89',
      processo: '525,00',
      disciplinas: 'Português, Matemática, Educação Física, Inglês, Ciência Sociais, Ciências Naturais, Francês, Habilidades Para vida e Informática'
    },
    {
      categoria: '6ª Classe',
      matricula: '2.352,00',
      propina: '4.926,85',
      processo: '525,00',
      disciplinas: 'Português, Matemática, Educação Física, Inglês, Ciência Sociais, Ciências Naturais, Francês, Habilidades Para vida e Informática'
    },
    {
      categoria: '7ª e 10ª Classe',
      matricula: '2.352,00',
      propina: '5.186,16',
      processo: '525,00',
      disciplinas: 'Português, Matemática, Educação Física, Inglês, biologia, História, Geografia, Francês, Habilidades Para Vida e Informática'
    },
    {
      categoria: '11ª Classe',
      matricula: '2.352,00',
      propina: '5.878,12',
      processo: '525,00',
      disciplinas: 'A (Área de Comunicação e Ciências Sociais), B (Área de Matemática e Ciência Naturais), C (Área de Artes Visuais e Ciências)'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="precos" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-4">
            Matrículas Abertas para <span className="text-green-primary">2025</span>
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Invista no futuro do seu filho com educação de qualidade. Valores transparentes e justos para uma formação completa.
          </p>
        </div>

        {/* Grid de Preços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {precos.map((preco, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header do Card */}
              <div className="text-center mb-6">
                <h3 className="font-poppins font-bold text-xl text-gray-800 mb-2">
                  {preco.categoria}
                </h3>
                <div className="w-12 h-1 bg-green-primary mx-auto rounded-full"></div>
              </div>

              {/* Valores */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-poppins font-medium text-gray-700">Matrícula</span>
                  <span className="font-poppins font-bold text-green-primary">{preco.matricula} MT</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-100">
                  <span className="font-poppins font-medium text-gray-700">Propina Mensal</span>
                  <span className="font-poppins font-bold text-green-primary text-lg">{preco.propina} MT</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-poppins font-medium text-gray-700">Processo</span>
                  <span className="font-poppins font-bold text-green-primary">{preco.processo} MT</span>
                </div>
              </div>

              {/* Disciplinas */}
              <div className="border-t pt-4">
                <h4 className="font-poppins font-semibold text-gray-800 mb-2 text-sm">Disciplinas Incluídas:</h4>
                <p className="font-poppins text-xs text-gray-600 leading-relaxed">
                  {preco.disciplinas}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Informações Importantes */}
        <div className="bg-gradient-to-r from-green-dark to-green-medium rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-poppins font-bold text-xl md:text-2xl text-white mb-4">
                Documentos Necessários
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="text-green-light" size={20} />
                  <span className="font-poppins text-white">Cópia do B.I/Cédula/Certidão de Nascimento/Passaporte ou Diré</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="text-green-light" size={20} />
                  <span className="font-poppins text-white">3 Fotos tipo passe</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="text-green-light" size={20} />
                  <span className="font-poppins text-white">Boletim, Ficha do Cadastro e Caderneta do aluno</span>
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-poppins font-bold text-white text-lg mb-2">
                  Valor do Processo Inclui:
                </h4>
                <p className="font-poppins text-green-100 text-sm mb-4">
                  • Boletim • Ficha do Cadastro • Caderneta do aluno<br />
                  <span className="text-xs">5% De Iva incluso</span>
                </p>
                
                <div className="border-t border-white/20 pt-4">
                  <p className="font-poppins text-green-light font-semibold text-sm mb-2">
                    Disciplinas Profissionalizantes:
                  </p>
                  <div className="flex justify-center md:justify-end space-x-4">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-white text-xs">Artes Plásticas</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-white text-xs">Taekwondo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 rounded-2xl p-8">
          <h3 className="font-poppins font-bold text-xl md:text-2xl text-gray-800 mb-4">
            Garante já a vaga do seu filho!
          </h3>
          <p className="font-poppins text-gray-600 mb-6 max-w-2xl mx-auto">
            Vagas limitadas! Entre em contacto connosco para mais informações sobre o processo de matrícula.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-green-primary hover:bg-green-dark text-white font-poppins font-bold px-8 py-3 rounded-full text-base transition-all duration-300 transform hover:scale-105"
            >
              Matricular Agora
            </Button>
            
            <div className="flex items-center space-x-3">
              <div className="bg-green-primary p-3 rounded-full">
                <Phone className="text-white" size={20} />
              </div>
              <div className="text-left">
                <p className="font-poppins text-sm text-gray-600">Ligue agora</p>
                <div className="font-poppins font-bold text-lg text-gray-800">
                  <a href="tel:858681368" className="hover:text-green-primary transition-colors mr-2">858681368</a>
                  <span className="text-gray-400">|</span>
                  <a href="tel:876780260" className="hover:text-green-primary transition-colors ml-2">876780260</a>
                </div>
                <p className="font-poppins text-xs text-green-primary font-semibold">BAIRRO INTAKA 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrecosSection;
