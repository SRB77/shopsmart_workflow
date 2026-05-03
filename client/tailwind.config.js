import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "on-surface": "#121c2a",
        "surface-dim": "#d0daef",
        "secondary-fixed-dim": "#c6c6c6",
        "outline": "#8d7075",
        "tertiary-container": "#636363",
        "on-surface-variant": "#594046",
        "surface-tint": "#b81059",
        "secondary": "#5e5e5e",
        "surface-bright": "#f9f9ff",
        "on-tertiary-fixed": "#1b1c1c",
        "secondary-fixed": "#e2e2e2",
        "on-primary-fixed-variant": "#8f0042",
        "inverse-on-surface": "#ebf1ff",
        "surface-container-highest": "#d9e3f7",
        "surface-container-lowest": "#ffffff",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-secondary": "#ffffff",
        "secondary-container": "#e2e2e2",
        "on-background": "#121c2a",
        "surface-variant": "#d9e3f7",
        "error": "#ba1a1a",
        "on-error-container": "#93000a",
        "surface": "#f9f9ff",
        "tertiary-fixed": "#e4e2e1",
        "on-tertiary": "#ffffff",
        "on-secondary-fixed-variant": "#474747",
        "outline-variant": "#e0bec4",
        "on-primary-container": "#ffd5dd",
        "on-tertiary-fixed-variant": "#474747",
        "on-secondary-fixed": "#1b1b1b",
        "tertiary": "#4b4b4b",
        "primary": "#970046",
        "primary-fixed-dim": "#ffb1c3",
        "surface-container": "#e6eeff",
        "surface-container-low": "#eff3ff",
        "on-primary": "#ffffff",
        "surface-container-high": "#dee9fd",
        "on-tertiary-container": "#e2e0df",
        "on-secondary-container": "#646464",
        "primary-container": "#be185d",
        "tertiary-fixed-dim": "#c8c6c6",
        "inverse-surface": "#273140",
        "primary-fixed": "#ffd9e0",
        "background": "#f9f9ff",
        "on-primary-fixed": "#3f0019",
        "inverse-primary": "#ffb1c3"
      },
      "borderRadius": {
        "DEFAULT": "0px",
        "lg": "0px",
        "xl": "0px",
        "full": "0px"
      },
      "fontFamily": {
        "headline": ["Noto Serif", "serif"],
        "body": ["Plus Jakarta Sans", "sans-serif"],
        "label": ["Plus Jakarta Sans", "sans-serif"]
      }
    },
  },
  plugins: [
    forms,
  ],
}
