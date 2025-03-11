import Title from "../../shared/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  console.log(testimonials);
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto my-16">
      <Title title="TESTIMONIALS" subtitle="---What Our Clients Say---"></Title>
      <div className="mt-6">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <div className="bg-white">
            {testimonials?.map((testimonial) => (
              <SwiperSlide key={testimonial._id}>
                <div className="px-16 bg-white shadow-lg flex flex-col justify-center text-center py-8 space-y-3">
                  <Rating
                    initialRating={testimonial.rating}
                    emptySymbol={<FaStar className="text-gray-400" />}
                    placeholderSymbol={<FaStar />}
                    fullSymbol={<FaStar className="text-yellow-500" />}
                    className="text-2xl"
                  />
                  <p>{testimonial.details}</p>
                  <p className="text-2xl text-[#CD9003]">{testimonial.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
