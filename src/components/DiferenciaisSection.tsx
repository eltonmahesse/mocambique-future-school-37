
import { Users, Building, BookOpen } from 'lucide-react';

const DiferenciaisSection = () => {
  const diferenciais = [
    {
      icon: Users,
      title: 'Professores Qualificados',
      description: 'Equipe pedagógica experiente e dedicada ao desenvolvimento completo dos nossos alunos.',
      color: 'bg-green-primary'
    },
    {
      icon: Building,
      title: 'Estrutura Moderna',
      description: 'Instalações equipadas com tecnologia e infraestrutura adequada para o ensino de qualidade.',
      color: 'bg-red-bright'
    },
    {
      icon: BookOpen,
      title: 'Apoio Pedagógico Eficaz',
      description: 'Acompanhamento personalizado e metodologias que garantem o sucesso académico.',
      color: 'bg-green-dark'
    }
  ];

  return (
    <section className="relative section-spacing-large bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-responsive-2xl text-gray-800 mb-6">
            Por que Escolher o <span className="text-green-primary">Colégio Pércia</span>?
          </h2>
          <p className="font-poppins text-responsive-lg text-gray-600 max-w-2xl mx-auto">
            Três pilares fundamentais que fazem a diferença na educação do seu filho
          </p>
        </div>

        <div className="grid-responsive-3">
          {diferenciais.map((item, index) => (
            <div
              key={index}
              className="group text-center hover:scale-105 transition-all duration-300"
            >
              <div className="card-uniform bg-white rounded-3xl card-padding shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <item.icon size={32} className="text-white" />
                </div>
                
                <h3 className="font-poppins font-bold text-responsive-lg text-gray-800 mb-4">
                  {item.title}
                </h3>
                
                <p className="font-poppins text-responsive-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
