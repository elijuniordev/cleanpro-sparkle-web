// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToasterProvider } from './hooks/use-toast'; // Importa o ToasterProvider do seu sistema de hooks
import { Toaster } from './components/ui/toaster'; // Importa o componente Toaster para exibir as notificações
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root');
if (!container) {
  throw new Error("Element with ID 'root' not found in the document.");
}
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ToasterProvider> {/* Seu provedor de contexto de toast */}
          <App /> {/* Onde suas rotas e layout são renderizados */}
          <Toaster /> {/* Onde as notificações de toast são exibidas */}
        </ToasterProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);