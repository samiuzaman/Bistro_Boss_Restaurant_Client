import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Spinner } from "keep-react";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (user) {
    return children;
  }
  
  if (loading) {
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  }

  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivetRoute;
