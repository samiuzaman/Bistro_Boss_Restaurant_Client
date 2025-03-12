import { Envelope, FacebookLogo, GoogleLogo, Lock } from "phosphor-react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Divider,
  Input,
  InputIcon,
  Label,
} from "keep-react";
import Authentication2 from "../assets/others/authentication2.png";

const Login = () => {
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto bg-authenticationBg flex justify-center items-center py-6">
      <div className="w-full lg:w-1/2 mx-auto">
        <img src={Authentication2} />
      </div>
      <div className="w-full lg:w-1/2 mx-auto">
        <Card className="max-w-sm">
          <CardContent className="space-y-3">
            <CardHeader>
              <CardTitle>Create an account</CardTitle>
              <CardDescription>
                If you don&apos;t have any account then just click here
              </CardDescription>
            </CardHeader>
            <div className="flex items-center justify-between gap-3">
              <Button variant="outline" color="secondary" className="w-full">
                <GoogleLogo size={20} className="mr-1.5" />
                Google
              </Button>
              <Button variant="outline" color="secondary" className="w-full">
                <FacebookLogo size={20} className="mr-1.5" />
                Facebook
              </Button>
            </div>
            <Divider>Or</Divider>
            <form className="space-y-2">
              <fieldset className="space-y-1">
                <Label htmlFor="email">Email*</Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    className="ps-11"
                  />
                  <InputIcon>
                    <Envelope size={19} color="#AFBACA" />
                  </InputIcon>
                </div>
              </fieldset>
              <fieldset className="space-y-1">
                <Label htmlFor="password">Password*</Label>
                <div className="relative">
                  <Input
                    id="password"
                    placeholder="Enter password"
                    type="password"
                    className="ps-11"
                  />
                  <InputIcon>
                    <Lock size={19} color="#AFBACA" />
                  </InputIcon>
                </div>
              </fieldset>
              <Button type="submit" className="!mt-3 block w-full">
                Create Account
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
