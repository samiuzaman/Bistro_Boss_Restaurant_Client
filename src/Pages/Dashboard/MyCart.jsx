import { Button } from "keep-react";
import Title from "../../shared/Title";
import {
  Avatar,
  AvatarImage,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-react";
import useCart from "../../Hooks/useCart";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (id) => {
    toast.dismiss();
    toast((t) => (
      <p className="space-x-3">
        <p className="mb-3">
          Are you sure you want to
          <span className="text-error-600 ml-1 font-bold">delete</span>?
        </p>
        <Button
          onClick={() => {
            axiosSecure.delete(`carts/${id}`).then((res) => {
              console.log(res);
              if (res.data.deletedCount > 0) {
                refetch();
                toast.success("Item Delete SuccessFull!");
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

  return (
    <div>
      <Title title="MANAGE ALL ITEMS" subtitle="---Hurry Up!---"></Title>
      <div className="w-11/12 lg:w-4/5 mx-auto bg-white rounded-lg shadow-sm p-10 mt-10 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-[Cinzel] font-semibold">
            Total Oders: {cart?.length}
          </span>
          <span className="text-2xl font-[Cinzel] font-semibold">
            Total Price: ${totalPrice}
          </span>
          <Button
            color="warning"
            className="hover:bg-[#D1A054] text-lg font-semibold"
          >
            Pay
          </Button>
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
                  Price
                </TableHead>
                <TableHead className="bg-[#D1A054] text-white text-center">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart?.map((item, index) => (
                <TableRow key={item._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <div className="w-16 h-16 rounded-md border-2">
                      <img src={item.image} className="w-full h-full" />
                    </div>
                  </TableCell>

                  <TableCell className="text-lg font-medium">
                    {item.name}
                  </TableCell>
                  <TableCell>${item.price}</TableCell>
                  <TableCell className="flex items-center justify-center gap-5 lg:gap-10 xl:gap-12 text-2xl text-white ">
                    <span
                      onClick={() => handleDeleteItem(item?._id)}
                      className="bg-error-600 p-2 rounded-md cursor-pointer"
                    >
                      <MdDelete />
                    </span>
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

export default MyCart;
