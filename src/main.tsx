import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async'; // Necessário para o React Helmet

const container = document.getElementById('root');
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