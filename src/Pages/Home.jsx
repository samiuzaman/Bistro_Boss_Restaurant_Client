import Banner from "../Components/HomeLayout/Banner";
import Category from "../Components/HomeLayout/Category";
import Featured from "../Components/HomeLayout/Featured";
import OurMenu from "../Components/HomeLayout/PopularMenu";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Category></Category>
      <OurMenu></OurMenu>
      <Featured></Featured>
    </div>
  );
};

export default Home;
