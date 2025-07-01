
import { Bus, Shield, Clock, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TransporteSection = () => {
  const scrollToContato = () => {
    const section = document.getElementById('contato');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="transporte" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            🚌 Transporte Escolar <span className="text-green-primary">Seguro e Fiável</span>
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto">
            O Colégio Pércia disponibiliza serviço de transporte escolar diário para garantir que 
            os nossos alunos cheguem à escola com segurança, conforto e pontualidade. 
            A tranquilidade dos pais é a nossa prioridade.
          </p>
        </div>

        {/* Grid de Benefícios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Segurança */}
          <div className="bg-green-dark rounded-3xl p-8 text-white text-center card-uniform">
            <div className="bg-green-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-white" size={28} />
            </div>
            <h3 className="font-poppins font-bold text-xl mb-4">Máxima Segurança</h3>
            <p className="font-poppins text-green-100 card-content">
              Veículos regularmente inspecionados e motoristas experientes com licenças válidas. 
              Cintos de segurança obrigatórios para todos os passageiros.
            </p>
          </div>

          {/* Conforto */}
          <div className="bg-green-primary rounded-3xl p-8 text-white text-center card-uniform">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bus className="text-green-primary" size={28} />
            </div>
            <h3 className="font-poppins font-bold text-xl mb-4">Conforto Total</h3>
            <p className="font-poppins text-green-100 card-content">
              Autocarros modernos e bem conservados, com ar condicionado e assentos confortáveis 
              para uma viagem tranquila e agradável.
            </p>
          </div>

          {/* Pontualidade */}
          <div className="bg-green-medium rounded-3xl p-8 text-white text-center card-uniform">
            <div className="bg-green-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="text-green-dark" size={28} />
            </div>
            <h3 className="font-poppins font-bold text-xl mb-4">Pontualidade</h3>
            <p className="font-poppins text-green-100 card-content">
              Horários rigorosamente cumpridos com rotas otimizadas. 
              Sistema de monitoramento para garantir chegada e partida no tempo certo.
            </p>
          </div>

          {/* Cobertura */}
          <div className="bg-red-bright rounded-3xl p-8 text-white text-center card-uniform">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="text-red-bright" size={28} />
            </div>
            <h3 className="font-poppins font-bold text-xl mb-4">Ampla Cobertura</h3>
            <p className="font-poppins text-white card-content">
              Rotas que cobrem as principais zonas da Matola e arredores, 
              facilitando o acesso de estudantes de diferentes bairros.
            </p>
          </div>
        </div>

        {/* Informações Adicionais */}
        <div className="bg-gray-50 rounded-3xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-poppins font-bold text-2xl text-gray-800 mb-4">
                Compromisso com a <span className="text-green-primary">Excelência</span>
              </h3>
              <p className="font-poppins text-gray-600 mb-4">
                O nosso serviço de transporte é mais do que apenas deslocação - é uma extensão 
                do cuidado que temos com cada aluno. Monitorizamos constantemente a qualidade 
                do serviço e mantemos comunicação directa com os pais.
              </p>
              <ul className="font-poppins text-gray-600 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-primary rounded-full mr-3"></div>
                  Manutenção preventiva regular dos veículos
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-primary rounded-full mr-3"></div>
                  Motoristas com formação em primeiros socorros
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-primary rounded-full mr-3"></div>
                  Comunicação directa com os encarregados de educação
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="bg-green-dark rounded-2xl p-6 text-white">
                <Bus className="mx-auto mb-4 text-green-light" size={48} />
                <h4 className="font-poppins font-bold text-xl mb-2">Transporte Diário</h4>
                <p className="font-poppins text-green-100 text-sm">
                  Serviço disponível de segunda a sexta-feira, 
                  com horários adequados ao funcionamento escolar
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="font-poppins font-bold text-2xl text-gray-800 mb-4">
            Interessado no Nosso Transporte Escolar?
          </h3>
          <p className="font-poppins text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contacto connosco para obter mais informações sobre rotas, horários 
            e disponibilidade do nosso serviço de transporte escolar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContato}
              className="bg-green-primary hover:bg-green-medium text-white font-poppins font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="mr-2" size={20} />
              Contactar Secretaria
            </Button>
            
            <a
              href="tel:858681368"
              className="bg-red-bright hover:bg-red-600 text-white font-poppins font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransporteSection;
