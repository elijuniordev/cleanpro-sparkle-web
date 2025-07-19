import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/Index';
import LinksPage from './pages/Links';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/links" element={<LinksPage />} />
    </Routes>
  );
}

export default App;