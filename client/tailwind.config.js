import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],         // integrates daisyUI framework into tailwind css
  daisyui:{
    themes: ["forest", "coffee"],   // creating an object to set the background theme according to daisyui documentation.
  },
};