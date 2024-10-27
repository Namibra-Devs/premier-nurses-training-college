module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A3AFF",
        secondary: "#3b2ce2",
      },
      boxShadow: {
        'custom-light': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        Hero: "url('assets/Hero1.jpg')",
      },
    },
  },
  plugins: [],
};
