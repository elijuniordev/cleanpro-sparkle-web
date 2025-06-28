import React from 'react';

interface ServiceCardProps {
  icon: React.ElementType; // Tipo para componentes de ícone (Lucide)
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-blue to-blue-600 rounded-lg mb-6 group-hover:from-blue-600 group-hover:to-primary-blue transition-all duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-dark-gray mb-4 group-hover:text-primary-blue transition-colors">
        {title}
      </h3>
      <p className="text-text-color leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;