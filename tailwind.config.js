module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A3AFF",
        secondary: "#3b2ce2",
        goldenYellow: "#FFC107",
        mustardYellow: "#FFB000",
        lemonYellow: "#FFEB3B",
        coral: "#FF6F61",
        teal: "#17A2B8",
        mint: "#98FF98",
        lightPink: "#FFB6C1",
        gold: "#FFD700",
      },
      boxShadow: {
        "custom-light": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        Hero: "url('assets/Hero1.jpg')",
        TotalsBg: "url('assets/sections/totals-bg.jpg')",
        AccreditedImg: "url('assets/sections/accredited.jpg')",
        StudentsGroup: "url('assets/sections/student-group.jpg')",
      },
      maskImage: {
        "gradient-to-right":
          "linear-gradient(to right, transparent 0%, #4A3AFF 128px, black calc(100% - 128px), transparent 100%)",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".mask-image-gradient": {
          maskImage:
            "linear-gradient(to right, transparent 0%, #4A3AFF 128px, #4A3AFF calc(100% - 128px), transparent 100%)",
        },
      });
    },
  ],
};
