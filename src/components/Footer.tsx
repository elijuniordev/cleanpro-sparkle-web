import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-gray text-white py-8 text-center text-sm">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} CleanPro. Todos os direitos reservados.</p>
        <p className="mt-2">Limpeza e Higienização Profissional em Osasco/SP e Região.</p>
      </div>
    </footer>
  );
};

export default Footer;