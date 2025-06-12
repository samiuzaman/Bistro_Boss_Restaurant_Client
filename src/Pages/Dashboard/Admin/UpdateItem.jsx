import { useState } from "react";
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
} from "keep-react";
import Title from "../../../shared/Title";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/UseAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { _id, name, recipe, image, category, price } = useLoaderData();

  const [selectedValue, setSelectedValue] = useState();
  const { register, handleSubmit, reset, watch } = useForm();

  const onSubmit = async (data) => {
    data.category = selectedValue;
    console.log(data);
    // image upload to imagbb and then get and url
    const imageFile = { image: data.image[0] };
    const Itemres = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log("image", Itemres);

    if (Itemres.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: data.price,
        recipe: data.recipe,
        image: Itemres.data.data.display_url,
      };
      const res = await axiosSecure.patch(`menu/${_id}`, menuItem);
      console.log("patch result", res);
      if (res.data.modifiedCount > 0) {
        toast.success(`Item Update Successful!`);
      }
    }

    console.log("Result-", Itemres.data);
  };
  return (
    <div>
      <Title title="UPDATE ITEM"></Title>
      <div className="w-full lg:w-4/5 mx-auto mt-10 bg-[#f3f3f3] shadow-md p-6 lg:p-24">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <fieldset className="space-y-1">
            <Label htmlFor="name">Recipe Name*</Label>
            <div className="relative">
              <Input
                {...register("name", { required: true })}
                placeholder="Enter Recipe name"
                type="text"
                defaultValue={name}
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
                    <SelectValue placeholder={category} />
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
                  defaultValue={price}
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
              defaultValue={recipe}
            />
          </fieldset>
          <div>
            <input {...register("image")} type="file" />
          </div>

          <Button
            type="submit"
            className="!mt-3 dashboard-btn  hover:bg-[#8a6025] flex gap-2 rounded-none"
          >
            Update Recipe Details
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
