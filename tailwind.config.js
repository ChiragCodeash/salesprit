const colors = require("tailwindcss/colors");
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    colors: {
      orange: "#F67F20",
    },
    extend: {
      screens: {
        md: "770px",
        tab: "768px",
      },
    },
  },
  plugins: [require("flowbite/plugin"), flowbite.plugin()],
};
