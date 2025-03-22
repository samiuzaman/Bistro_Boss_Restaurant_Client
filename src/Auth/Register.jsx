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

const Register = () => {
  const { setUser, createAccount, profileUpdate } = useAuth();
  const navigate = useNavigate();

  const handleCreateAccount = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(`name: ${name}, email: ${email}, Password: ${password}`);

    if (password.length < 6) {
      return toast.error("Password must be used 6 characters");
    }

    const CheckPassword = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!CheckPassword.test(password)) {
      return toast.error("Must be used one capital, and one lowercase letter");
    }

    // Create new account with email & password
    createAccount(email, password).then((result) => {
      profileUpdate({
        displayName: name,
      });
      setUser(result.user);
      toast.success("User Registration Successful");
      navigate("/");
    });
  };

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

            <form onSubmit={handleCreateAccount} className="space-y-4">
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
