import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
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
import Title from "../../../shared/Title";
import { FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import useMenu from "../../../Hooks/useMenu";
import { useNavigate } from "react-router-dom";

const ManageItems = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [menu, loading, refetch] = useMenu();

  const handleEditItem = (item) => {
    console.log("Manage Edit Item:", item);
    navigate(`/dashboard/update-item/${item._id}`);
  };

  const handleDeleteItem = (itemId) => {
    console.log("Manage Delete Item:", itemId);
    toast.dismiss();
    toast((t) => (
      <div className="space-x-3">
        <p className="mb-3">
          Are you sure you want to
          <span className="text-error-600 ml-1 font-bold">delete</span> item?
        </p>

        <Button
          onClick={() => {
            axiosSecure.delete(`/menu/${itemId}`).then((res) => {
              if (res.data.deletedCount > 0) {
                refetch();
                toast.success("Item Deleted Successfull!");
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
      </div>
    ));
  };

  return (
    <div className="mb-16">
      <Title title="MANAGE ALL ITEMS" subtitle="------Hurry Up!------"></Title>
      <div className="w-11/12 lg:w-4/5 mx-auto bg-white rounded-lg shadow-sm p-10 mt-10 space-y-4">
        <div>
          <span className="text-2xl font-[Cinzel] font-semibold">
            Total Items: {menu?.length}
          </span>
        </div>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="bg-[#D1A054] text-white font-bold"></TableHead>
                <TableHead className="bg-[#D1A054] text-white font-bold">
                  Item Image
                </TableHead>
                <TableHead className="bg-[#D1A054] text-white font-bold">
                  Itme name
                </TableHead>
                <TableHead className="bg-[#D1A054] text-white font-bold">
                  price
                </TableHead>
                <TableHead className="bg-[#D1A054] text-white font-bold">
                  Action
                </TableHead>
                <TableHead className="bg-[#D1A054] text-white text-center">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {menu?.map((item, index) => (
                <TableRow key={item._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <div className="w-16 h-16 rounded-md border-2">
                      <img src={item.image} className="w-full h-full" />
                    </div>
                  </TableCell>

                  <TableCell className="text-lg font-semibold">
                    {item.name}
                  </TableCell>
                  <TableCell className="lowercase text-lg">
                    $ {item.price}
                  </TableCell>
                  <TableCell className="text-2xl">
                    {item.role === "admin" ? (
                      <span className="text-base">Admin</span>
                    ) : (
                      <span
                        onClick={() => handleEditItem(item)}
                        className="p-2 rounded-md cursor-pointer"
                      >
                        <FaEdit className="bg-[#D1A054] p-[6px] w-9 h-9 text-white rounded-md border-2" />
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-4xl text-white">
                    <div
                      onClick={() => handleDeleteItem(item._id)}
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

export default ManageItems;
