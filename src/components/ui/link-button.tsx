// src/components/ui/link-button.tsx

import React from 'react';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ href, children, className = '' }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center w-full max-w-md p-4 bg-brand-blue text-text-white font-semibold rounded-lg shadow-md hover:bg-brand-blue-hover transition-all duration-300 transform hover:scale-105 ${className}`}
    >
      {children}
    </a>
  );
};