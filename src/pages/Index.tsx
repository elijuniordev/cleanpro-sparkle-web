// src/pages/Index.tsx
import React, { useRef } from 'react';
// Importações de Helmet, Header, Footer, WhatsappButton NÃO são mais necessárias aqui
// import { Helmet } from 'react-helmet-async'; // Removido
// import Header from '../components/Header'; // Removido
// import Footer from '../components/Footer'; // Removido
// import WhatsappButton from '../components/WhatsAppButton'; // Removido

import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import Contact from '../components/Contact';

export interface SectionRefs {
  inicioRef: React.RefObject<HTMLElement>;
  servicosRef: React.RefObject<HTMLElement>;
  depoimentosRef: React.RefObject<HTMLElement>;
  localizacaoRef: React.RefObject<HTMLElement>;
  contatoRef: React.RefObject<HTMLElement>;
}

const IndexPage: React.FC = () => {
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

  return (
    <>
      {/* O Helmet foi movido para o Layout.tsx */}
      {/* O Header foi movido para o Layout.tsx */}

      <section id="inicio" ref={inicioRef} className="scroll-mt-[144px]">
        <Hero refs={sectionRefs} />
      </section>

      <section id="servicos" ref={servicosRef} className="scroll-mt-[144px]">
        <Services />
      </section>

      <section id="depoimentos" ref={depoimentosRef} className="scroll-mt-[144px]">
        <Testimonials />
      </section>

      <section id="localizacao" ref={localizacaoRef} className="scroll-mt-[144px]">
        <Location />
      </section>

      <section id="contato" ref={contatoRef} className="scroll-mt-[144px]">
        <Contact />
      </section>

      {/* O Footer e WhatsappButton foram movidos para o Layout.tsx */}
      {/* O Toaster também foi movido para o main.tsx */}
    </>
  );
};

export default IndexPage;