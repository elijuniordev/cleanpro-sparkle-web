// src/pages/Index.tsx
import React, { useRef } from 'react';
// import { Helmet } from 'react-helmet-async'; // Remova se o Helmet for para o Layout

import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import Contact from '../components/Contact';
// Remova importações de Header, Footer, WhatsappButton

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
      {/* Se Helmet estiver no Layout, remova daqui */}
      {/* <Helmet>...</Helmet> */}

      {/* Header foi movido para o Layout */}

      <main>
        {/* CORREÇÃO: Adicionada a classe 'scroll-mt-[144px]' em todas as seções */}
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
      </main>

      {/* Footer e WhatsappButton foram movidos para o Layout */}
    </>
  );
};

export default IndexPage;