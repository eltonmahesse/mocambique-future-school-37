
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContatoSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação simples
    if (!formData.nome || !formData.email || !formData.telefone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Simular envio
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse!",
    });

    // Limpar formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      mensagem: ''
    });
  };

  return (
    <section id="contato" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            <span className="text-green-primary">Fale</span> Conosco
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
            Entre em contato e saiba mais sobre nossa proposta educacional
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-red-bright rounded-3xl p-8 shadow-2xl animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block font-poppins font-semibold text-white mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full bg-white/90 border-0 rounded-xl py-3 px-4 font-poppins placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-green-primary"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="telefone" className="block font-poppins font-semibold text-white mb-2">
                    Telefone *
                  </label>
                  <Input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="w-full bg-white/90 border-0 rounded-xl py-3 px-4 font-poppins placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-green-primary"
                    placeholder="+258 XX XXX XXXX"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block font-poppins font-semibold text-white mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white/90 border-0 rounded-xl py-3 px-4 font-poppins placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-green-primary"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block font-poppins font-semibold text-white mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-white/90 border-0 rounded-xl py-3 px-4 font-poppins placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-green-primary resize-none"
                  placeholder="Conte-nos mais sobre seu interesse..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-royal hover:bg-blue-800 text-white font-poppins font-bold py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Enviar Mensagem
              </Button>
            </form>

            {/* Informações de contato */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="grid md:grid-cols-3 gap-6 text-white text-center">
                <div>
                  <h4 className="font-poppins font-bold mb-2">Telefone</h4>
                  <p className="font-poppins">+258 12 345 6789</p>
                </div>
                <div>
                  <h4 className="font-poppins font-bold mb-2">Email</h4>
                  <p className="font-poppins">info@colegiopercia.co.mz</p>
                </div>
                <div>
                  <h4 className="font-poppins font-bold mb-2">Endereço</h4>
                  <p className="font-poppins">6H42+8F, Maputo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
