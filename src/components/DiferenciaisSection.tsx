
import { Shield, GraduationCap, Users, Heart } from 'lucide-react';

const DiferenciaisSection = () => {
  const diferenciais = [
    {
      icon: Shield,
      title: 'Ambiente Seguro',
      description: 'Instalações protegidas e ambiente acolhedor para o desenvolvimento dos nossos alunos.',
      color: 'bg-green-dark',
      iconColor: 'text-white'
    },
    {
      icon: GraduationCap,
      title: 'Educação de Qualidade',
      description: 'Metodologia moderna e recursos pedagógicos atualizados para o melhor aprendizado.',
      color: 'bg-red-bright',
      iconColor: 'text-white'
    },
    {
      icon: Users,
      title: 'Professores Capacitados',
      description: 'Equipe altamente qualificada e em constante formação para oferecer o melhor ensino.',
      color: 'bg-green-medium',
      iconColor: 'text-white'
    },
    {
      icon: Heart,
      title: 'Desenvolvimento Integral',
      description: 'Focamos no crescimento acadêmico, social e emocional de cada estudante.',
      color: 'bg-orange-500',
      iconColor: 'text-white'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-4">
            Por que escolher o <span className="text-green-primary">Colégio Pércia</span>?
          </h2>
          <p className="font-poppins text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Nossos diferenciais fazem toda a diferença na formação dos seus filhos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferenciais.map((item, index) => (
            <div
              key={index}
              className="group hover:scale-105 transition-all duration-300"
            >
              <div className={`${item.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full`}>
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-4">
                    <item.icon size={40} className={item.iconColor} />
                  </div>
                  
                  <h3 className="font-poppins font-bold text-lg md:text-xl text-white mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="font-poppins text-sm md:text-base text-white/90 leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
