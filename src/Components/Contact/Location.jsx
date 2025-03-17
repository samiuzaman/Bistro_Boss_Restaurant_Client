import { IoLocationSharp } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoTime } from "react-icons/io5";

const Location = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 ">
      <div className="w-full">
        <div className="bg-[#D1A054] py-2 flex justify-center text-white text-3xl">
          <PiPhoneCallFill />
        </div>
        <div className="bg-[#ffffff] w-10/12 mx-auto text-center space-y-3 py-8 h-36">
          <h4>PHONE</h4>
          <p>+38 (012) 34 56 789</p>
        </div>
      </div>
      <div className="w-full">
        <div className="bg-[#D1A054] py-2 flex justify-center text-white text-3xl">
          <IoLocationSharp />
        </div>
        <div className="bg-[#ffffff] w-10/12 mx-auto text-center space-y-3 py-8 h-36">
          <h4>ADDRESS</h4>
          <p>+38 (012) 34 56 789</p>
        </div>
      </div>
      <div className="w-full ">
        <div className="bg-[#D1A054] py-2 flex justify-center text-white text-3xl">
          <IoTime></IoTime>
        </div>
        <div className="bg-[#ffffff] w-10/12 mx-auto text-center space-y-3 py-8 h-36">
          <h4>WORKING HOURS</h4>
          <p>
            Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
