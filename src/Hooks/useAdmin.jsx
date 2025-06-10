import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email],
    queryFn: async () => {
      const res = axiosSecure.get(`/users/admin/${user?.email}`);
      console.log("useAdmin = ", res);
      return res;
    },
  });
  console.log("isAdmin = useAdmin: ", isAdmin?.data?.admin);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
