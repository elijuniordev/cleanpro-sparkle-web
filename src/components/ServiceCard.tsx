import React from 'react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-ui-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group h-full flex flex-col">
      {/* AQUI ESTÁ A CORREÇÃO: Adicionamos 'flex flex-col items-center' para centralizar o ícone e o título */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-600 rounded-lg mb-6 group-hover:from-blue-600 group-hover:to-brand-blue transition-all duration-300">
          <Icon className="w-8 h-8 text-text-white" />
        </div>
        <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-brand-blue transition-colors text-center">
          {title}
        </h3>
      </div>
      <div className="flex-grow">
        <p className="text-text-secondary leading-relaxed text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;