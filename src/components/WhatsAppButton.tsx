import React from 'react';
import { MessageCircle } from 'lucide-react'; // Ícone do WhatsApp do Lucide

const WhatsappButton: React.FC = () => {
  return (
    <a
      // ATUALIZE COM SEU NÚMERO DE WHATSAPP REAL (código do país + DDD + número)
      href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20limpeza%20e%20higieniza%C3%A7%C3%A3o."
      className="fixed bottom-6 right-6 bg-whatsapp-green text-white rounded-full w-14 h-14 flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition-transform duration-300 z-50"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-8 h-8" /> {/* Use o ícone de mensagem do Lucide */}
    </a>
  );
};

export default WhatsappButton;