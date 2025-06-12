import {useState } from "react";
import {
  Button,
  Input,
  Label,
  Textarea,
  Select,
  SelectAction,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
  toast,
} from "keep-react";
import { ImSpoonKnife } from "react-icons/im";
import Title from "../../../shared/Title";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/UseAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const [selectedValue, setSelectedValue] = useState();
  const { register, handleSubmit, reset, watch } = useForm();

  const onSubmit = async (data) => {
    data.category = selectedValue;
    console.log(data);
    // image upload to imagbb and then get and url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res?.data?.success) {
      // now send the menu data to the server with the image
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log("With images Url", menuRes.data);
      if (menuRes?.data?.insertedId) {
        reset();
        // show success popup
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.name} is added to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("Result-", res.data);
  };

  // console.log("handle Submit: ", watch);
  console.log("Selected Value: ", selectedValue);
  console.log(watch("example"));
  return (
    <div>
      <Title title="ADD AN ITEM" subtitle="---What's new?---"></Title>
      <div className="w-full lg:w-4/5 mx-auto mt-10 bg-[#f3f3f3] shadow-md p-6 lg:p-24">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <fieldset className="space-y-1">
            <Label htmlFor="name">Recipe Name*</Label>
            <div className="relative">
              <Input
                {...register("name", { required: true })}
                placeholder="Enter Recipe name"
                type="text"
              />
            </div>
          </fieldset>
          <div className="flex justify-between items-center gap-6">
            <fieldset className="w-full space-y-1">
              <Label htmlFor="category">Category*</Label>
              <div className="relative">
                <Select
                  {...register("category")}
                  onValueChange={setSelectedValue}
                >
                  <SelectAction className="w-full">
                    <SelectValue placeholder="Category" />
                  </SelectAction>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="dessert">Dessert</SelectItem>
                      <SelectItem value="pizza">Pizza </SelectItem>
                      <SelectItem value="salad">Salad</SelectItem>
                      <SelectItem value="soup">Soup</SelectItem>
                      <SelectItem value="drinks">Drinks</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </fieldset>
            <fieldset className="w-full space-y-1">
              <Label htmlFor="price">Price*</Label>
              <div className="relative">
                <Input
                  {...register("price", { required: true })}
                  type="number"
                  placeholder="Price"
                />
              </div>
            </fieldset>
          </div>

          <fieldset className="space-y-1.5 p-2">
            <Label htmlFor="recipe">Recipe Details*</Label>
            <Textarea
              {...register("recipe", { required: true })}
              placeholder="Write your message here"
              rows={8}
            />
          </fieldset>
          <div>
            <input {...register("image")} type="file" />
          </div>

          <Button
            type="submit"
            className="!mt-3 dashboard-btn  hover:bg-[#8a6025] flex gap-2 rounded-none"
          >
            Add Item <ImSpoonKnife />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
