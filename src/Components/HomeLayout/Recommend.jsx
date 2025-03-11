import { useEffect, useState } from "react";
import Title from "../../shared/Title";
import Item from "./Item";

const Recommend = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.slice(0, 4));
      });
  }, []);
  console.log("Recomend Items", items);
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto my-12">
      <Title title="CHEF RECOMMENDS" subtitle="---Should Try---"></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8 mt-6 ">
        {items?.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Recommend;
