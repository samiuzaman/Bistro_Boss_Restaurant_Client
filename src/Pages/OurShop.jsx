import { Helmet } from "react-helmet-async";
import ShopBg from "../assets/shop/shop-banner.jpg";
import Cover from "../shared/Cover";
import ItemCategory from "../Components/OurShop/ItemCategory";

const OurShop = () => {
  return (
    <div>
      <Helmet>
        <title>OurMenu | Bistro Boss</title>
        <link rel="canonical" href="/our-menu" />
      </Helmet>
      <Cover
        bgimg={ShopBg}
        title="OUR SHOP"
        subtitle="Would you like to try a dish?"
      ></Cover>
      <div className="w-11/12 lg:w-5/6 xl:w-4/5 mx-auto py-16">
        <ItemCategory></ItemCategory>
      </div>
    </div>
  );
};

export default OurShop;
