// src/components/Layout.tsx
import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom'; // Importe useLocation
import Header from './Header';
import Footer from './Footer';
import WhatsappButton from './WhatsAppButton';
import { SectionRefs } from '../pages/Index'; // Importe a interface SectionRefs
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation(); // Obtém a localização atual

  // Define refs e sectionRefs APENAS se estiver na página inicial
  const inicioRef = useRef<HTMLElement>(null);
  const servicosRef = useRef<HTMLElement>(null);
  const depoimentosRef = useRef<HTMLElement>(null);
  const localizacaoRef = useRef<HTMLElement>(null);
  const contatoRef = useRef<HTMLElement>(null);

  const sectionRefs: SectionRefs = {
    inicioRef,
    servicosRef,
    depoimentosRef,
    localizacaoRef,
    contatoRef,
  };

  // Aplica classes ao body (cor de fundo, etc.)
  React.useEffect(() => {
    document.body.className = cn(
      "min-h-screen bg-gray-100 antialiased"
    );
  }, []);

  // Clona o children (IndexPage) para injetar a prop 'refs' se for a rota inicial
  const childrenWithRefs = React.Children.map(children, child => {
    // Verifica se o componente filho é válido e se a rota atual é a homepage
    if (React.isValidElement(child) && location.pathname === '/') {
      // Aqui, estamos assumindo que o único filho do Layout na rota '/' é a IndexPage.
      // Se houver outros componentes que não sejam a IndexPage mas sejam filhos do Layout na rota '/',
      // e não precisarem de 'refs', esta abordagem ainda funcionará, pois 'refs' é opcional.
      return React.cloneElement(child, { refs: sectionRefs });
    }
    return child;
  });

  return (
    <>
      <Helmet>
        <title>TNG Clean Higienização</title>
        <meta name="description" content="Serviços de higienização profissional." />
      </Helmet>

      {/* Passa sectionRefs para o Header APENAS se estiver na página inicial, caso contrário, passa undefined */}
      <Header refs={location.pathname === '/' ? sectionRefs : undefined} />

      <main>
        {childrenWithRefs} {/* Renderiza o filho (IndexPage) com a prop 'refs' injetada */}
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
};

export default Layout;