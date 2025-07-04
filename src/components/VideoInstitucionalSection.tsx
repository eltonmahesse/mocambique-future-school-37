
import { Play, Users, GraduationCap, Award, X } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const VideoInstitucionalSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const videos = [
    {
      id: 'dQw4w9WgXcQ',
      titulo: 'Tour Virtual das Instalações',
      descricao: 'Conheça nossos laboratórios, salas de aula e espaços de convivência',
      thumbnail: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop',
      icone: Users,
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'dQw4w9WgXcQ2',
      titulo: 'Metodologia Pedagógica',
      descricao: 'Nossa abordagem inovadora para o ensino e aprendizagem',
      thumbnail: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop',
      icone: GraduationCap,
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'dQw4w9WgXcQ3',
      titulo: 'Depoimentos de Sucesso',
      descricao: 'Histórias de alunos que se destacaram após formação no Colégio Pércia',
      thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop',
      icone: Award,
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  const openVideoModal = (index: number) => {
    setSelectedVideo(index);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <section id="videos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
              Conheça o Colégio Pércia em <span className="text-green-primary">Vídeo</span>
            </h2>
            <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto">
              Descubra nossa infraestrutura, metodologia e os resultados que alcançamos na formação de jovens em Moçambique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => openVideoModal(index)}
              >
                {/* Thumbnail com overlay de play */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Overlay escuro */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  
                  {/* Botão Play */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-green-primary hover:bg-green-medium text-white p-4 rounded-full shadow-2xl group-hover:scale-110 transition-all duration-300">
                      <Play size={32} fill="white" />
                    </div>
                  </div>
                  
                  {/* Ícone da categoria */}
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                    <video.icone className="text-green-primary" size={20} />
                  </div>
                </div>

                {/* Conteúdo do card */}
                <div className="p-6">
                  <h3 className="font-poppins font-bold text-xl text-gray-800 mb-3 group-hover:text-green-primary transition-colors duration-300">
                    {video.titulo}
                  </h3>
                  
                  <p className="font-poppins text-gray-600 text-sm leading-relaxed mb-4">
                    {video.descricao}
                  </p>

                  {/* Indicador de duração */}
                  <div className="flex items-center justify-between">
                    <span className="font-poppins text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      Vídeo Institucional
                    </span>
                    <div className="w-8 h-1 bg-green-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="font-poppins font-bold text-2xl text-gray-800 mb-4">
                Interessado em conhecer mais?
              </h3>
              <p className="font-poppins text-gray-600 mb-6">
                Agende uma visita presencial e veja de perto tudo o que o Colégio Pércia oferece para o desenvolvimento do seu filho.
              </p>
              <button className="bg-green-primary hover:bg-green-medium text-white font-poppins font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                Agendar Visita
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Vídeo */}
      <Dialog open={selectedVideo !== null} onOpenChange={closeVideoModal}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black">
          <DialogHeader className="absolute top-4 right-4 z-10">
            <button
              onClick={closeVideoModal}
              className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </DialogHeader>
          
          {selectedVideo !== null && (
            <div className="aspect-video w-full">
              <iframe
                src={videos[selectedVideo].embedUrl}
                title={videos[selectedVideo].titulo}
                frameBorder="0"
                allowFullScreen
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VideoInstitucionalSection;
