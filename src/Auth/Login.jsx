import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Divider,
  Input,
  Label,
} from "keep-react";
import Authentication2 from "../assets/others/authentication2.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { user, setUser, loginWithGoogle, loginEmailPassword } = useAuth();
  console.log("User = ", user);

  // Login with Google
  const handleLoginGoogle = () => {
    console.log("Google Button Clicked");
    loginWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Login with Email & Password
  const handleLoginEmailPassword = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.loginPass.value;
    const captcha = form.captcha.value;

    console.log(`email: ${email}, password: ${password} captcha: ${captcha}`);

    loginEmailPassword(email, password).then((result) => {
      setUser(result.user);
      toast.success(`Login Successful`);
      console.log("Login User: ", result.user);
    });
  };

  return (
    <div className="w-11/12 lg:w-4/5 mx-auto h-screen bg-authenticationBg flex justify-center items-center py-6">
      <Helmet>
        <title>Login | Bistro Boss</title>
        <link rel="canonical" href="/login" />
      </Helmet>
      <div className="w-full lg:w-1/2 mx-auto hidden md:block">
        <img src={Authentication2} />
      </div>
      <div className="w-full lg:w-1/2 mx-auto">
        <Card className="max-w-sm mx-auto bg-">
          <CardContent className="space-y-3">
            <CardHeader>
              <CardTitle className="text-center">Login</CardTitle>
            </CardHeader>

            <form onSubmit={handleLoginEmailPassword} className="space-y-4">
              <fieldset className="space-y-1">
                <Label htmlFor="email">Email*</Label>
                <div className="relative">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    className=""
                  />
                </div>
              </fieldset>

              <fieldset className="space-y-1">
                <Label htmlFor="password">Password*</Label>
                <div className="relative">
                  <Input
                    name="loginPass"
                    type="password"
                    placeholder="Enter Password"
                    className=""
                  />
                </div>
              </fieldset>

              <div className="space-y-3 pt-1">
                <fieldset className="space-y-1">
                  <div className="relative">
                    <Input name="password" type="text" className="" />
                  </div>
                  <Label htmlFor="password">Reload Captcha</Label>
                </fieldset>
                <fieldset className="space-y-1">
                  <div className="relative">
                    <Input
                      name="captcha"
                      placeholder="Type Here"
                      type="text"
                      className=""
                    />
                  </div>
                </fieldset>
              </div>
              <Button type="submit" className="mt-5 block w-full bg-[#D1A054]">
                Log in
              </Button>
            </form>
            <div className="space-y-2">
              <p className="text-[#D1A054] text-center">
                New here?
                <Link to="/register">
                  <span className="font-semibold pl-2">
                    Create a New Account
                  </span>{" "}
                </Link>
              </p>
              <Divider color="error" variant="center">
                Or
              </Divider>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Button
                onClick={handleLoginGoogle}
                variant="outline"
                color="secondary"
              >
                <img
                  src="https://i.ibb.co/TvvzXfq/google.png"
                  className="w-8 h-8 mr-2"
                />{" "}
                Login with Google
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
