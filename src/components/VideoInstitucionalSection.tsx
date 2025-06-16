
import { Play, Award, Users, Building, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const VideoInstitucionalSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const destaques = [
    {
      icon: Building,
      title: 'Infraestrutura Moderna',
      description: 'Salas equipadas, laboratórios e espaços de convivência'
    },
    {
      icon: Users,
      title: 'Equipe Qualificada',
      description: 'Professores experientes e dedicados ao ensino'
    },
    {
      icon: GraduationCap,
      title: 'Ensino de Excelência',
      description: 'Metodologias modernas e resultados comprovados'
    },
    {
      icon: Award,
      title: 'Reconhecimento',
      description: 'Premiações e aprovações em universidades'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-primary to-green-medium">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
            Conheça o <span className="text-green-light">Colégio Pércia</span>
          </h2>
          <p className="font-poppins text-lg text-green-100 max-w-2xl mx-auto">
            Descubra nossa estrutura, metodologia e o ambiente que oferecemos para o desenvolvimento completo dos nossos alunos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Vídeo Player */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden aspect-video">
              {!isPlaying ? (
                <div className="absolute inset-0 bg-gradient-to-br from-green-dark to-green-medium flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-6">
                      <img 
                        src="/placeholder.svg" 
                        alt="Colégio Pércia - Vídeo Institucional" 
                        className="w-full h-full object-cover rounded-2xl opacity-30"
                      />
                    </div>
                    <Button
                      onClick={handlePlayVideo}
                      className="bg-red-bright hover:bg-red-600 text-white font-poppins font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <Play className="mr-3" size={24} />
                      Assistir Vídeo Institucional
                    </Button>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Vídeo Institucional - Colégio Pércia"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>

          {/* Destaques */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="font-poppins font-bold text-2xl text-white mb-4">
                O que você verá em nosso vídeo:
              </h3>
              <p className="font-poppins text-green-100">
                Uma visão completa da nossa instituição, desde as instalações modernas até os momentos especiais do dia a dia escolar.
              </p>
            </div>

            <div className="grid gap-4">
              {destaques.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-light p-3 rounded-xl flex-shrink-0">
                      <item.icon className="text-green-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-poppins font-bold text-lg text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="font-poppins text-green-100">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button
                className="bg-white text-green-primary hover:bg-gray-100 font-poppins font-bold px-8 py-3 rounded-xl transition-all duration-300"
              >
                Agende uma Visita
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoInstitucionalSection;
