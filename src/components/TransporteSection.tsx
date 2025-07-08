import { Shield, Clock, MapPin } from "lucide-react";

const TransporteSection = () => {
  return (
    <section id="transporte" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Transporte Escolar{" "}
            <span className="text-green-primary">Seguro e Fiável</span>
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            O Colégio Pércia disponibiliza serviço de transporte escolar diário
            para garantir que os nossos alunos cheguem à escola com segurança,
            conforto e pontualidade.
          </p>

          {/* Imagem do Autocarro */}
          <div className="max-w-2xl mx-auto mb-12">
            <img
              src="imagens/transport1.jpg"
              alt="Autocarro do Colégio Pércia"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Grid de Benefícios - Reduzido para 3 cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Segurança */}
          <div className="bg-green-dark rounded-2xl p-6 text-white text-center">
            <div className="bg-green-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-white" size={24} />
            </div>
            <h3 className="font-poppins font-bold text-lg mb-3">
              Máxima Segurança
            </h3>
            <p className="font-poppins text-green-100 text-sm">
              Veículos inspeccionados e motoristas experientes com licenças
              válidas.
            </p>
          </div>

          {/* Pontualidade */}
          <div className="bg-green-medium rounded-2xl p-6 text-white text-center">
            <div className="bg-green-light w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-green-dark" size={24} />
            </div>
            <h3 className="font-poppins font-bold text-lg mb-3">
              Pontualidade
            </h3>
            <p className="font-poppins text-green-100 text-sm">
              Horários rigorosamente cumpridos com rotas optimizadas.
            </p>
          </div>

          {/* Cobertura */}
          <div className="bg-green-primary rounded-2xl p-6 text-white text-center">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-green-primary" size={24} />
            </div>
            <h3 className="font-poppins font-bold text-lg mb-3">
              Ampla Cobertura
            </h3>
            <p className="font-poppins text-white text-sm">
              Rotas que cobrem as principais zonas da Matola e arredores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransporteSection;
