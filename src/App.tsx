import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/Index'; // Sua landing page principal
import NotFound from './pages/NotFound'; // Sua página 404

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} /> {/* Rota para sua landing page */}
        <Route path="*" element={<NotFound />} /> {/* Rota curinga para 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;