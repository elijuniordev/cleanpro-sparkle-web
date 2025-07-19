import React from 'react';

// Centralizamos a informação para fácil manutenção
const contactInfo = {
  whatsappHref: 'https://wa.me/5511949806203?text=Olá! Vi o site da TNG Clean e gostaria de um orçamento.',
};

const WhatsappButton: React.FC = () => {
  return (
    <a
      href={contactInfo.whatsappHref}
      // 1. MAIS VISÍVEL: Tamanho aumentado (w-16 h-16), sombra mais forte no hover e animação de pulsar.
      // 2. COR CORRETA: Usando a cor 'bg-social-whatsapp' da nossa paleta.
      className="fixed bottom-6 right-6 bg-social-whatsapp text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 animate-pulse"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com TNG Clean Higienização pelo WhatsApp"
    >
      {/* 3. ÍCONE CORRETO: Usando um SVG do ícone oficial do WhatsApp para reconhecimento imediato. */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-9 h-9"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.89-9.89-9.89-5.452 0-9.887 4.434-9.889 9.889-.001 2.269.655 4.318 1.898 6.033l-.306 1.116-1.161.303 1.116-.307.288-.088zm-2.82-3.269c-.06-.283-.06-.283-.121-.283-.06-.002-.121-.002-.182-.002-.06 0-.121 0-.182.061-.06.061-.121.121-.182.182-.06.061-.242.364-.303.606s-.242.606-.061.91c.182.303.606.849 1.455 1.758s1.515 1.758 2.545 2.545c.242.182.364.242.485.303s.242.061.364.061c.121 0 .303-.121.424-.242.121-.121.364-.606.485-.727.121-.121.182-.242.121-.364-.06-.121-.182-.182-.364-.242s-.182-.061-.303-.061c-.121 0-.242 0-.303.061-.06.061-.121.121-.182.182-.06.061-.121.121-.182.182s-.121.061-.242.061c-.121 0-.242-.061-.303-.121s-.182-.121-.303-.182c-.242-.121-.545-.303-.909-.606s-.606-.545-.848-.909c-.182-.242-.242-.485-.242-.606s0-.242.061-.303c.061-.061.121-.121.182-.182.06-.061.121-.121.182-.182.06-.061.061-.121.061-.182z"/>
      </svg>
    </a>
  );
};

export default WhatsappButton;