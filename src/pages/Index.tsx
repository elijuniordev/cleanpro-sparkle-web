// src/pages/Index.tsx
import { useState, useEffect, useRef } from 'react'; // Importe useRef
import { Helmet } from 'react-helmet-async';      // Importe Helmet
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsappButton from '../components/WhatsAppButton';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Crie refs para cada seção para o Intersection Observer
  const homeRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const locationRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            // Opcional: Atualizar o hash da URL para refletir a seção, se desejar
            // window.history.pushState(null, '', `#${entry.target.id}`);
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.5, // 50% da seção visível para ser considerada "ativa"
      }
    );

    // Observa cada seção
    if (homeRef.current) observer.observe(homeRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    if (locationRef.current) observer.observe(locationRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    // Limpeza: Desconectar o observer quando o componente desmontar
    return () => {
      observer.disconnect();
    };
  }, []); // Executa apenas uma vez na montagem

  // Funções para definir o título e a descrição baseados na seção ativa
  const getTitle = () => {
    switch (activeSection) {
      case 'home':
        return 'CleanPro | Limpeza e Higienização de Estofados e Automotiva em Osasco/SP';
      case 'services':
        return 'Nossos Serviços | Limpeza de Estofados, Automotiva e Mais - CleanPro Osasco/SP';
      case 'testimonials':
        return 'Depoimentos de Clientes Satisfeitos | CleanPro em Osasco/SP';
      case 'location':
        return 'Localização e Área de Atendimento | CleanPro Osasco/SP e Região';
      case 'contact':
        return 'Fale Conosco | Orçamento Gratuito CleanPro Limpeza - Osasco/SP';
      default:
        // Título padrão caso nenhuma seção esteja ativa ou em transição
        return 'CleanPro | Limpeza e Higienização de Estofados e Automotiva em Osasco/SP';
    }
  };

  const getDescription = () => {
    switch (activeSection) {
      case 'home':
        return 'Especialistas em limpeza e higienização de estofados, sofás, colchões, tapetes e interior automotivo em Osasco/SP e região. Solicite seu orçamento gratuito!';
      case 'services':
        return 'Conheça todos os serviços especializados de limpeza e higienização da CleanPro em Osasco/SP e região, incluindo estofados, veículos, colchões e tapetes.';
      case 'testimonials':
        return 'Veja o que nossos clientes em Osasco e região têm a dizer sobre nossos serviços de limpeza profissional de estofados e higienização automotiva.';
      case 'location':
        return 'Encontre a CleanPro em Osasco/SP ou confira nossa área de atendimento em toda a região. Estamos prontos para te atender!';
      case 'contact':
        return 'Entre em contato com a CleanPro para solicitar seu orçamento gratuito de limpeza de estofados, veículos ou outros serviços em Osasco/SP e região.';
      default:
        return 'Serviços profissionais de limpeza e higienização em Osasco/SP e região. De estofados a veículos, sua satisfação é nossa prioridade.';
    }
  };


  return (
    <>
      <Helmet>
        <title>{getTitle()}</title>
        <meta name="description" content={getDescription()} />
        {/* Você pode adicionar meta tags Open Graph específicas por seção aqui também */}
        {/* Exemplo: <meta property="og:title" content={getTitle()} /> */}
      </Helmet>

      <Header />
      {/* Passe as refs para os componentes de seção */}
      <Hero sectionRef={homeRef} />
      <Services sectionRef={servicesRef} />
      <Testimonials sectionRef={testimonialsRef} />
      <Location sectionRef={locationRef} />
      <Contact sectionRef={contactRef} />
      <Footer />
      <WhatsappButton />
    </>
  );
};

export default Index;