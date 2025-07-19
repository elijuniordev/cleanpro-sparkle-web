// src/pages/Links.tsx

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LinkButton } from '../components/ui/link-button'; // Importa seu botão
import logo from '../assets/images/logo.png'; // Importa o logo
import { Instagram, Mail, Phone } from 'lucide-react'; // Mantém para ícones de contato que não viraram botão

const contactInfo = {
  phoneHref: 'tel:+5511949806203',
  whatsappHref: 'https://wa.me/5511949806203?text=Olá! Vi sua página de links e gostaria de um orçamento.',
  emailHref: 'mailto:tngclean7@gmail.com',
  instagramHref: 'https://www.instagram.com/tngclean_higienizacao',
  websiteHref: 'https://www.tngclean.com.br/', // Adicionada a URL do site completo
};

const LinksPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Nossos Links - TNG Clean Higienização</title>
        <meta name="robots" content="noindex, follow" /> {/* Evita que esta página seja indexada no Google */}
      </Helmet>

      {/* Cor de fundo melhorada para bg-gray-100 */}
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 font-sans">
        <div className="w-full max-w-md mx-auto">
          {/* Logo */}
          <header className="flex flex-col items-center text-center mb-8">
            <img src={logo} alt="TNG Clean Higienização Logo" className="h-32 mb-4" />
            <h1 className="text-2xl font-bold text-text-primary">TNG Clean Higienização</h1>
            <p className="text-text-secondary">Seu estofado novo de novo em Osasco e região.</p>
          </header>

          {/* Botões de Link reorganizados */}
          <main className="space-y-4">
            <LinkButton href={contactInfo.whatsappHref} className="bg-social-whatsapp hover:bg-green-600">
              Solicitar Orçamento via WhatsApp
            </LinkButton>
            <LinkButton href={contactInfo.websiteHref}> {/* Botão para o site completo */}
              Acessar o Site Completo
            </LinkButton>
            <LinkButton href={contactInfo.instagramHref} className="bg-social-instagram hover:opacity-90"> {/* Botão do Instagram */}
              Nosso Instagram
            </LinkButton>
            {/* O botão "Ver Depoimentos de Clientes" foi removido conforme a nova lista solicitada. */}
            {/* O botão "Conhecer Nossos Serviços" foi substituído por "Acessar o Site Completo". */}
          </main>

          {/* Ícones Sociais (Instagram foi removido daqui pois virou botão) */}
          <footer className="mt-12">
            <div className="flex justify-center space-x-6">
              {/* Ícone do Instagram removido daqui */}
              <a href={contactInfo.phoneHref} aria-label="Telefone" className="text-text-secondary hover:text-brand-blue">
                <Phone className="w-8 h-8" />
              </a>
              <a href={contactInfo.emailHref} aria-label="E-mail" className="text-text-secondary hover:text-brand-blue">
                <Mail className="w-8 h-8" />
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-8 text-center">
              &copy; {new Date().getFullYear()} TNG Clean Higienização
            </p>
            {/* Informação do desenvolvedor */}
            <p className="text-xs text-gray-400 mt-2 text-center">
              Desenvolvido por{' '}
              <a href="https://digitaldominus.com.br/" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
                Dominus Digital
              </a>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default LinksPage;