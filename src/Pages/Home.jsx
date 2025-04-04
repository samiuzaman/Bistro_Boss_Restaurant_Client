import { Helmet } from "react-helmet-async";
import Banner from "../Components/HomeLayout/Banner";
import Category from "../Components/HomeLayout/Category";
import Featured from "../Components/HomeLayout/Featured";
import OurMenu from "../Components/HomeLayout/PopularMenu";
import Recommend from "../Components/HomeLayout/Recommend";
import Testimonials from "../Components/HomeLayout/Testimonials";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Home | Bistro Boss</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <OurMenu></OurMenu>
      <Recommend></Recommend>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
