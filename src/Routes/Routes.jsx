import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import OurMenu from "../Pages/OurMenu";
import OurShop from "../Pages/OurShop";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Details from "../Pages/Details";
import PrivetRoute from "../Provider/PrivetRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart";
import AddItems from "../Pages/Dashboard/AddItems";
import ManageBooking from "../Pages/Dashboard/ManageBooking";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import AllUser from "../Pages/Dashboard/Admin/AllUser";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/our-menu",
        element: <OurMenu></OurMenu>,
      },

      {
        path: "/our-shop/:category",
        element: <OurShop></OurShop>,
      },
      {
        path: "/details",
        element: (
          <PrivetRoute>
            <Details></Details>
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <Dashboard></Dashboard>
      </PrivetRoute>
    ),
    children: [
      // 1st section
      {
        path: "/dashboard",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "/dashboard/add-itmes",
        element: <AddItems></AddItems>,
      },
      {
        path: "/dashboard/my-cart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/dashboard/manage-booking",
        element: <ManageBooking></ManageBooking>,
      },
      {
        path: "/dashboard/all-user",
        element: <AllUser></AllUser>,
      },
    ],
  },
]);

export default Routes;
