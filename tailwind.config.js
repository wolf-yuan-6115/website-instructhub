/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crust: "rgba(var(--crust))",
        mantle: "rgba(var(--mantle))",
        base: "rgba(var(--base))",
        surface0: "rgba(var(--surface0))",
        surface1: "rgba(var(--surface1))",
        surface2: "rgba(var(--surface2))",
        overlay0: "rgba(var(--overlay0))",
        overlay1: "rgba(var(--overlay1))",
        overlay2: "rgba(var(--overlay2))",
        subtext0: "rgba(var(--subtext0))",
        subtext1: "rgba(var(--subtext1))",
        text: "rgba(var(--text))",
        lavender: "rgba(var(--lavender))",
        blue: "rgba(var(--blue))",
        sapphire: "rgba(var(--sapphire))",
        sky: "rgba(var(--sky))",
        teal: "rgba(var(--teal))",
        green: "rgba(var(--green))",
        yellow: "rgba(var(--yellow))",
        peach: "rgba(var(--peach))",
        maroon: "rgba(var(--maroon))",
        red: "rgba(var(--red))",
        mauve: "rgba(var(--mauve))",
        pink: "rgba(var(--pink))",
        flamingo: "rgba(var(--flamingo))",
        rosewater: "rgba(var(--rosewater))",
      },
    },
  },
  plugins: [],
}

