import { Divider } from "keep-react";
import { NavLink } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { RiContactsBook3Line } from "react-icons/ri";
import { GiShoppingBag } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div className="w-full lg:w-64 min-h-screen bg-[#D1A054] ">
      <div className="my-12">
        <h4 className="pl-6 text-2xl text-black font-extrabold font-[Cinzel]">
          Bistro Boss
          <br /> <span className="text-xl font-semibold">Restaurant</span>
        </h4>
      </div>
      <div className="px-6">
        <ul className="font-[Cinzel] font-semibold space-y-6">
          <li>
            <NavLink
              to="/dashboard/admin-home"
              className="flex gap-1 items-center text-lg"
            >
              <IoIosHome className="text-xl" /> Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/add-itmes"
              className="flex gap-1 items-center text-lg"
            >
              <MdOutlineRestaurantMenu className="text-xl" /> Add Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/my-cart"
              className="flex gap-1 items-center text-lg"
            >
              <FaCartShopping className="text-xl" /> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/manage-booking"
              className="flex gap-1 items-center text-lg"
            >
              <FaBook className="text-xl" /> Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/all-user"
              className="flex gap-1 items-center text-lg"
            >
              <FaUserFriends className="text-xl" /> All Users
            </NavLink>
          </li>

          <Divider className="my-6"></Divider>

          <li>
            <NavLink
              to="/dashboard/home"
              className="flex gap-1 items-center text-lg"
            >
              <IoIosHome className="text-xl" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/menu"
              className="flex gap-1 items-center text-lg"
            >
              <GiHamburgerMenu className="text-xl" /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/shop"
              className="flex gap-1 items-center text-lg"
            >
              <GiShoppingBag className="text-xl" /> Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/contact"
              className="flex gap-1 items-center text-lg"
            >
              <RiContactsBook3Line className="text-xl" /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
