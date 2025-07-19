// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/Index';
import LinksPage from './pages/Links'; // Sua página de links
import NotFound from './pages/NotFound';
import Layout from './components/Layout'; // Importe o componente de layout

function App() {
  return (
    <Routes>
      {/* Rotas que DEVEM ter o Header e Footer, usando o Layout */}
      <Route
        path="/"
        element={
          <Layout>
            <IndexPage />
          </Layout>
        }
      />
      {/* Rotas que NÃO DEVEM ter o Header e Footer, renderizadas diretamente */}
      <Route path="/links" element={<LinksPage />} />
      <Route path="*" element={<NotFound />} /> {/* Página 404, sem layout também */}
    </Routes>
  );
}

export default App;