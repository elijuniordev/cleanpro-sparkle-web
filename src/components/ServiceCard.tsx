// src/components/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ icon, title, description, altText }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
      {/* Para ícones, se forem SVG ou Font Awesome, não precisam de alt. */}
      {/* Se for uma imagem real, use altText */}
      <div className="text-primary-blue text-4xl mb-4">
        {icon} {/* Renderiza o ícone passado como prop */}
      </div>
      <h3 className="text-xl font-semibold text-dark-gray mb-2">{title}</h3>
      <p className="text-text-color text-base">{description}</p>
    </div>
  );
};

export default ServiceCard;