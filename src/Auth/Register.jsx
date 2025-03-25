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
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const Register = () => {
  const { setUser, createAccount, profileUpdate } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createAccount(data.email, data.password).then((result) => {
      setUser(result.user);
      profileUpdate({
        displayName: data?.name,
        photoURL: data?.photo,
      });
      toast.success("User Registration Successful");
      navigate("/");
    });
  };
  console.log(watch("example"));

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

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <fieldset className="space-y-1">
                <Label htmlFor="email">Name*</Label>
                <div className="relative">
                  <Input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Enter Name"
                    className="border-none focus:border-none"
                  />
                  {errors?.name && (
                    <span className="text-red-600 mt-2">
                      Name field is required
                    </span>
                  )}
                </div>
              </fieldset>
              <fieldset className="space-y-1">
                <Label htmlFor="email">photo URL*</Label>
                <div className="relative">
                  <Input
                    {...register("photo", { required: true })}
                    type="text"
                    placeholder="Enter photo URL"
                    className="border-none focus:border-none"
                  />
                  {errors?.photo && (
                    <span className="text-red-600 mt-2">
                      Photo URL is required
                    </span>
                  )}
                </div>
              </fieldset>
              <fieldset className="space-y-1">
                <Label htmlFor="email">Email*</Label>
                <div className="relative">
                  <Input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Enter Email"
                    className="border-none focus:border-none"
                  />
                  {errors?.email && (
                    <span className="text-red-600 mt-2">
                      Email field is required
                    </span>
                  )}
                </div>
              </fieldset>

              <fieldset className="space-y-1">
                <Label htmlFor="password">Password*</Label>
                <div className="relative">
                  <Input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 15,
                      pattern: /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&]{6,}$/,
                    })}
                    placeholder="Enter Password"
                    type="password"
                    className="border-none"
                  />
                  {errors?.password?.type === "required" && (
                    <span className="text-red-600 mt-2">
                      Password is required
                    </span>
                  )}
                  {errors?.password?.type === "minLength" && (
                    <span className="text-red-600 mt-2">
                      Password must be 6 characters
                    </span>
                  )}
                  {errors?.password?.type === "maxLength" && (
                    <span className="text-red-600 mt-2">
                      Password must be less then 15 characters
                    </span>
                  )}
                  {errors?.password?.type === "pattern" && (
                    <span className="text-red-600 mt-2">
                      Must be used one capital, and one lowercase letter
                    </span>
                  )}
                </div>
              </fieldset>

              <Button type="submit" className="mt-5 block w-full bg-[#D1A054]">
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
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
