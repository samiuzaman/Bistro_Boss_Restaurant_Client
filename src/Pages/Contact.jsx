import Cover from "../shared/Cover";
import Banner from "../assets/contact/banner.jpg";
import Title from "../shared/Title";
import { Helmet } from "react-helmet-async";
import Location from "../Components/Contact/Location";
import ContactForm from "../Components/Contact/ContactForm";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>OurMenu | Bistro Boss</title>
        <link rel="canonical" href="/contact" />
      </Helmet>
      <Cover
        bgimg={Banner}
        title="CONTACT US"
        subtitle="Would you like to try a dish?"
      ></Cover>
      <div className="w-11/12 lg:w-5/6 xl:w-4/5 mx-auto py-12">
        <div className="pb-6">
          <Title title="OUR LOCATION" subtitle="---Visit Us---"></Title>
        </div>
        <Location></Location>
        <div className="py-16">
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
};

export default Contact;
