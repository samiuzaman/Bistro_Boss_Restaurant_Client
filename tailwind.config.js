/** @type {import('tailwindcss').Config} */
import { keepTheme } from "keep-react/keepTheme";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      bannerBg: "url('./assets/home/chef-service.jpg')",
      featuredBg: "url('./assets/home/featured.jpg')",
      authenticationBg: "url('./assets/other/authentication.png')",
      banner3: "url('./assets/menu/banner3.jpg')",
      dessertBg: "url('./assets/menu/dessert-bg.jpeg')",
      pizzaBg: "url('./assets/menu/pizza-bg.jpg')",
      saladBg: "url('./assets/menu/salad-bg.jpg')",
      soupBg: "url('./assets/menu/soup-bg.jpg')",
    },
  },
};

export default keepTheme(config);
