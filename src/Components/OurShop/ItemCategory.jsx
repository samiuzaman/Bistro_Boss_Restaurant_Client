import { Tabs, TabsContent, TabsItem, TabsList } from "keep-react";
import useMenu from "../../Hooks/useMenu";
import Item from "../HomeLayout/Item";
import { Link, useParams } from "react-router-dom";

const ItemCategory = () => {
  const [menu] = useMenu();
  const { category } = useParams();
  console.log("Params: category =", category);
  const dessert = menu?.filter((item) => item.category === "dessert");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const salad = menu?.filter((item) => item.category === "salad");
  const soup = menu?.filter((item) => item.category === "soup");
  const drinks = menu?.filter((item) => item.category === "drinks");
  return (
    <div>
      <Tabs
        variant="underline"
        defaultValue={`${category ? category : "dessert"}`}
        className="mx-auto"
      >
        <TabsList className="flex justify-center mb-6 uppercase">
          <Link to="/our-shop/dessert">
            <TabsItem value="dessert">DESSERTS</TabsItem>
          </Link>
          <Link to="/our-shop/pizza">
            <TabsItem value="pizza">PIZZA</TabsItem>
          </Link>
          <Link to="/our-shop/salad">
            <TabsItem value="salad">SALAD</TabsItem>
          </Link>
          <Link to="/our-shop/soup">
            <TabsItem value="soup">SOUPS</TabsItem>
          </Link>
          <Link to="/our-shop/drink">
            <TabsItem value="drink">DRINKS</TabsItem>
          </Link>
        </TabsList>
        <TabsContent value="dessert">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6">
            {dessert?.map((item) => (
              <Item key={item._id} item={item}></Item>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="pizza">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6">
            {pizza?.map((item) => (
              <Item key={item._id} item={item}></Item>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="salad">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6">
            {salad?.map((item) => (
              <Item key={item._id} item={item}></Item>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="soup">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6">
            {soup?.map((item) => (
              <Item key={item._id} item={item}></Item>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="drink">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6">
            {drinks?.map((item) => (
              <Item key={item._id} item={item}></Item>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ItemCategory;
