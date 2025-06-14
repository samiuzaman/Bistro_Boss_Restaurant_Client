import { Spinner } from "keep-react";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="loader w-full h-screen flex justify-center items-center">
        <Spinner color="success" />
      </div>
    );
  }

  if (user?.email && isAdmin?.data?.admin) {
    return children;
  }
  <Navigate to="/" state={location.pathname} replace></Navigate>;
};

export default AdminRoute;
