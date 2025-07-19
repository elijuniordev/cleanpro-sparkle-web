// src/pages/Links.tsx

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LinkButton } from '../components/ui/link-button'; // Importa nosso novo botão
import logo from '../assets/images/logo.png';
import { Instagram, Mail, Phone } from 'lucide-react';

const contactInfo = {
  phoneHref: 'tel:+5511949806203',
  whatsappHref: 'https://wa.me/5511949806203?text=Olá! Vi sua página de links e gostaria de um orçamento.',
  emailHref: 'mailto:tngclean7@gmail.com',
  instagramHref: 'https://www.instagram.com/tngclean_higienizacao',
};

const LinksPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Nossos Links - TNG Clean Higienização</title>
        <meta name="robots" content="noindex, follow" /> {/* Evita que esta página seja indexada no Google */}
      </Helmet>

      <div className="bg-ui-background min-h-screen flex flex-col items-center justify-center p-4 font-sans">
        <div className="w-full max-w-md mx-auto">
          {/* Logo */}
          <header className="flex flex-col items-center text-center mb-8">
            <img src={logo} alt="TNG Clean Higienização Logo" className="h-32 mb-4" />
            <h1 className="text-2xl font-bold text-text-primary">TNG Clean Higienização</h1>
            <p className="text-text-secondary">Seu estofado novo de novo em Osasco e região.</p>
          </header>

          {/* Botões de Link */}
          <main className="space-y-4">
            <LinkButton href={contactInfo.whatsappHref} className="bg-social-whatsapp hover:bg-green-600">
              Solicitar Orçamento via WhatsApp
            </LinkButton>
            <LinkButton href="https://www.tngclean.com.br/#servicos">
              Conhecer Nossos Serviços
            </LinkButton>
            <LinkButton href="https://www.tngclean.com.br/#depoimentos">
              Ver Depoimentos de Clientes
            </LinkButton>
          </main>

          {/* Ícones Sociais e Informação do Desenvolvedor */}
          <footer className="mt-12">
            <div className="flex justify-center space-x-6">
              <a href={contactInfo.instagramHref} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-text-secondary hover:text-brand-blue">
                <Instagram className="w-8 h-8" />
              </a>
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
            {/* Adicionando a informação do desenvolvedor aqui */}
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