import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { Toaster } from '../toast';
import { useToast } from '../hooks/use-toast';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsappButton from '../components/WhatsAppButton';

const sectionMetadata = {
  home: {
    title: "TNG Higienização | Limpeza e Higienização de Estofados e Automotiva em Osasco/SP",
    description: "Serviços profissionais de higienização de estofados, sofás, colchões, tapetes e interior automotivo em Osasco/SP e região. Solicite seu orçamento gratuito!",
    keywords: "limpeza de estofados Osasco, higienização de sofás Osasco, limpeza de colchões Osasco, lavagem de tapetes Osasco, higienização automotiva Osasco, limpeza profissional Osasco, TNG Higienização Osasco"
  },
  services: {
    title: "Nossos Serviços - TNG Higienização em Osasco/SP",
    description: "Conheça nossos serviços especializados em higienização de estofados, colchões, tapetes, interiores automotivos, e limpeza residencial/comercial em Osasco/SP e região.",
    keywords: "serviços de higienização Osasco, limpeza de estofados, higienização de colchões, lavagem de tapetes, higienização de carros, limpeza residencial, limpeza comercial"
  },
  testimonials: {
    title: "Depoimentos de Clientes - TNG Higienização em Osasco/SP",
    description: "Veja o que nossos clientes satisfeitos em Osasco/SP e região dizem sobre os serviços de limpeza e higienização da TNG Higienização.",
    keywords: "depoimentos higienização Osasco, clientes satisfeitos, avaliações TNG Higienização, limpeza profissional Osasco"
  },
  location: {
    title: "Localização e Área de Atendimento - TNG Higienização Osasco/SP",
    description: "Encontre a TNG Higienização em Osasco/SP e confira nossa área de atendimento para serviços de limpeza e higienização. Atendemos toda a região de Osasco.",
    keywords: "localização TNG Higienização Osasco, área de atendimento limpeza Osasco, mapa Osasco, endereço TNG Higienização"
  },
  contact: {
    title: "Contato e Orçamento Gratuito - TNG Higienização em Osasco/SP",
    description: "Entre em contato com a TNG Higienização para solicitar um orçamento gratuito de higienização de estofados, colchões, tapetes e veículos em Osasco/SP e região.",
    keywords: "contato higienização Osasco, orçamento gratuito limpeza, telefone TNG Higienização, email TNG Higienização, agendamento limpeza Osasco"
  }
};

const IndexPage: React.FC = () => {
  const homeRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const locationRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = [homeRef, servicesRef, testimonialsRef, locationRef, contactRef];
    sections.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const metadata = sectionMetadata[currentSection as keyof typeof sectionMetadata];

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : 'https://seusite.com.br/'} />
      </Helmet>

      <Header />
      <Hero sectionRef={homeRef} />
      <Services sectionRef={servicesRef} />
      <Testimonials sectionRef={testimonialsRef} />
      <Location sectionRef={locationRef} />
      <Contact sectionRef={contactRef} />
      <Footer />
      <WhatsappButton />
      <Toaster />
    </>
  );
};

export default IndexPage;