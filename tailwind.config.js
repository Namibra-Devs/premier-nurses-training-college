module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Specify your files for tree-shaking
  theme: {
    extend: {
      colors: {
        primary: "#4A3AFF",
        secondary: "#3b2ce2",
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
        AccreditedShowBg: "url('assets/sections/accreditation-bg.jpg')",
        AccreditedShowBgMobile:"url('assets/sections/accreditation-bg-mobile.jpg')",
        StudentsGroup: "url('assets/sections/student-group.jpg')",
        AboutusBgImg: "url('assets/foreign/image2.jpg')",
        PntcStoryBg: "url('assets/Aboutus/Pntcstorybg.jpg')",
        AboutusBg: "url('assets/Aboutus/AboutusBg.jpg')",
        StudentsBg: "url('assets/Students/students-bg.jpg')",
        ContactusBg: "url('assets/contactus/contactus-bg.jpg')",
        RegLoginBg: "url('assets/Admissions/bg-image.jpg')",
        "topnav-gradient":"linear-gradient(90deg, #440f14, #5e1219 15%, #000 35%, #000 45%, #5e1219 85%, #440f14)",
      },
      keyframes: {
       'infinite-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        fadeIn: "fadeIn 1s ease-in",
      },
      maskImage: {
        "gradient-to-right":
          "linear-gradient(to right, transparent 0%, black 128px, black calc(100% - 128px), transparent 100%)",
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
