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
    <div>
      <Navbar className="w-full lg:w-5/6 mx-auto border-none">
        <NavbarContainer>
          <NavbarBrand>
            <h4 className="">
              Bistro Boss Restaurant
            </h4>
          </NavbarBrand>
          <NavbarList className="text-black font-bold">
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
