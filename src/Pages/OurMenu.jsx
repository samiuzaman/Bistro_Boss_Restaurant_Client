import PopularMenu from "../Components/HomeLayout/PopularMenu";
import Cover from "../shared/Cover";
import Banner3 from "../assets/menu/banner3.jpg";
import DessertBg from "../assets/menu/dessert-bg.jpeg";
import PizzaBg from "../assets/menu/pizza-bg.jpg";
import SaladBg from "../assets/menu/salad-bg.jpg";
import SoupBg from "../assets/menu/soup-bg.jpg";
import DrinkBg from "../assets/dashboard/image-5.jpg";
import { Helmet } from "react-helmet-async";
import useMenu from "../Hooks/useMenu";
import Title from "../shared/Title";
import MenuCategory from "../Components/OurMenu/MenuCategory";
import { Button } from "keep-react";
import { Link } from "react-router-dom";

const OurMenu = () => {
  const [menu] = useMenu();
  const dessert = menu?.filter((item) => item.category === "dessert");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const salad = menu?.filter((item) => item.category === "salad");
  const soup = menu?.filter((item) => item.category === "soup");
  const drink = menu?.filter((item) => item.category === "drink");
  const offered = menu?.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>OurMenu | Bistro Boss</title>
        <link rel="canonical" href="/our-menu" />
      </Helmet>
      <Cover
        bgimg={Banner3}
        title="OUR MENU"
        subtitle="Would you like to try a dish?"
      ></Cover>
      {/* Offerd Menu */}
      <div className="w-11/12 lg:w-5/6 xl:w-4/5 mx-auto py-16">
        <Title title="TODAY'S OFFER" subtitle="---Don't miss---"></Title>
        <MenuCategory items={offered}></MenuCategory>
      </div>
      {/* Dessert Menu */}
      <Cover
        bgimg={DessertBg}
        title="DESSERTS"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <div className="w-11/12 lg:w-5/6 xl:w-4/5 mx-auto py-16">
        <MenuCategory items={dessert.slice(0, 6)}></MenuCategory>
        <Link to={`/our-shop/dessert`} className="flex justify-center pt-6">
          <Button
            variant="link"
            className="border-b-2 border-[#BB8506] text-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506]"
          >
            ORDER YOUR FAVOURITE FOOD
          </Button>
        </Link>
      </div>
      {/* Pizza Menu */}
      <Cover
        bgimg={PizzaBg}
        title="Pizza"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <div className="w-11/12 lg:w-5/6 xl:w-4/5 mx-auto py-16">
        <MenuCategory items={pizza.slice(0, 6)}></MenuCategory>
        <Link to={`/our-shop/pizza`} className="flex justify-center pt-6">
          <Button
            variant="link"
            className="border-b-2 border-[#BB8506] text-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506]"
          >
            ORDER YOUR FAVOURITE FOOD
          </Button>
        </Link>
      </div>
      {/* Salad Menu */}
      <Cover
        bgimg={SaladBg}
        title="Salad"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <div className="w-11/12 lg:w-5/6 xl:w-4/5 mx-auto py-16">
        <MenuCategory items={salad.slice(0, 6)}></MenuCategory>
        <Link to={`/our-shop/salad`} className="flex justify-center pt-6">
          <Button
            variant="link"
            className="border-b-2 border-[#BB8506] text-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506]"
          >
            ORDER YOUR FAVOURITE FOOD
          </Button>
        </Link>
      </div>
      {/* Soup Menu */}
      <Cover
        bgimg={SoupBg}
        title="Soup"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <div className="w-11/12 lg:w-5/6 xl:w-4/5 mx-auto py-16">
        <MenuCategory items={soup.slice(0, 6)}></MenuCategory>
        <Link to={`/our-shop/soup`} className="flex justify-center pt-6">
          <Button
            variant="link"
            className="border-b-2 border-[#BB8506] text-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506]"
          >
            ORDER YOUR FAVOURITE FOOD
          </Button>
        </Link>
      </div>
    cf</div>
  );
};

export default OurMenu;
