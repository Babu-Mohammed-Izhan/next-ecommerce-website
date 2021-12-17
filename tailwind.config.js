module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "all-cases":
          "url(https://res.cloudinary.com/dm8ogh4lv/image/upload/v1639747333/allcases_asaqb4.jpg)",
        "anime-cases":
          "url(https://res.cloudinary.com/dm8ogh4lv/image/upload/v1639747335/anime_phone_case_dgxu1p.jpg)",
        "superhero-cases":
          "url(https://res.cloudinary.com/dm8ogh4lv/image/upload/v1639747335/marvelcase_j7l7yt.webp)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
