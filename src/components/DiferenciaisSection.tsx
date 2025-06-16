
import { Shield, GraduationCap, Users, Heart } from 'lucide-react';

const DiferenciaisSection = () => {
  const diferenciais = [
    {
      icon: Shield,
      title: 'Ambiente Seguro',
      description: 'Instalações protegidas e ambiente acolhedor para o desenvolvimento dos nossos alunos.',
      color: 'bg-blue-royal',
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Por que escolher a <span className="text-green-primary">Escola Futuro</span>?
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
            Nossos diferenciais fazem toda a diferença na formação dos seus filhos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {diferenciais.map((item, index) => (
            <div
              key={index}
              className="group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${item.color} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full`}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <item.icon size={48} className={item.iconColor} />
                  </div>
                  
                  <h3 className="font-poppins font-bold text-xl text-white mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="font-poppins text-white/90 leading-relaxed">
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
