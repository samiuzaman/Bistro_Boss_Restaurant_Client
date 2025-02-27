import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <Outlet></Outlet>
      <h2>Footer</h2>
    </div>
  );
};

export default MainLayout;
