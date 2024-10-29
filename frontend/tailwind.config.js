
/** @type {import('tailwindcss').Config} */
export default{
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    fontFamily:{
      primary: 'Orbitron',
    secondary: 'Rajdhani',
    tertiary: 'Aldrich',
    },
    extend: {
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        box: "0px 35px 120px -10px #211e35",
      },
    },
  },
  plugins: [],
};