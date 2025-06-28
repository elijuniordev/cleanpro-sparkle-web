// src/main.tsx
import React from 'react'; // Necessário para React.StrictMode
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async'; // Importe HelmetProvider
import App from './App.tsx';
import './index.css';

// Obtenha o elemento root e garanta que não é nulo (TypeScript)
const container = document.getElementById("root");
if (!container) {
  throw new Error("Element with ID 'root' not found in the document.");
}
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <HelmetProvider> {/* Envolva seu App com HelmetProvider */}
      <App />
    </HelmetProvider>
  </React.StrictMode>
);