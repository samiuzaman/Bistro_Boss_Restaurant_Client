import { Button } from "keep-react";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl text-error-500 font-bold underline">
        Bistro Boss Restaurant Home Page
      </h1>
      <Button className="my-10">Submit</Button>
    </div>
  );
};

export default Home;
