import { Button, Input, Label, Textarea } from "keep-react";
import Title from "../../shared/Title";

const ContactForm = () => {
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto">
      <Title title="CONTACT FORM" subtitle="---Send Us a Message---"></Title>

      <div className="mt-6 bg-[#F3F3F3] p-24">
        <form className="space-y-4">
          <div className="flex justify-between items-center gap-6">
            <fieldset className="w-full space-y-1">
              <Label htmlFor="email">Name</Label>
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
              <Label htmlFor="email">Email</Label>
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

          <fieldset className="space-y-1">
            <Label htmlFor="phone">Phone</Label>
            <div className="relative">
              <Input
                name="number"
                placeholder="Enter Phone Number"
                type="number"
                required
              />
            </div>
          </fieldset>

          <fieldset className="space-y-1.5 p-2">
            <Label htmlFor="message">Message*</Label>
            <Textarea
              id="message"
              placeholder="Write your message here"
              rows={8}
            />
          </fieldset>

          <Button type="submit" className="!mt-3 block w-full bg-[#D1A054]">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
