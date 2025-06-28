import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light-gray text-dark-gray">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Página não encontrada!</p>
      <a href="/" className="bg-primary-blue text-white px-6 py-3 rounded-lg hover:bg-hover-blue transition-colors">Voltar para o Início</a>
    </div>
  );
};

export default NotFound;