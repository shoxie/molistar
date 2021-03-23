module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1024px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        "molistar-red": "#ED1C24",
        "molistar-grey": "#F0F1F3",
        "molistar-darkgrey": "#2A2A2A",
        "molistar-rail": "#7d7d7d",
      },
      fontFamily: {
        "sf-sans": ["san_francisco_text_regularRg", "sans-serif"],
      },
      margin: {
        '19': "4.50rem"
      },
      inset: {
        '-5.5': '-1.35rem',
        '-0.85': '-0.85rem'
      }
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus", "group-hover"],
      scale: ["active", "group-hover"],
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("@tailwindcss/line-clamp"),
    require('autoprefixer'),
  ],
};
