/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
        'light-gray': '#F8F9FA', // Cinza claro para fundos de seções
        'dark-gray': '#343A40', // Cinza escuro para títulos
        'text-color': '#495057', // Cinza médio para textos

        // Cor específica do WhatsApp
        'whatsapp-green': '#25D366',

        // Cores para gradientes ou tons específicos (como no Contact.tsx)
        'blue-50': '#EBF8FF', // Azul muito claro
        'red-50': '#FFF5F5',  // Vermelho muito claro
        'primary-blue-light': '#ADD8E6', // Um azul claro para o texto do Hero
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