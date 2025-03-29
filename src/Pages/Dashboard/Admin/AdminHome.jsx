import { GiWallet } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { MdLocalShipping } from "react-icons/md";
import { SiCodechef } from "react-icons/si";

const AdminHome = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-lg font-semibold">Hi, Welcome Back!</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
        {/* Card One */}
        <div className="admin-card-one-bg py-12 text-white flex items-center justify-center gap-4 rounded-xl">
          <GiWallet className="text-4xl" />
          <div>
            <p className="text-xl font-bold">1000</p>
            <p className="text-lg">Revenue</p>
          </div>
        </div>
        {/* Card Two */}
        <div className="admin-card-two-bg py-9 text-white flex items-center justify-center gap-4 rounded-xl">
          <HiUserGroup className="text-4xl" />
          <div>
            <p className="text-xl font-bold">1000</p>
            <p className="text-lg">Revenue</p>
          </div>
        </div>
        {/* Card Three */}
        <div className="admin-card-three-bg py-9 text-white flex items-center justify-center gap-4 rounded-xl">
          <SiCodechef className="text-4xl" />
          <div>
            <p className="text-xl font-bold">1000</p>
            <p className="text-lg">Revenue</p>
          </div>
        </div>
        {/* Card Four */}
        <div className="admin-card-four-bg py-9 text-white flex items-center justify-center gap-4 rounded-xl">
          <MdLocalShipping className="text-4xl" />
          <div>
            <p className="text-xl font-bold">1000</p>
            <p className="text-lg">Revenue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
