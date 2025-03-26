import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Dashboard from "../Pages/Dashboard";
import OurMenu from "../Pages/OurMenu";
import OurShop from "../Pages/OurShop";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Details from "../Pages/Details";
import PrivetRoute from "../Provider/PrivetRoute";
import Cart from "../Components/Dashboard/Cart";

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
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);

export default Routes;
