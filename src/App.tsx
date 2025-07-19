// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/Index';
import LinksPage from './pages/Links'; // Sua página de links
import NotFound from './pages/NotFound';
import Layout from './components/Layout'; // Importe o componente de layout

function App() {
  return (
    <BrowserRouter>
      {/* O componente Layout agora envolve TODAS as rotas */}
      <Layout>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;