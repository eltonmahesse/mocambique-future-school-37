
import { Check, FileText } from 'lucide-react';

const DocumentsInfo = () => {
  return (
    <div className="bg-gradient-to-r from-green-dark to-green-medium rounded-2xl p-8 mb-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="font-poppins font-bold text-xl md:text-2xl text-white mb-4">
            Documentos Necessários
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Check className="text-green-light" size={20} />
              <span className="font-poppins text-white">Cópia do B.I/Cédula/Certidão de Nascimento/Passaporte ou Diré</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="text-green-light" size={20} />
              <span className="font-poppins text-white">3 Fotografias tipo passe</span>
            </div>
            <div className="flex items-center space-x-3">
              <FileText className="text-green-light" size={20} />
              <span className="font-poppins text-white">Boletim, Ficha do Cadastro e Caderneta do aluno</span>
            </div>
          </div>
        </div>

        <div className="text-center md:text-right">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="font-poppins font-bold text-white text-lg mb-2">
              Valor do Processo Inclui:
            </h4>
            <p className="font-poppins text-green-100 text-sm mb-4">
              • Boletim • Ficha do Cadastro • Caderneta do aluno<br />
              <span className="text-xs">5% De Iva incluso</span>
            </p>
            
            <div className="border-t border-white/20 pt-4">
              <p className="font-poppins text-green-light font-semibold text-sm mb-2">
                Disciplinas Profissionalizantes:
              </p>
              <div className="flex justify-center md:justify-end space-x-4">
                <span className="bg-white/20 px-3 py-1 rounded-full text-white text-xs">Artes Plásticas</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-white text-xs">Taekwondo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsInfo;
