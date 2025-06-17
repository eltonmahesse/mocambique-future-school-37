
interface PriceCardProps {
  categoria: string;
  matricula: string;
  propina: string;
  processo: string;
  disciplinas: string;
}

const PriceCard = ({ categoria, matricula, propina, processo, disciplinas }: PriceCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Header do Card */}
      <div className="text-center mb-6">
        <h3 className="font-poppins font-bold text-xl text-gray-800 mb-2">
          {categoria}
        </h3>
        <div className="w-12 h-1 bg-green-primary mx-auto rounded-full"></div>
      </div>

      {/* Valores */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
          <span className="font-poppins font-medium text-gray-700">Matrícula</span>
          <span className="font-poppins font-bold text-green-primary">{matricula} MT</span>
        </div>
        
        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-100">
          <span className="font-poppins font-medium text-gray-700">Propina Mensal</span>
          <span className="font-poppins font-bold text-green-primary text-lg">{propina} MT</span>
        </div>
        
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
          <span className="font-poppins font-medium text-gray-700">Processo</span>
          <span className="font-poppins font-bold text-green-primary">{processo} MT</span>
        </div>
      </div>

      {/* Disciplinas */}
      <div className="border-t pt-4">
        <h4 className="font-poppins font-semibold text-gray-800 mb-2 text-sm">Disciplinas Incluídas:</h4>
        <p className="font-poppins text-xs text-gray-600 leading-relaxed">
          {disciplinas}
        </p>
      </div>
    </div>
  );
};

export default PriceCard;
