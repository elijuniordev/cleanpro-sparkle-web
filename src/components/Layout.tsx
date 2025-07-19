// src/components/Layout.tsx
import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async'; // Se o Helmet for comum a todas as páginas
import Header from './Header';
import Footer from './Footer';
import WhatsappButton from './WhatsAppButton';
// Importe SectionRefs se for necessário para o Header/Footer
import { SectionRefs } from '../pages/Index'; // Ajuste o caminho conforme necessário

interface LayoutProps {
  children: React.ReactNode;
  // Você pode passar refs aqui ou criar um contexto se muitos componentes precisarem deles
  refs?: SectionRefs;
}

const Layout: React.FC<LayoutProps> = ({ children, refs }) => {
  // Se seus refs são específicos do IndexPage, eles não deveriam estar aqui
  // Ou você precisará de uma estratégia diferente para scroll-to-section global
  // Para simplificar, vou remover os refs daqui, se eles não forem genéricos.
  // Se forem, você pode defini-los aqui e passá-los para o Header.

  return (
    <>
      {/* Se o Helmet for o mesmo para todas as páginas, mantenha aqui.
          Caso contrário, as páginas devem definir seu próprio Helmet. */}
      <Helmet>
        <title>TNG Clean Higienização</title>
        <meta name="description" content="Serviços de higienização profissional." />
        {/* Outras meta tags comuns */}
      </Helmet>

      <Header refs={refs} /> {/* Passe os refs se o Header precisar deles */}

      <main>
        {children} {/* Aqui o conteúdo específico da página será renderizado */}
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
};

export default Layout;