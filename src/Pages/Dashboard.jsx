import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex ">
      {/* Dashboard Side Bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul>
          <li>
            <NavLink to="/dashboard/cart">My Cart</NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard Content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
