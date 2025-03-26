import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "keep-react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Item = ({ item }) => {
  const { user } = useAuth();
  const { _id, name, image, recipe, category, price } = item || {};
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleAddToCart = (food) => {
    if (user && user?.email) {
      // Send cart item to the database
      const cartItem = {
        email: user?.email,
        foodId: _id,
        name,
        image,
        category,
        price,
        recipe,
      };
      axiosSecure.post(`/carts`, cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success(`${name} added to cart`);
        }
      });
    } else {
      toast((t) => (
        <p className="space-x-3">
          <span>You are not Login</span>
          <Button
            onClick={() => {
              navigate("/login");
              toast.dismiss();
            }}
            color="success"
          >
            Login
          </Button>
          <Button onClick={() => toast.dismiss(t.id)} color="secondary">
            Cancle
          </Button>
        </p>
      ));
    }
  };

  return (
    <div>
      <Card className=" h-full">
        <CardHeader>
          <img className="w-full h-full" src={image} />
        </CardHeader>
        <CardContent className="space-y-3 text-center">
          <CardTitle>{name}</CardTitle>
          <CardDescription>{recipe}</CardDescription>
          <Button
            onClick={() => handleAddToCart(item)}
            variant="softBg"
            className="border-b-2 border-[#BB8506] text-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506]"
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Item;
