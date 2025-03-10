import Title from "../../shared/Title";
import FeaturedImg from "../../assets/home/featured.jpg";
import { Button } from "keep-react";

const Featured = () => {
  return (
    <div className="bg-featuredBg bg-center bg-no-repeat bg-cover bg-black/50 bg-blend-overlay bg-fixed py-20 ">
      <Title
        title="FROM OUR MENU"
        subtitle="---Check it out---"
        color="white"
      ></Title>
      <div className="w-11/12 lg:w-5/6 mx-auto my-10 flex flex-col lg:flex-row gap-8 justify-center items-center">
        <div className="w-full lg:w-1/2">
          <img className="w-full h-full" src={FeaturedImg} />
        </div>
        <div className="w-full lg:w-1/2 text-white pt-6 space-y-3">
          <p>March 20, 2023</p>
          <p className="text-xl">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <Button className="hover:text-black font-semibold hover:bg-success-500" variant="softBg">Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
