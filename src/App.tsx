// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // Importe Helmet
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Helmet padrão para toda a aplicação */}
        <Helmet>
          <title>CleanPro | Limpeza e Higienização de Estofados e Automotiva em Osasco/SP e Região</title>
          <meta name="description" content="Serviços profissionais de limpeza e higienização de estofados, sofás, colchões, tapetes e interior automotivo em Osasco/SP e região. Solicite seu orçamento gratuito!" />
          {/* Adicione outras meta tags Open Graph e Twitter Cards padrão aqui */}
          <meta property="og:title" content="CleanPro | Limpeza de Estofados e Higienização Automotiva em Osasco/SP" />
          <meta property="og:description" content="Especialistas em limpeza profunda e sanitização de estofados, sofás, colchões, tapetes e veículos em toda Osasco/SP e região." />
          <meta property="og:type" content="website" />
          {/* A URL real pode ser dinâmica ou padrão aqui, dependendo da rota */}
          <meta property="og:url" content="https://seusite.com.br/" /> 
          <meta property="og:image" content="https://seusite.com.br/caminho-para-uma-imagem-relevante-social.jpg" />
        </Helmet>

        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;