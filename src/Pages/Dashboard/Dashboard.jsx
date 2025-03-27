import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#F6F6F6]">
      {/* Dashboard Side Bar */}
      <Sidebar></Sidebar>
      {/* Dashboard Content */}
      <div className="flex-1 pt-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
