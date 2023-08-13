// tailwind.config.js
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#e11d48"
      },
      keyframes: {
        uptodown: {
          "0%, 100%": {transform: "translateY(0)"},
          "50%": {transform: "translateY(-20px)"},
        },
      },
      animation: {
        uptodown: "uptodown 4s linear infinite",
      },
    },
    fontFamily: {
      caveat: "Caveat",
    },
  },
  plugins: [],
}
export default config
