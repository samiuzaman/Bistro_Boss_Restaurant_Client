import { useEffect, useState } from "react";
import Title from "../../shared/Title";
import Item from "./Item";
import { Button } from "keep-react";

const PopularMenu = () => {
  const [menus, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  console.log(menus);
  return (
    <div className="pb-12 w-11/12 lg:w-5/6 mx-auto">
      <Title title="FROM OUR MENU" subtitle="---Check it out---"></Title>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-0 lg:gap-8 mt-12">
        {menus?.map((menu) => (
          <Item key={menu._id} menu={menu}></Item>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button variant="softBg">View Full Menu</Button>
      </div>
    </div>
  );
};

export default PopularMenu;
