// tailwind.config.js (DEPOIS - COMPLETO E CORRIGIDO)
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Garante que o Tailwind escaneie arquivos TSX
  ],
  theme: {
    extend: {
      colors: {
        // Cores base da sua logo (azul, vermelho)
        'primary-blue': '#007BFF', // Azul vibrante (ajuste se seu logo tiver um tom diferente)
        'secondary-red': '#DC3545', // Vermelho forte (ajuste se seu logo tiver um tom diferente)

        // Variações para estados de hover
        'hover-blue': '#0056b3', // Um azul mais escuro para hover
        'hover-red': '#c82333', // Um vermelho mais escuro para hover

        // Cores neutras para texto e fundos
        'white': '#FFFFFF',
        'light-gray': '#F8F9FA', // Fundo de seções mais claras
        'dark-gray': '#343A40', // Cor para títulos e textos escuros
        'text-color': '#495057', // Cor padrão para textos de parágrafos

        // Cor específica do WhatsApp
        'whatsapp-green': '#25D366',

        // Cores para gradientes ou tons específicos (se usados no Contact/Location)
        'blue-50': '#EBF8FF', // Exemplo de um azul bem claro para gradientes
        'red-50': '#FFF5F5',  // Exemplo de um vermelho bem claro para gradientes
        'primary-blue-light': '#ADD8E6', // Um azul claro para o gradiente do mapa, se desejar
      },
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
  plugins: [],
};