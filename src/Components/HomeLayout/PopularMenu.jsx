import Title from "../../shared/Title";
import { Button } from "keep-react";
import Menu from "./Menu";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularMenu = menu?.filter((item) => item.category === "popular");

  return (
    <div className="pb-12 w-11/12 lg:w-5/6 mx-auto">
      <Title title="FROM OUR MENU" subtitle="---Check it out---"></Title>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-0 lg:gap-8 mt-12">
        {popularMenu?.map((menu) => (
          <Menu key={menu._id} menu={menu}></Menu>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button variant="softBg">View Full Menu</Button>
      </div>
    </div>
  );
};

export default PopularMenu;
