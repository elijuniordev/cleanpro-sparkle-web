// src/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async'; // Importe HelmetProvider
import App from './App.tsx';
import './index.css';

// Obtenha o elemento root e garanta que não é nulo (TypeScript)
const container = document.getElementById("root");
if (!container) {
  throw new Error("Element with ID 'root' not found in the document.");
}
const root = createRoot(container);

root.render(
  // Use React.StrictMode para boas práticas de desenvolvimento (opcional, mas recomendado)
  // Envolva seu App com HelmetProvider
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);