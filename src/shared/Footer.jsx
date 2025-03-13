import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className={`${
        location.pathname === "/login" || location.pathname === "/register"
          ? "hidden"
          : "block"
      } bg-[#111827] dark:bg-metal-900 shadow-small `}
    >
      <div className="mx-auto lg:px-20 px-6 py-10 2xl:px-0">
        <div className="w-4/5 mx-auto xl:px-[6%] flex flex-col gap-12 md:flex-row justify-center items-center">
          <footer className="w-full md:w-1/2 mx-auto space-y-3">
            <h4 className="mb-3 text-body-3 text-xl font-semibold text-white dark:text-white">
              Contact
            </h4>
            <p className="text-metal-100 mb-2 dark:text-metal-300">
              484 Trevor Junctions, Hettieport-17316, Columbia, USA
            </p>
            <p className="flex items-center gap-2 text-metal-100 mb-2 dark:text-metal-300">
              <FaPhone />
              16784518001
            </p>
            <p className="flex items-center gap-2 text-metal-100 dark:text-metal-300">
              <FaEnvelope />
              info@tutorworld.com
            </p>
          </footer>

          <footer className="w-full md:w-1/3 mx-auto">
            <h4
              className={`mb-3 text-body-3 text-xl font-semibold text-white dark:text-white`}
            >
              Social Media
            </h4>
            <ul className="flex flex-col gap-3 text-body-3 font-normal text-white  dark:text-metal-300">
              <Link
                to="https://www.facebook.com/"
                className="flex items-center gap-2 hover:text-error-400 hover:underline"
              >
                <FaFacebook />
                Facebook
              </Link>
              <Link
                to="https://www.facebook.com/"
                className="flex items-center gap-2 hover:text-error-400 hover:underline"
              >
                <FaInstagram />
                Facebook
              </Link>
              <Link
                to="https://www.linkedin.com/"
                className="flex items-center gap-2 hover:text-error-400 hover:underline"
              >
                <FaLinkedin />
                LinkedIn
              </Link>
              <Link
                to="https://x.com/"
                className="flex items-center gap-2 hover:text-error-400 hover:underline"
              >
                <FaTwitter />
                Twitter
              </Link>
              <Link
                to="https://youtube.com/"
                className="flex items-center gap-2 hover:text-error-400 hover:underline"
              >
                <FaYoutube />
                Youtube
              </Link>
            </ul>
          </footer>
        </div>
      </div>
      <div className={`bg-black py-5 text-cente `}>
        <p className="text-body-4 font-normal text-center text-white dark:text-metal-300">
          &copy;{new Date().getFullYear()} All Rights Reserved by &nbsp;
          <Link href="/" target="_blank" className="font-medium">
            Bistro Boss Restaurant ltd
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
