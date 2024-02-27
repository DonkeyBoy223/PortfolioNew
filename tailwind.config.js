const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { addUtilities } = require('tailwindcss');

// Define your animation and keyframes
const animations = {
  ".shimmer": {
    animation: "shimmer 2s linear infinite"
  }
};

const keyframes = {
  "@keyframes shimmer": {
    from: {
      backgroundPosition: "0 0"
    },
    to: {
      backgroundPosition: "-200% 0"
    }
  }
};
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brandmain: '#00ff66',
        mainbg: '#1a1a1c',
      },
      width: ['responsive'],
    },
    keyframes: {
      shimmer: {
        from: {
          backgroundPosition: "0 0"
        },
        to: {
          backgroundPosition: "-200% 0"
        }
      }
    },
    animation: {
      shimmer: "shimmer 2s linear infinite"
    }
  },
  plugins: [
    addVariablesForColors,
  ],
};
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
