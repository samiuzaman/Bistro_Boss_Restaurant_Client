import { Parallax } from "react-parallax";

const Cover = ({ bgimg, title, subtitle }) => {
  return (
    <Parallax
      blur={{ min: -25, max: 20 }}
      bgImage={bgimg}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className={`py-24 `}>
        <div className="bg-[#15151599] w-11/12 md:w-4/5 lg:w-3/5 mx-auto my-20 text-center py-24 space-y-5 px-5 md:px-16">
          <h3 className="text-2xl lg:text-5xl text-white font-bold font-[Cinzel] uppercase">
            {title}
          </h3>
          <p className="font-[Cinzel] text-white">{subtitle}</p>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
