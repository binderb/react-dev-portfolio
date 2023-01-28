/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
        xl : '30px'
    },
    extend: {
      colors: {
        dark : "var(--dark)",
        highlight : "var(--highlight)"
      },
      boxShadow: {
        DEFAULT : '0px 0px 0px 10px'
      }
    },
  },
  plugins: [],
}
