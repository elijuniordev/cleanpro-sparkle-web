// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToasterProvider } from './components/ui/toast-provider'; // Importe ToasterProvider do caminho correto
import { Toaster } from './components/ui/toaster'; // Importe Toaster
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
        <ToasterProvider>
          <App />
          <Toaster /> {/* O Toaster é renderizado UMA VEZ aqui, globalmente */}
        </ToasterProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);