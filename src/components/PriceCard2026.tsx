
import { Button } from '@/components/ui/button';

interface PriceCard2026Props {
  categoria: string;
  matricula: string;
  propina: string;
  processo: string;
  disciplinas: string[];
}

const PriceCard2026 = ({ categoria, matricula, propina, processo, disciplinas }: PriceCard2026Props) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-green-50 border border-green-100 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
      {/* Header do Card */}
      <div className="text-center mb-6">
        <h3 className="font-poppins font-bold text-xl text-green-dark mb-2">
          {categoria}
        </h3>
        <div className="w-12 h-1 bg-green-primary mx-auto rounded-full"></div>
      </div>

      {/* Valores */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-green-200">
          <span className="font-poppins font-medium text-gray-700">Matrícula</span>
          <span className="font-poppins font-bold text-green-primary">{matricula} MT</span>
        </div>
        
        <div className="flex justify-between items-center p-3 bg-green-100 rounded-lg border border-green-200">
          <span className="font-poppins font-medium text-gray-700">Propina Mensal</span>
          <span className="font-poppins font-bold text-green-primary text-lg">{propina} MT</span>
        </div>
        
        <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-green-200">
          <span className="font-poppins font-medium text-gray-700">Processo</span>
          <span className="font-poppins font-bold text-green-primary">{processo} MT</span>
        </div>
      </div>

      {/* Disciplinas */}
      <div className="border-t border-green-200 pt-4 mb-6">
        <h4 className="font-poppins font-semibold text-green-dark mb-3 text-sm">Disciplinas Incluídas:</h4>
        <div className="flex flex-wrap gap-1">
          {disciplinas.map((disciplina, index) => (
            <span
              key={index}
              className="bg-green-primary/10 text-green-dark px-2 py-1 rounded text-xs font-poppins"
            >
              {disciplina}
            </span>
          ))}
        </div>
      </div>

      {/* Botão CTA */}
      <Button
        onClick={() => scrollToSection('contato')}
        className="w-full bg-red-bright hover:bg-red-600 text-white font-poppins font-bold py-3 rounded-xl transition-all duration-300"
      >
        Matricular Agora
      </Button>
    </div>
  );
};

export default PriceCard2026;
