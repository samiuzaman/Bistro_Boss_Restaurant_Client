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

import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
// w-full fixed z-10 border-none bg-opacity-30 bg-black text-white
const NavSection = () => {
  const location = useLocation();
  const { user, handleSignOut } = useAuth();
  console.log("Navbar check user", user);

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
              <NavLink to="/our-shop">OUR SHOP</NavLink>
            </NavbarItem>
            <div className="flex justify-center items-center">
              {user?.email ? (
                <Dropdown placement="bottom-end">
                  <DropdownAction asChild>
                    <Avatar>
                      <AvatarFallback>KR</AvatarFallback>
                    </Avatar>
                  </DropdownAction>
                  <DropdownContent
                    align="end"
                    className="border border-metal-100 dark:border-metal-800"
                  >
                    <DropdownItem>Name</DropdownItem>
                    <DropdownItem>Profile</DropdownItem>
                    <DropdownItem onClick={handleSignOut}>Logout</DropdownItem>
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
