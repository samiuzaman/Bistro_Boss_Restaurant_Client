import Menu from "../HomeLayout/Menu";

const MenuCategory = ({ items }) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-stretch gap-0 lg:gap-8 mt-12">
        {items?.map((menu) => (
          <Menu key={menu._id} menu={menu}></Menu>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
