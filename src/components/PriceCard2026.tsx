
import { Button } from '@/components/ui/button';

interface PriceCard2026Props {
  categoria: string;
  matricula: string;
  propina: string;
  processo: string;
  disciplinas: string[];
}

const PriceCard2026 = ({ categoria, matricula, propina, processo, disciplinas }: PriceCard2026Props) => {
  return (
    <div className="card-uniform bg-green-50 border border-green-100 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
      {/* Header do Card */}
      <div className="text-center mb-6 card-padding pb-0">
        <h3 className="font-poppins font-bold text-responsive-lg text-green-dark mb-2">
          {categoria}
        </h3>
        <div className="w-12 h-1 bg-green-primary mx-auto rounded-full"></div>
      </div>

      {/* Valores */}
      <div className="space-y-4 mb-6 px-4 md:px-6">
        <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-green-200">
          <span className="font-poppins font-medium text-gray-700 text-responsive-sm">Matrícula</span>
          <span className="font-poppins font-bold text-green-primary text-responsive-sm">{matricula} MT</span>
        </div>
        
        <div className="flex justify-between items-center p-3 bg-green-100 rounded-lg border border-green-200">
          <span className="font-poppins font-medium text-gray-700 text-responsive-sm">Propina Mensal</span>
          <span className="font-poppins font-bold text-green-primary text-responsive-base">{propina} MT</span>
        </div>
        
        <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-green-200">
          <span className="font-poppins font-medium text-gray-700 text-responsive-sm">Processo</span>
          <span className="font-poppins font-bold text-green-primary text-responsive-sm">{processo} MT</span>
        </div>
      </div>

      {/* Disciplinas */}
      <div className="border-t border-green-200 pt-4 px-4 md:px-6 card-content">
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
    </div>
  );
};

export default PriceCard2026;
