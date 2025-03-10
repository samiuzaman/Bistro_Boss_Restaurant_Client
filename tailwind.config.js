/** @type {import('tailwindcss').Config} */
import { keepTheme } from "keep-react/keepTheme";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      bannerBg: "url('./assets/home/chef-service.jpg')",
      featuredBg: "url('./assets/home/featured.jpg')",
    },
  },
};

export default keepTheme(config);
