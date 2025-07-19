// src/pages/Index.tsx
import React, { useRef } from 'react'; // useRef ainda pode ser necessário para refs internos de componentes como Hero, mas não para as seções principais
// REMOVA: import { SectionRefsProvider } from '../context/SectionRefsContext'; // Remova esta importação

import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import Contact from '../components/Contact';

// Defina a interface SectionRefs aqui, pois ela é usada por Layout e Header
export interface SectionRefs {
  inicioRef: React.RefObject<HTMLElement>;
  servicosRef: React.RefObject<HTMLElement>;
  depoimentosRef: React.RefObject<HTMLElement>;
  localizacaoRef: React.RefObject<HTMLElement>;
  contatoRef: React.RefObject<HTMLElement>;
}

// IndexPage agora recebe refs como uma propriedade
interface IndexPageProps {
  refs?: SectionRefs; // É opcional caso seja renderizado sem refs (ex: em teste)
}

const IndexPage: React.FC<IndexPageProps> = ({ refs }) => { // Aceita refs como prop
  // REMOVA as definições de useRef para inicioRef, servicosRef, etc. A Layout.tsx as gerencia.
  // const inicioRef = useRef<HTMLElement>(null);
  // const servicosRef = useRef<HTMLElement>(null);
  // ... e assim por diante
  // REMOVA a criação do objeto sectionRefs aqui.

  return (
    <>
      {/* REMOVA quaisquer tags Helmet daqui, pois o Layout.tsx agora as gerencia */}

      <section id="inicio" ref={refs?.inicioRef} className="scroll-mt-[144px]"> {/* Usa os refs passados */}
        <Hero refs={refs} /> {/* Passe os refs para Hero se ele precisar deles */}
      </section>

      <section id="servicos" ref={refs?.servicosRef} className="scroll-mt-[144px]"> {/* Usa os refs passados */}
        <Services />
      </section>

      <section id="depoimentos" ref={refs?.depoimentosRef} className="scroll-mt-[144px]"> {/* Usa os refs passados */}
        <Testimonials />
      </section>

      <section id="localizacao" ref={refs?.localizacaoRef} className="scroll-mt-[144px]"> {/* Usa os refs passados */}
        <Location />
      </section>

      <section id="contato" ref={refs?.contatoRef} className="scroll-mt-[144px]"> {/* Usa os refs passados */}
        <Contact />
      </section>
    </>
  );
};

export default IndexPage;