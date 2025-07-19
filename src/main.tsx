// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToasterProvider } from './hooks/use-toast'; // <-- Corrigido para o caminho original do provedor
import { Toaster } from './components/ui/toaster';
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
          <Toaster />
        </ToasterProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);