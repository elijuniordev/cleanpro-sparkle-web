import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { ToasterProvider } from './hooks/use-toast'; // Importe o ToasterProvider

const container = document.getElementById('root');
if (!container) {
  throw new Error("Element with ID 'root' not found in the document.");
}
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ToasterProvider> {/* Envolva seu App com ToasterProvider */}
        <App />
      </ToasterProvider>
    </HelmetProvider>
  </React.StrictMode>,
);