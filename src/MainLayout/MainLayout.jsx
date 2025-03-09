import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import NavSection from "../shared/NavSection";

const MainLayout = () => {
  return (
    <div className="bg-slate-100">
      <NavSection></NavSection>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
