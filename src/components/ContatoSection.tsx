
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

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
    
    if (!formData.nome || !formData.telefone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome e telefone.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Solicitação enviada!",
      description: "Entraremos em contacto em até 2 horas.",
    });

    setFormData({
      nome: '',
      email: '',
      telefone: '',
      mensagem: ''
    });
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            <span className="text-green-primary">Contactar</span>
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
            Entre em contacto connosco e esclareça todas as vossas dúvidas sobre matrículas e programas educacionais
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Formulário Simplificado */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="mb-6">
              <h3 className="font-poppins font-bold text-xl text-gray-800 mb-2">
                Envie-nos uma Mensagem
              </h3>
              <p className="text-gray-600">Resposta garantida em até 2 horas</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-poppins font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border-gray-200 focus:border-green-primary focus:ring-green-primary"
                    placeholder="O vosso nome completo"
                    required
                  />
                </div>
                
                <div>
                  <label className="block font-poppins font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <Input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border-gray-200 focus:border-green-primary focus:ring-green-primary"
                    placeholder="+258 XX XXX XXXX"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-poppins font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border-gray-200 focus:border-green-primary focus:ring-green-primary"
                  placeholder="o-vosso@email.com"
                />
              </div>

              <div>
                <label className="block font-poppins font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <Textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full rounded-xl border-gray-200 focus:border-green-primary focus:ring-green-primary resize-none"
                  placeholder="Como podemos ajudar-vos? Perguntas sobre matrículas, programas educacionais, horários..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-primary hover:bg-green-dark text-white font-poppins font-bold py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Informações de Contacto */}
          <div className="space-y-8">
            <div className="bg-green-primary rounded-3xl p-8 text-white">
              <h3 className="font-poppins font-bold text-xl mb-6">Entre em Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <a href="tel:858681368" className="hover:text-green-light transition-colors">
                      858 681 368
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@colegiopercia.co.mz" className="hover:text-green-light transition-colors">
                      info@colegiopercia.co.mz
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Localização</p>
                    <p>Matola, Intaka 2, Moçambique</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Horário de Atendimento</p>
                    <p>Segunda a Sexta: 7h00 - 17h00</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <a 
                  href="https://wa.me/258858681368" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-white text-green-primary font-bold py-3 px-6 rounded-xl hover:bg-green-light hover:text-white transition-all duration-300"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Directo</span>
                </a>
              </div>
            </div>

            {/* Informações Adicionais */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h4 className="font-poppins font-bold text-lg text-gray-800 mb-4">
                Precisa de Informações Rápidas?
              </h4>
              <div className="space-y-3 text-sm text-gray-600">
                <p>• <strong>Matrículas abertas</strong> para o ano lectivo 2026</p>
                <p>• <strong>Visitas às instalações</strong> de segunda a sexta</p>
                <p>• <strong>Documentação necessária</strong> para matrícula disponível</p>
                <p>• <strong>Programas educacionais</strong> do pré-escolar ao ensino médio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
