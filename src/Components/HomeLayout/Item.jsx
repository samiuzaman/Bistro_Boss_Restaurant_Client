import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "keep-react";

const Item = ({ item }) => {
  const { name, image, recipe } = item || {};
  return (
    <div>
      <Card className=" h-full">
        <CardHeader>
          <img className="w-full h-full" src={image} />
        </CardHeader>
        <CardContent className="space-y-3 text-center">
          <CardTitle>{name}</CardTitle>
          <CardDescription>{recipe}</CardDescription>
          <Button
            variant="softBg"
            className="border-b-2 border-[#BB8506] text-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506]"
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Item;
