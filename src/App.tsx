// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/Index';
import LinksPage from './pages/Links';
import NotFound from './pages/NotFound';
import Layout from './components/Layout'; // Importa o componente de layout

function App() {
  return (
    // O BrowserRouter é o mais externo para o roteamento,
    // e o Layout envolve todas as rotas para um estilo consistente.
    <Layout>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;