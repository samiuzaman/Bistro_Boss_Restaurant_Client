// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import ServiceImg from "../../assets/home/chef-service.jpg";

// import required modules
import { Pagination } from "swiper/modules";
import Title from "../../shared/Title";
import Services from "./Services";

const Category = () => {
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto my-8">
      <Title
        title="ORDER ONLINE"
        subtitle="---From 11:00am to 10:00pm---"
      ></Title>
      <Swiper
        slidesPerView={4}
        spaceBetween={8}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-6"
      >
        <SwiperSlide>
          <img src={slide1} />
          <p className="w-full absolute bottom-4 left-8 md:left-20 lg:left-24 text-white text-lg lg:text-xl font-medium font-[Cinzel]">
            SALADS
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
          <p className="w-full absolute bottom-4 left-8 md:left-20 lg:left-24 text-white text-lg lg:text-xl font-medium font-[Cinzel]">
            SOUPS
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
          <p className="w-full absolute bottom-4 left-8 md:left-20 lg:left-24 text-white text-lg lg:text-xl font-medium font-[Cinzel]">
            PIZZAS
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
          <p className="w-full absolute bottom-4 left-8 md:left-20 lg:left-24 text-white text-lg lg:text-xl font-medium font-[Cinzel]">
            SOUPS
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
          <p className="w-full absolute bottom-4 left-8 md:left-20 lg:left-24 text-white text-lg lg:text-xl font-medium font-[Cinzel]">
            SALADS
          </p>
        </SwiperSlide>
      </Swiper>
      <div className="bg-bannerBg bg-center bg-no-repeat bg-cover my-24 py-28">
        <Services></Services>
      </div>
    </div>
  );
};

export default Category;
