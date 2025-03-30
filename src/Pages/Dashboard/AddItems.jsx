import { Button, Input, Label, Textarea } from "keep-react";
import Title from "../../shared/Title";
import { ImSpoonKnife } from "react-icons/im";

const AddItems = () => {
  return (
    <div>
      <Title title="ADD AN ITEM" subtitle="---What's new?---"></Title>
      <div className="w-11/12 lg:w-4/5 mx-auto mt-10 bg-[#f3f3f3] shadow-md p-24">
        <form className="space-y-4">
          <fieldset className="space-y-1">
            <Label htmlFor="phone">Recipe name*</Label>
            <div className="relative">
              <Input
                name="number"
                placeholder="Enter Phone Number"
                type="number"
                required
              />
            </div>
          </fieldset>
          <div className="flex justify-between items-center gap-6">
            <fieldset className="w-full space-y-1">
              <Label htmlFor="email">Category*</Label>
              <div className="relative">
                <Input
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                  required
                />
              </div>
            </fieldset>
            <fieldset className="w-full space-y-1">
              <Label htmlFor="email">Price*</Label>
              <div className="relative">
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  required
                />
              </div>
            </fieldset>
          </div>

          <fieldset className="space-y-1.5 p-2">
            <Label htmlFor="message">Recipe Details*</Label>
            <Textarea
              id="message"
              placeholder="Write your message here"
              rows={8}
            />
          </fieldset>
          <div>I am not a robot</div>

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
