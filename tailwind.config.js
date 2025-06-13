// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
          'emoji-fall': {
          '0%':   { transform: 'translateY(-100px) scale(1) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) scale(1.2) rotate(360deg)', opacity: '0' },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        'emoji-fall': 'emoji-fall 3s linear forwards',
      },
    },
  },
  plugins: [],
};
