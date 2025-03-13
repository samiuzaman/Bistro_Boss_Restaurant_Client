const Cover = ({ bgimg, title, subtitle }) => {
  return (
    <div className={`py-24 bg-${bgimg} `}>
      <div className="bg-[#15151599] w-11/12 md:w-4/5 lg:w-3/5 mx-auto mt-24 text-center py-24 space-y-5">
        <h3 className="text-2xl lg:text-5xl text-white font-bold uppercase font-[Cinzel]">
          {title}
        </h3>
        <p className="font-[Cinzel] uppercase text-white">{subtitle}</p>
      </div>
    </div>
  );
};

export default Cover;
