// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/Index';
import LinksPage from './pages/Links';
import NotFound from './pages/NotFound';
import Layout from './components/Layout'; // Importe o componente de layout

function App() {
  return (
    <BrowserRouter> {/* Adicionado de volta para envolver as rotas */}
      <Routes>
        {/*
          Esta abordagem com o `Layout` está correta. A Landing Page principal agora
          terá o Header e o Footer de forma automática.
        */}
        <Route
          path="/"
          element={
            <Layout>
              <IndexPage />
            </Layout>
          }
        />
        
        {/*
          Rotas como '/links' e '*' não usam o layout, então não terão Header/Footer,
          o que é o comportamento que você definiu.
        */}
        <Route path="/links" element={<LinksPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;