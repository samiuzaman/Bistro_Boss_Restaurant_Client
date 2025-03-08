import {
  Avatar,
  AvatarFallback,
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

const NavSection = () => {
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto">
      <Navbar className="w-full fixed z-10 border-none bg-opacity-30 bg-black text-white">
        <NavbarContainer>
          <NavbarBrand>
            <h4 className="pl-6 text-2xl font-semibold">
              Bistro Boss
              <br /> <span className="text-xl font-medium">Restaurant</span>
            </h4>
          </NavbarBrand>
          <NavbarList className=" font-bold">
            <NavbarItem>HOME</NavbarItem>
            <NavbarItem>CONTACT US</NavbarItem>
            <NavbarItem>DASHBOARD</NavbarItem>
            <NavbarItem>OUR MENU</NavbarItem>
            <NavbarItem>OUR SHOP</NavbarItem>
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
                <DropdownItem>Logout</DropdownItem>
              </DropdownContent>
            </Dropdown>
          </NavbarList>
          <NavbarCollapseBtn />
          <NavbarCollapse>
            <NavbarItem>Projects</NavbarItem>
            <NavbarItem>Research</NavbarItem>
            <NavbarItem>Contact</NavbarItem>
            <NavbarItem>Sign In</NavbarItem>
            <NavbarItem active={true}>Sign Up</NavbarItem>
          </NavbarCollapse>
        </NavbarContainer>
      </Navbar>
    </div>
  );
};

export default NavSection;
