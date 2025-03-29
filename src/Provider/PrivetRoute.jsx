import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Spinner } from "keep-react";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="loader w-full h-screen flex justify-center items-center">
        <Spinner color="success" />
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

export default PrivetRoute;
