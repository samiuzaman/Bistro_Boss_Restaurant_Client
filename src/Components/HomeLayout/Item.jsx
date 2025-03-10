const Item = ({ menu }) => {
  const { _id, name, image, recipe, price } = menu || {};
  return (
    <div className="flex items-center gap-3 border-b-2 py-3 ">
      <div>
        <img
          className="w-24 lg:w-20 h-16 lg:h-20 rounded-r-full rounded-bl-full"
          src={image}
        />
      </div>
      <div>
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-medium font-[Cinzel]">
            {name} -----------------
          </h3>
          <span className="text-[#BB8506]">{price}</span>
        </div>
        <p>{recipe}</p>
      </div>
    </div>
  );
};

export default Item;
