import {
  Skeleton,
  SkeletonLine,
  Tabs,
  TabsContent,
  TabsItem,
  TabsList,
} from "keep-react";
import useMenu from "../../Hooks/useMenu";
import Item from "../HomeLayout/Item";

const ItemCategory = () => {
  const [menu] = useMenu();
  const dessert = menu?.filter((item) => item.category === "dessert");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const salad = menu?.filter((item) => item.category === "salad");
  const soup = menu?.filter((item) => item.category === "soup");
  const offered = menu?.filter((item) => item.category === "offered");
  return (
    <div>
      <Tabs variant="underline" defaultValue="1" className="mx-auto">
        <TabsList className="flex justify-center mb-6 uppercase">
          <TabsItem value="4">DESSERTS</TabsItem>
          <TabsItem value="2">PIZZA</TabsItem>
          <TabsItem value="1">SALAD</TabsItem>
          <TabsItem value="3">SOUPS</TabsItem>
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
          <div>
            <h4 className="text-2xl lg:text-4xl font-bold text-red-500 text-center">
              No Item Available
            </h4>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ItemCategory;
