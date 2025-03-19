import { Tabs, TabsContent, TabsItem, TabsList } from "keep-react";
import useMenu from "../../Hooks/useMenu";
import Item from "../HomeLayout/Item";
import { useParams } from "react-router-dom";

const ItemCategory = () => {
  const [menu, setMenu] = useMenu();
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
        defaultValue={`${category < 0 ? category : "1"}`}
        className="mx-auto"
      >
        <TabsList className="flex justify-center mb-6 uppercase">
          <TabsItem value="1">DESSERTS</TabsItem>
          <TabsItem value="2">PIZZA</TabsItem>
          <TabsItem value="3">SALAD</TabsItem>
          <TabsItem value="4">SOUPS</TabsItem>
          <TabsItem value="5">DRINKS</TabsItem>
        </TabsList>
        <TabsContent value="1">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6">
            {dessert?.map((item) => (
              <Item key={item._id} item={item}></Item>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="2">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6">
            {pizza?.map((item) => (
              <Item key={item._id} item={item}></Item>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="3">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6">
            {salad?.map((item) => (
              <Item key={item._id} item={item}></Item>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="4">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6">
            {soup?.map((item) => (
              <Item key={item._id} item={item}></Item>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="5">
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
