import PopularMenu from "../Components/HomeLayout/PopularMenu";
import Cover from "../shared/Cover";
import Banner3 from "../assets/menu/banner3.jpg";
import DessertBg from "../assets/menu/dessert-bg.jpeg";
import PizzaBg from "../assets/menu/pizza-bg.jpg";
import SaladBg from "../assets/menu/salad-bg.jpg";
import SoupBg from "../assets/menu/soup-bg.jpg";

const OurMenu = () => {
  return (
    <div>
      <Cover
        bgimg={Banner3}
        title="OUR MENU"
        subtitle="Would you like to try a dish?"
      ></Cover>
      <PopularMenu></PopularMenu>
      <Cover
        bgimg={DessertBg}
        title="DESSERTS"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <PopularMenu></PopularMenu>
      <Cover
        bgimg={PizzaBg}
        title="PIZZA"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <PopularMenu></PopularMenu>
      <Cover
        bgimg={SaladBg}
        title="SALADS"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <PopularMenu></PopularMenu>
      <Cover
        bgimg={SoupBg}
        title="SOUPS"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <PopularMenu></PopularMenu>
      Our Menu
    </div>
  );
};

export default OurMenu;
