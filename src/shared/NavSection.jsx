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
// w-full fixed z-10 border-none bg-opacity-30 bg-black text-white
const NavSection = () => {
  return (
    <div className="bg-white">
      <Navbar className="w-11/12 lg:w-5/6 mx-auto border-none ">
        <NavbarContainer>
          <NavbarBrand>
            <h4 className="pl-6 text-2xl font-semibold font-[Cinzel]">
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
