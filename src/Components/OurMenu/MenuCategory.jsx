import { Button } from "keep-react";
import Menu from "../HomeLayout/Menu";


const MenuCategory = ({ items }) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-stretch gap-0 lg:gap-8 mt-12">
        {items?.map((menu) => (
          <Menu key={menu._id} menu={menu}></Menu>
        ))}
      </div>
      <div className="flex justify-center pt-6">
        <Button variant="link" className="text-black border-b-2 border-black">ORDER YOUR FAVOURITE FOOD</Button>
      </div>
    </div>
  );
};

export default MenuCategory;
