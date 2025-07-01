
import { MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocalizacaoSection = () => {
  const openInMaps = () => {
    window.open('https://g.co/kgs/nD3E5Jd', '_blank');
  };

  return (
    <section id="localizacao" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Como <span className="text-green-primary">Chegar</span>
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
            Encontre-nos facilmente e venha conhecer a nossa estrutura
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Mapa */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.123456789!2d32.351234!3d-25.944567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69b5f4b5f0a8b%3A0x1b5f4b5f4b5f4b5f!2sCol%C3%A9gio%20P%C3%A9rcia!5e0!3m2!1spt!2smz!4v1640000000000!5m2!1spt!2smz"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>

          {/* Informações de Localização */}
          <div className="space-y-6">
            <div className="bg-green-dark rounded-3xl p-8 text-white">
              <div className="flex items-center mb-4">
                <MapPin className="text-green-light mr-3" size={24} />
                <h3 className="font-poppins font-bold text-xl">Morada</h3>
              </div>
              <p className="font-poppins text-green-100 mb-6">
                Matola, Intaka 2<br />
                Moçambique
              </p>
              
              <Button
                onClick={openInMaps}
                className="w-full bg-green-primary hover:bg-green-medium text-white font-poppins font-semibold py-3 rounded-xl transition-all duration-300"
              >
                <MapPin className="mr-2" size={18} />
                Ver no Google Maps
              </Button>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Phone className="text-green-dark mr-3" size={24} />
                <h3 className="font-poppins font-bold text-xl text-gray-800">Informações</h3>
              </div>
              <p className="font-poppins text-gray-600 mb-4">
                Matola, Intaka 2, Moçambique<br />
                Telefone: 858 681 368
              </p>
            </div>
          </div>
        </div>

        {/* Informações Adicionais */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="bg-green-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-white" size={24} />
            </div>
            <h4 className="font-poppins font-bold text-lg text-gray-800 mb-2">Fácil Acesso</h4>
            <p className="font-poppins text-gray-600">Localização estratégica com fácil acesso de transporte público</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="bg-green-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-white" size={24} />
            </div>
            <h4 className="font-poppins font-bold text-lg text-gray-800 mb-2">Bem Localizado</h4>
            <p className="font-poppins text-gray-600">Na Matola, região conhecida e de fácil referência</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="bg-red-bright w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-white" size={24} />
            </div>
            <h4 className="font-poppins font-bold text-lg text-gray-800 mb-2">Apoio Personalizado</h4>
            <p className="font-poppins text-gray-600">Estamos sempre disponíveis para ajudar com informações de localização</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalizacaoSection;
