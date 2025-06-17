
import PriceCard from '@/components/PriceCard';
import DocumentsInfo from '@/components/DocumentsInfo';
import CTAContact from '@/components/CTAContact';

const PrecosSection = () => {
  const precos = [
    {
      categoria: '1ª Classe',
      matricula: '2.352,00',
      propina: '3.568,78',
      processo: '525,00',
      disciplinas: 'Português, Matemática, Educação Física, Inglês, Francês, Habilidades Para Vida e Informática'
    },
    {
      categoria: '2ª e 3ª Classe',
      matricula: '2.352,00',
      propina: '4.062,59',
      processo: '525,00',
      disciplinas: 'Português, Matemática, Educação Física, Inglês, Francês, Habilidades Para Vida e Informática'
    },
    {
      categoria: '4ª a 5ª Classe',
      matricula: '2.352,00',
      propina: '4.679,89',
      processo: '525,00',
      disciplinas: 'Português, Matemática, Educação Física, Inglês, Ciência Sociais, Ciências Naturais, Francês, Habilidades Para vida e Informática'
    },
    {
      categoria: '6ª Classe',
      matricula: '2.352,00',
      propina: '4.926,85',
      processo: '525,00',
      disciplinas: 'Português, Matemática, Educação Física, Inglês, Ciência Sociais, Ciências Naturais, Francês, Habilidades Para vida e Informática'
    },
    {
      categoria: '7ª e 10ª Classe',
      matricula: '2.352,00',
      propina: '5.186,16',
      processo: '525,00',
      disciplinas: 'Português, Matemática, Educação Física, Inglês, biologia, História, Geografia, Francês, Habilidades Para Vida e Informática'
    },
    {
      categoria: '11ª Classe',
      matricula: '2.352,00',
      propina: '5.878,12',
      processo: '525,00',
      disciplinas: 'A (Área de Comunicação e Ciências Sociais), B (Área de Matemática e Ciência Naturais), C (Área de Artes Visuais e Ciências)'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="precos" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-4">
            Matrículas Abertas para <span className="text-green-primary">2025</span>
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Invista no futuro do seu filho com educação de qualidade. Valores transparentes e justos para uma formação completa.
          </p>
        </div>

        {/* Grid de Preços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {precos.map((preco, index) => (
            <PriceCard
              key={index}
              categoria={preco.categoria}
              matricula={preco.matricula}
              propina={preco.propina}
              processo={preco.processo}
              disciplinas={preco.disciplinas}
            />
          ))}
        </div>

        {/* Informações Importantes */}
        <DocumentsInfo />

        {/* CTA Section */}
        <CTAContact onMatriculaClick={() => scrollToSection('contato')} />
      </div>
    </section>
  );
};

export default PrecosSection;
