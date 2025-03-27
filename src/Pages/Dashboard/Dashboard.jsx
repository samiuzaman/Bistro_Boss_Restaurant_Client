import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Dashboard Side Bar */}
      <Sidebar></Sidebar>
      {/* Dashboard Content */}
      <div className="flex-1 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
