
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

interface CTAContactProps {
  onMatriculaClick: () => void;
}

const CTAContact = ({ onMatriculaClick }: CTAContactProps) => {
  return (
    <div className="text-center bg-gray-50 rounded-2xl p-8">
      <h3 className="font-poppins font-bold text-xl md:text-2xl text-gray-800 mb-4">
        Garante já a vaga do seu filho!
      </h3>
      <p className="font-poppins text-gray-600 mb-6 max-w-2xl mx-auto">
        Vagas limitadas! Entre em contacto connosco para mais informações sobre o processo de matrícula.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button 
          onClick={onMatriculaClick}
          className="bg-green-primary hover:bg-green-dark text-white font-poppins font-bold px-8 py-3 rounded-full text-base transition-all duration-300 transform hover:scale-105"
        >
          Matricular Agora
        </Button>
        
        <div className="flex items-center space-x-3">
          <div className="bg-green-primary p-3 rounded-full">
            <Phone className="text-white" size={20} />
          </div>
          <div className="text-left">
            <p className="font-poppins text-sm text-gray-600">Ligue agora</p>
            <div className="font-poppins font-bold text-lg text-gray-800">
              <a href="tel:858681368" className="hover:text-green-primary transition-colors mr-2">858681368</a>
              <span className="text-gray-400">|</span>
              <a href="tel:876780260" className="hover:text-green-primary transition-colors ml-2">876780260</a>
            </div>
            <p className="font-poppins text-xs text-green-primary font-semibold">BAIRRO INTAKA 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAContact;
