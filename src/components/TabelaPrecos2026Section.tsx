
import PriceCard2026 from '@/components/PriceCard2026';
import { GraduationCap, Users } from 'lucide-react';

const TabelaPrecos2026Section = () => {
  const precos2026 = [
    {
      categoria: '1ª Classe',
      matricula: '2.352,00',
      propina: '3.568,78',
      processo: '525,00',
      disciplinas: ['Português', 'Matemática', 'Educação Física', 'Inglês', 'Francês', 'Habilidades para Vida', 'Informática']
    },
    {
      categoria: '2ª e 3ª Classe',
      matricula: '2.352,00',
      propina: '4.062,59',
      processo: '525,00',
      disciplinas: ['Português', 'Matemática', 'Educação Física', 'Inglês', 'Francês', 'Habilidades para Vida', 'Informática']
    },
    {
      categoria: '4ª e 5ª Classe',
      matricula: '2.352,00',
      propina: '4.679,89',
      processo: '525,00',
      disciplinas: ['Português', 'Matemática', 'Educação Física', 'Inglês', 'Francês', 'Habilidades para Vida', 'Informática', 'Ciências Sociais', 'Ciências Naturais']
    },
    {
      categoria: '6ª Classe',
      matricula: '2.352,00',
      propina: '4.926,85',
      processo: '525,00',
      disciplinas: ['Português', 'Matemática', 'Educação Física', 'Inglês', 'Francês', 'Habilidades para Vida', 'Informática', 'Ciências Sociais', 'Ciências Naturais']
    },
    {
      categoria: '7ª Classe',
      matricula: '2.352,00',
      propina: '5.186,16',
      processo: '525,00',
      disciplinas: ['Português', 'Matemática', 'Educação Física', 'Inglês', 'Biologia', 'História', 'Geografia', 'Francês', 'Habilidades para Vida', 'Informática']
    },
    {
      categoria: '8ª a 10ª Classe',
      matricula: '2.352,00',
      propina: '5.186,16',
      processo: '525,00',
      disciplinas: ['Português', 'Matemática', 'Educação Física', 'Inglês', 'Biologia', 'História', 'Geografia', 'Francês', 'Habilidades para Vida', 'Informática', 'Química', 'Física']
    },
    {
      categoria: '11ª Classe',
      matricula: '2.352,00',
      propina: '5.878,12',
      processo: '525,00',
      disciplinas: ['Área A: Comunicação e Ciências Sociais', 'Área B: Matemática e Ciências Naturais', 'Área C: Artes Visuais e Ciências']
    }
  ];

  return (
    <section id="precos-2026" className="section-spacing-large bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-responsive-2xl text-gray-800 mb-6">
            Tabela de Preços <span className="text-green-primary">2026</span>
          </h2>
          <p className="font-poppins text-responsive-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Investimento transparente na educação de qualidade do seu filho. Valores justos para uma formação completa e diferenciada.
          </p>
          
          {/* Badge Disciplinas Profissionalizantes */}
          <div className="inline-flex items-center space-x-3 bg-green-primary/10 border border-green-primary/20 rounded-2xl px-6 py-3 mb-8">
            <GraduationCap className="text-green-primary" size={24} />
            <div className="text-left">
              <p className="font-poppins font-semibold text-green-dark text-sm">💼 Disciplinas Profissionalizantes</p>
              <p className="font-poppins text-green-medium text-xs">Artes Plásticas e Taekwondo</p>
            </div>
          </div>
        </div>

        {/* Grid de Preços */}
        <div className="grid-responsive-3 mb-16">
          {precos2026.map((preco, index) => (
            <PriceCard2026
              key={index}
              categoria={preco.categoria}
              matricula={preco.matricula}
              propina={preco.propina}
              processo={preco.processo}
              disciplinas={preco.disciplinas}
            />
          ))}
        </div>

        {/* Observações Complementares */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl card-padding">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="text-green-primary" size={28} />
            <h3 className="font-poppins font-bold text-responsive-lg text-gray-800">
              Informações Importantes
            </h3>
          </div>
          
          <div className="grid-responsive-2">
            <div>
              <h4 className="font-poppins font-semibold text-green-dark mb-4">📋 O que está incluído:</h4>
              <ul className="space-y-2 font-poppins text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-primary">•</span>
                  <span>O valor do processo inclui: Boletim, Ficha do Cadastro e Caderneta do Aluno</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-primary">•</span>
                  <span>Todos os valores incluem 5% de IVA</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-primary">•</span>
                  <span>Os detalhes bancários podem ser solicitados junto à secretaria</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-poppins font-semibold text-green-dark mb-4">📄 Documentos exigidos para matrícula:</h4>
              <ul className="space-y-2 font-poppins text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-primary">•</span>
                  <span>Cópia do B.I., Cédula, Certidão de Nascimento ou Passaporte/Dire</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-primary">•</span>
                  <span>3 fotos tipo passe</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabelaPrecos2026Section;
