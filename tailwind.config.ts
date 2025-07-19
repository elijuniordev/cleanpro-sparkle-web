/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. PALETA DE CORES SEMÂNTICA: Organizada por função para fácil manutenção.
      colors: {
        brand: {
          blue: {
            DEFAULT: '#007BFF', // Cor principal
            light: '#ADD8E6',   // Tom mais claro para destaques
            hover: '#0056b3',   // Tom mais escuro para hover
          },
          red: {
            DEFAULT: '#DC3545', // Cor secundária
            hover: '#c82333',   // Hover da cor secundária
          },
        },
        ui: {
          background: '#F8F9FA',  // Fundo claro das seções
          border: '#E2E8F0',     // Cor para bordas sutis
          card: '#FFFFFF',       // Fundo dos cards
        },
        text: {
          primary: '#1a202c',    // Cor principal para títulos (era 'dark-gray')
          secondary: '#495057',  // Cor para parágrafos e textos (era 'text-color')
          white: '#FFFFFF',      // Texto sobre fundos escuros
        },
        social: {
          whatsapp: '#25D366', // Cor específica do WhatsApp
        }
      },
      // 2. ANIMAÇÕES: Mantidas como estavam, pois estão bem configuradas.
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  // 3. PLUGINS: Adicionado o plugin essencial para os componentes shadcn/ui.
  plugins: [require("tailwindcss-animate")],
};