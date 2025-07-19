// src/components/Layout.tsx
import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import WhatsappButton from './WhatsAppButton';
import { SectionRefs } from '../pages/Index'; // Ajuste o caminho conforme necessário
import { cn } from '@/lib/utils'; // Importe a função cn

interface LayoutProps {
  children: React.ReactNode;
  refs?: SectionRefs;
}

const Layout: React.FC<LayoutProps> = ({ children, refs }) => {
  // Use useEffect para aplicar classes ao body
  React.useEffect(() => {
    // Você pode ajustar 'bg-gray-100' para a cor ou imagem de fundo que deseja.
    // 'min-h-screen' garante que o body tenha pelo menos a altura da tela.
    // 'antialiased' é uma classe comum do Tailwind para suavizar fontes.
    document.body.className = cn(
      "min-h-screen bg-gray-100 antialiased" // <-- Classes de fundo aplicadas aqui
    );
  }, []); // O array vazio garante que isso execute apenas uma vez na montagem

  return (
    <>
      <Helmet>
        <title>TNG Clean Higienização</title>
        <meta name="description" content="Serviços de higienização profissional." />
        {/* Outras meta tags comuns */}
      </Helmet>

      <Header refs={refs} />

      <main> {/* O conteúdo específico de cada página será renderizado dentro desta main */}
        {children}
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
};

export default Layout;