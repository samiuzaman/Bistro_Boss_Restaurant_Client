import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "keep-react";
import Authentication2 from "../assets/others/authentication2.png";
import { IoLogoGithub } from "react-icons/io5";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Register = () => {
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto h-screen bg-authenticationBg flex flex-row-reverse justify-center items-center py-6">
      <Helmet>
        <title>SignIn | Bistro Boss</title>
        <link rel="canonical" href="/register" />
      </Helmet>
      <div className="w-full lg:w-1/2 mx-auto hidden md:block">
        <img src={Authentication2} />
      </div>
      <div className="w-full lg:w-1/2 mx-auto">
        <Card className="max-w-sm mx-auto bg-">
          <CardContent className="space-y-3">
            <CardHeader>
              <CardTitle className="text-center">Register</CardTitle>
            </CardHeader>

            <form className="space-y-4">
              <fieldset className="space-y-1">
                <Label htmlFor="email">Name*</Label>
                <div className="relative">
                  <Input
                    name="name"
                    type="text"
                    placeholder="Enter Name"
                    required
                  />
                </div>
              </fieldset>
              <fieldset className="space-y-1">
                <Label htmlFor="email">Email*</Label>
                <div className="relative">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    required
                  />
                </div>
              </fieldset>

              <fieldset className="space-y-1">
                <Label htmlFor="password">Password*</Label>
                <div className="relative">
                  <Input
                    name="password"
                    placeholder="Enter Password"
                    type="password"
                    required
                  />
                </div>
              </fieldset>

              <Button type="submit" className="!mt-3 block w-full bg-[#D1A054]">
                Register
              </Button>
            </form>
            <div className="space-y-2">
              <p className="text-[#D1A054] text-center">
                Already registered?
                <Link to="/login">
                  <span className="font-semibold pl-2">Go to log in</span>
                </Link>
              </p>
              <p className="text-center">Or sign in with</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Button variant="outline" color="secondary">
                <FaGoogle size={20} className="mr-1.5" />
              </Button>
              <Button variant="outline" color="secondary">
                <FaFacebookF size={20} className="mr-1.5 " />
              </Button>
              <Button variant="outline" color="secondary">
                <IoLogoGithub size={20} className="mr-1.5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
