// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Mantenha BrowserRouter
import IndexPage from './pages/Index'; // Sua landing page principal
import NotFound from './pages/NotFound'; // Sua página 404

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} /> {/* Sua landing page está aqui */}
        <Route path="*" element={<NotFound />} /> {/* Rota para 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;