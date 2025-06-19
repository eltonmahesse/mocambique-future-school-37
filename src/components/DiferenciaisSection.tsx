
import { Shield, GraduationCap, Heart } from 'lucide-react';

const DiferenciaisSection = () => {
  const diferenciais = [
    {
      icon: Shield,
      title: 'Ambiente Seguro',
      description: 'Instalações protegidas e ambiente acolhedor para o desenvolvimento completo dos nossos alunos.',
      color: 'bg-green-primary'
    },
    {
      icon: GraduationCap,
      title: 'Educação de Excelência',
      description: 'Metodologia moderna com 98% de taxa de aprovação e preparação para o futuro.',
      color: 'bg-red-bright'
    },
    {
      icon: Heart,
      title: 'Desenvolvimento Integral',
      description: 'Crescimento acadêmico, social e emocional com acompanhamento personalizado.',
      color: 'bg-green-dark'
    }
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-6">
            Por que Escolher o <span className="text-green-primary">Colégio Pércia</span>?
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
            Três pilares fundamentais que fazem a diferença na educação do seu filho
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {diferenciais.map((item, index) => (
            <div
              key={index}
              className="group text-center hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <item.icon size={32} className="text-white" />
                </div>
                
                <h3 className="font-poppins font-bold text-xl text-gray-800 mb-4">
                  {item.title}
                </h3>
                
                <p className="font-poppins text-gray-600 leading-relaxed">
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
