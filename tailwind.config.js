// npx tailwindcss-cli@latest build ./src/tailwind.css -o ./styles.css

module.exports = {
  purge: {
    enabled: false,
    content: ["./*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        brand: {
          dark: "hsl(232, 13%, 33%)",
          DEFAULT: "hsl(233, 13%, 49%)",
          light: "hsl(234, 14%, 74%)",
          lightest: "hsl(240, 78%, 98%)",
        },
        "brand-gradient": {
          from: "hsl(236, 72%, 79%)",
          to: "hsl(237, 63%, 64%)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
