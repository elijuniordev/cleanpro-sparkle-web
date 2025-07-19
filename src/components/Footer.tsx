import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';
import logo from '../assets/images/logo.png';

const footerInfo = {
  phone: '(11) 94980-6203',
  phoneHref: 'tel:+5511949806203',
  email: 'tngclean7@gmail.com',
  emailHref: 'mailto:tngclean7@gmail.com',
  instagram: '@tngclean_higienizacao',
  instagramHref: 'https://www.instagram.com/tngclean_higienizacao',
};

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-text-primary text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            {/* TAMANHO DO LOGO AUMENTADO: de h-20 para h-28 */}
            <img src={logo} alt="TNG Clean Higienização Logo" className="h-28 mb-4" />
            <p className="max-w-xs text-sm">
              Sua solução completa em higienização profissional para estofados, colchões e veículos em Osasco/SP e região.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-text-white mb-4">Navegação</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-brand-blue-light transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-text-white mb-4">Fale Conosco</h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className="w-4 h-4 text-brand-blue" />
                <a href={footerInfo.phoneHref} className="hover:text-brand-blue-light transition-colors">{footerInfo.phone}</a>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <Mail className="w-4 h-4 text-brand-blue" />
                <a href={footerInfo.emailHref} className="hover:text-brand-blue-light transition-colors">{footerInfo.email}</a>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <Instagram className="w-4 h-4 text-brand-blue" />
                <a href={footerInfo.instagramHref} target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue-light transition-colors">
                  {footerInfo.instagram}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} TNG Clean Higienização. Todos os direitos reservados.</p>
          <p className="mt-1">Desenvolvido por <a href="https://digitaldominus.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Dominus Digital</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;