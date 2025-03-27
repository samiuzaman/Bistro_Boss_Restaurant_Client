import {
  Avatar,
  AvatarFallback,
  Button,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from "keep-react";
import { ShoppingCart } from "phosphor-react";

import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import useCart from "../Hooks/useCart";
// w-full fixed z-10 border-none bg-opacity-30 bg-black text-white
const NavSection = () => {
  const location = useLocation();
  const { setUser, user, handleSignOut } = useAuth();
  const [cart] = useCart();
  console.log("Navbar check user", user);
  const handleSignOutButton = () => {
    handleSignOut().then(() => {
      setUser(null);
      toast.success(`User Logout Successfull!`);
    });
  };

  return (
    <div
      className={`bg-black/40 top-0 fixed z-10 w-full ${
        location.pathname === "/login" || location.pathname === "/register"
          ? "hidden"
          : "block"
      }`}
    >
      <Navbar className="w-11/12 lg:w-5/6 mx-auto bg-white/0 border-none  ">
        <NavbarContainer>
          <NavbarBrand>
            <h4 className="pl-6 text-2xl text-white font-semibold font-[Cinzel]">
              Bistro Boss
              <br /> <span className="text-xl font-medium">Restaurant</span>
            </h4>
          </NavbarBrand>
          <NavbarList className=" font-bold ">
            <NavbarItem className="text-white">
              <NavLink to="/">HOME</NavLink>
            </NavbarItem>
            <NavbarItem className="text-white">
              <NavLink to="/contact">CONTACT US</NavLink>
            </NavbarItem>
            <NavbarItem className="text-white">
              <NavLink to="/dashboard">DASHBOARD</NavLink>
            </NavbarItem>
            <NavbarItem className="text-white">
              <NavLink to="/our-menu">OUR MENU</NavLink>
            </NavbarItem>
            <NavbarItem className="text-white">
              <NavLink to="/our-shop/dessert">OUR SHOP</NavLink>
            </NavbarItem>

            <NavLink to="/dashboard/my-cart">
              <Button
                variant="softBg"
                shape="circle"
                className="hover:text-white relative p-10 mr-5"
              >
                <ShoppingCart size={20} />
                <span className="absolute bg-red-500 top-5 left-5 px-2 py-1 rounded-full text-white text-xs">
                  {cart.length}
                </span>
              </Button>
            </NavLink>

            <div className="flex justify-center items-center">
              {user?.email ? (
                <Dropdown placement="bottom-end">
                  <DropdownAction asChild>
                    <Avatar>
                      <AvatarFallback>
                        {user?.photoURL ? (
                          <img
                            referrerPolicy="no-referrer"
                            src={user.photoURL}
                          />
                        ) : (
                          <span>
                            {user?.displayName.toUpperCase().slice(0, 2)}
                          </span>
                        )}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownAction>
                  <DropdownContent
                    align="end"
                    className="border border-metal-100 dark:border-metal-800"
                  >
                    <DropdownItem>{user?.displayName}</DropdownItem>
                    <DropdownItem>{user?.email}</DropdownItem>
                    <DropdownItem onClick={handleSignOutButton}>
                      Logout
                    </DropdownItem>
                  </DropdownContent>
                </Dropdown>
              ) : (
                <NavbarItem className="text-white">
                  <NavLink to="/login">Login</NavLink>
                </NavbarItem>
              )}
            </div>
          </NavbarList>
          <NavbarCollapseBtn />
          <NavbarCollapse>
            <NavbarItem>HOME</NavbarItem>
            <NavbarItem>CONTACT US</NavbarItem>
            <NavbarItem>DASHBOARD</NavbarItem>
            <NavbarItem>OUR MENU</NavbarItem>
            <NavbarItem>OUR SHOP</NavbarItem>
            <NavbarItem active={true}>Sign Up</NavbarItem>
          </NavbarCollapse>
        </NavbarContainer>
      </Navbar>
    </div>
  );
};

export default NavSection;
