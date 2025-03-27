import { Button } from "keep-react";
import Title from "../../shared/Title";
import {
  DotsThreeOutlineVertical,
  MagnifyingGlass,
  Plus,
} from "phosphor-react";
import {
  Avatar,
  AvatarImage,
  Badge,
  Checkbox,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-react";
import useCart from "../../Hooks/useCart";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart);
  return (
    <div>
      <Title title="MANAGE ALL ITEMS" subtitle="---Hurry Up!---"></Title>
      <div className="w-11/12 lg:w-4/5 mx-auto bg-white rounded-lg shadow-sm p-10 mt-8 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-[Cinzel] font-semibold">
            Total items: {cart?.length}
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
                <TableHead className="bg-[#D1A054] text-white"></TableHead>
                <TableHead className="bg-[#D1A054] text-white">Image</TableHead>
                <TableHead className="bg-[#D1A054] text-white">Name</TableHead>
                <TableHead className="bg-[#D1A054] text-white">Price</TableHead>
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
                    <Avatar>
                      <AvatarImage src={item.image} />
                    </Avatar>
                  </TableCell>

                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell className="flex items-center justify-center gap-5 lg:gap-10 xl:gap-12 text-3xl text-white ">
                    <span className="bg-[#D1A054] p-2 rounded-md cursor-pointer">
                      <CiEdit className="font-normal" />
                    </span>
                    <span className="bg-error-600 p-2 rounded-md cursor-pointer">
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
