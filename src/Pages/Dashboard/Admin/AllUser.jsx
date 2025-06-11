import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-react";
import { RiDeleteBin6Line } from "react-icons/ri";
import toast from "react-hot-toast";
import Title from "../../../shared/Title";
import { FaUserGroup } from "react-icons/fa6";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log(users);

  const handleDeleteUser = (id) => {
    toast.dismiss();
    toast((t) => (
      <p className="space-x-3">
        <p className="mb-3">
          Are you sure you want to
          <span className="text-error-600 ml-1 font-bold">delete</span>?
        </p>
        <Button
          onClick={() => {
            axiosSecure.delete(`/users/${id}`).then((res) => {
              console.log(res);
              if (res.data.deletedCount > 0) {
                refetch();
                toast.success("User Deleted SuccessFull!");
              }
            });
            toast.dismiss();
          }}
          color="error"
        >
          Delete
        </Button>
        <Button onClick={() => toast.dismiss(t.id)} color="secondary">
          Cancle
        </Button>
      </p>
    ));
  };

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user?._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success(`${user?.name} is admin now.`);
      }
    });
  };

  return (
    <div className="mb-16">
      <Title title="MANAGE ALL USERS" subtitle="---How many??---"></Title>
      <div className="w-11/12 lg:w-4/5 mx-auto bg-white rounded-lg shadow-sm p-10 mt-10 space-y-4">
        <div>
          <span className="text-2xl font-[Cinzel] font-semibold">
            Total Items: {users?.length}
          </span>
        </div>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="bg-[#D1A054] text-white font-bold"></TableHead>
                <TableHead className="bg-[#D1A054] text-white font-bold">
                  Image
                </TableHead>
                <TableHead className="bg-[#D1A054] text-white font-bold">
                  Name
                </TableHead>
                <TableHead className="bg-[#D1A054] text-white font-bold">
                  Email
                </TableHead>
                <TableHead className="bg-[#D1A054] text-white font-bold">
                  Role
                </TableHead>
                <TableHead className="bg-[#D1A054] text-white text-center">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users?.map((user, index) => (
                <TableRow key={user._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <div className="w-16 h-16 rounded-md border-2">
                      <img src={user.photo} className="w-full h-full" />
                    </div>
                  </TableCell>

                  <TableCell className="text-lg font-medium">
                    {user.name}
                  </TableCell>
                  <TableCell className="lowercase">{user.email}</TableCell>
                  <TableCell className="text-2xl">
                    {user.role === "admin" ? (
                      <span className="text-base">Admin</span>
                    ) : (
                      <span
                        onClick={() => handleMakeAdmin(user)}
                        className=" p-2 rounded-md cursor-pointer"
                      >
                        <FaUserGroup />
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-4xl text-white">
                    <div
                      onClick={() => handleDeleteUser(user?._id)}
                      className="rounded-md cursor-pointer"
                    >
                      <RiDeleteBin6Line className="border-2 p-1 bg-[#B91C1C] rounded-md" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
