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
import ManageBooking from "../Pages/Dashboard/ManageBooking";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import AllUser from "../Pages/Dashboard/Admin/AllUser";
import AdminRoute from "../Provider/AdminRoute";
import AddItems from "../Pages/Dashboard/Admin/AddItems";
import ManageItems from "../Pages/Dashboard/Admin/ManageItems";
import UpdateItem from "../Pages/Dashboard/Admin/UpdateItem";

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
      // Admin Route
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-itmes",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-booking",
        element: (
          <AdminRoute>
            <ManageBooking></ManageBooking>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-user",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-item",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/update-item/:id",
        element: (
          <AdminRoute>
            <UpdateItem> </UpdateItem>
          </AdminRoute>
        ),
        
      },
      // Users Routes
      {
        path: "/dashboard/my-cart",
        element: <MyCart></MyCart>,
      },
    ],
  },
]);

export default Routes;
