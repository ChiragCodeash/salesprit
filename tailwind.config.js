const colors = require("tailwindcss/colors");
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content() ,"node_modules/flowbite-react/lib/esm/**/*.js"],
  theme: {
    colors: {
      orange: "#F67F20",
    },
    extend: {
      screens: {
        md: "1024px",
        tab: "768px",
        sm: "640px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [require("flowbite/plugin"), flowbite.plugin()],
};
