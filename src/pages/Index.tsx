import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Toaster } from '@/components/ui/toaster';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsappButton from '../components/WhatsAppButton';

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
      <Helmet>
        <title>TNG Clean Higienização | Limpeza de Estofados em Osasco/SP e Região</title>
        <meta 
          name="description" 
          content="Higienização profissional de sofás, colchões, tapetes e veículos em Osasco/SP e região. Deixe seu ambiente renovado e livre de ácaros. Peça seu orçamento!" 
        />
        <meta 
          name="keywords" 
          content="higienização de estofados osasco, limpeza de sofá osasco, limpeza de sofá barueri, limpeza de sofá carapicuíba, higienização automotiva cotia, limpeza de colchão jandira, tng clean, limpeza de estofados alphaville, higienização granja viana" 
        />
        <meta property="og:title" content="TNG Clean Higienização | Limpeza Profissional em Osasco e Região" />
        <meta property="og:description" content="Serviço especializado de limpeza profunda em sofás, colchões e veículos em Osasco, SP e região. Elimine manchas, odores e ácaros." />
        <meta property="og:url" content="https://www.tngclean.com.br/" />
        <meta name="author" content="TNG Clean Higienização" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header refs={sectionRefs} />
      
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
      
      <Footer />
      <WhatsappButton />
      <Toaster />
    </>
  );
};

export default IndexPage;