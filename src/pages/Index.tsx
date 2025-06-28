import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

// Importe seus componentes de UI de shadcn/ui e outros providers aqui
import { Toaster } from '../toast'; // O componente Toaster
import { useToast } from '../hooks/use-toast'; // O hook useToast
// import { Toaster as Sonner } from "@/components/ui/sonner"; // Se for usar sonner, ajuste o caminho
// import { TooltipProvider } from "@/components/ui/tooltip"; // Se for usar TooltipProvider
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Se for usar React Query

// Importe seus componentes de seção
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsappButton from '../components/WhatsappButton'; // Seu botão flutuante

// Mova a inicialização do queryClient para cá, se a landing page o utilizar
// const queryClient = new QueryClient(); // Descomente e use se precisar de React Query na landing

// Defina os metadados para cada seção
const sectionMetadata = {
  home: {
    title: "CleanPro | Limpeza e Higienização de Estofados e Automotiva em Osasco/SP",
    description: "Serviços profissionais de limpeza e higienização de estofados, sofás, colchões, tapetes e interior automotivo em Osasco/SP e região. Solicite seu orçamento gratuito!",
    keywords: "limpeza de estofados Osasco, higienização de sofás Osasco, limpeza de colchões Osasco, lavagem de tapetes Osasco, higienização automotiva Osasco, limpeza profissional Osasco, CleanPro Osasco"
  },
  services: {
    title: "Nossos Serviços - CleanPro Limpeza e Higienização em Osasco/SP",
    description: "Conheça nossos serviços especializados em limpeza e higienização de estofados, colchões, tapetes, interiores automotivos, e limpeza residencial/comercial em Osasco/SP e região.",
    keywords: "serviços de limpeza Osasco, limpeza de estofados, higienização de colchões, lavagem de tapetes, higienização de carros, limpeza residencial, limpeza comercial"
  },
  testimonials: {
    title: "Depoimentos de Clientes - CleanPro Limpeza em Osasco/SP",
    description: "Veja o que nossos clientes satisfeitos em Osasco/SP e região dizem sobre os serviços de limpeza e higienização da CleanPro.",
    keywords: "depoimentos limpeza Osasco, clientes satisfeitos, avaliações CleanPro, limpeza profissional Osasco"
  },
  location: {
    title: "Localização e Área de Atendimento - CleanPro Osasco/SP",
    description: "Encontre a CleanPro em Osasco/SP e confira nossa área de atendimento para serviços de limpeza e higienização. Atendemos toda a região de Osasco.",
    keywords: "localização CleanPro Osasco, área de atendimento limpeza Osasco, mapa Osasco, endereço CleanPro"
  },
  contact: {
    title: "Contato e Orçamento Gratuito - CleanPro Limpeza em Osasco/SP",
    description: "Entre em contato com a CleanPro para solicitar um orçamento gratuito de limpeza e higienização de estofados, colchões, tapetes e veículos em Osasco/SP e região.",
    keywords: "contato limpeza Osasco, orçamento gratuito limpeza, telefone CleanPro, email CleanPro, agendamento limpeza Osasco"
  }
};

const IndexPage: React.FC = () => {
  // Crie as refs para cada seção que será observada
  const homeRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const locationRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.5, // 50% da seção visível para ser considerada "ativa"
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
          // Opcional: Atualizar o hash da URL para refletir a seção
          // window.history.pushState(null, '', `#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar cada seção
    const sections = [homeRef, servicesRef, testimonialsRef, locationRef, contactRef];
    sections.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Limpeza do observer ao desmontar o componente
    return () => {
      sections.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []); // Executa apenas uma vez na montagem

  const metadata = sectionMetadata[currentSection as keyof typeof sectionMetadata];

  return (
    // <QueryClientProvider client={queryClient}> // Mova para cá se usar React Query
    // <TooltipProvider> // Mova para cá se usar TooltipProvider
      <>
        <Helmet>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
          {/* Adicione outras meta tags Open Graph e Twitter Cards dinâmicas se necessário */}
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : 'https://seusite.com.br/'} /> {/* URL dinâmica ou padrão */}
          {/* Meta tags para imagem OG e Twitter podem ser mais genéricas no index.html ou dinâmicas aqui */}
        </Helmet>

        <Header /> {/* Não passa sectionRef para Header */}
        <Hero sectionRef={homeRef} />
        <Services sectionRef={servicesRef} />
        <Testimonials sectionRef={testimonialsRef} />
        <Location sectionRef={locationRef} />
        <Contact sectionRef={contactRef} />
        <Footer />
        <WhatsappButton />
        <Toaster /> {/* O componente Toaster precisa ser renderizado aqui */}
        {/* <Sonner /> */} {/* Se você usar o Sonner, descomente e renderize aqui */}
      </>
    // </TooltipProvider>
    // </QueryClientProvider>
  );
};

export default IndexPage;