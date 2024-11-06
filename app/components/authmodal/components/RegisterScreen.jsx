import { FaMapMarkerAlt, FaRegUser, FaUnlockAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import InputField from "./InputField";
import CountryFieldPicker from "./CountryFieldPicker";

const RegisterScreen = () => {
  return (
    <div className="flex flex-col gap-5 p-8 relative">
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <InputField Icon={FaRegUser} placeholder={"First Name "} />
        <InputField Icon={FaRegUser} placeholder={"Last Name "} />
        <CountryFieldPicker />
        <InputField Icon={FaEnvelope} placeholder={"Email "} type={"email"} />
        <InputField
          Icon={FaUnlockAlt}
          placeholder={"Password "}
          type={"password"}
        />
        <InputField
          Icon={FaUnlockAlt}
          placeholder={"Confirm Password "}
          type={"password"}
        />
        <InputField
          className="sm:col-span-2"
          Icon={FaMapMarkerAlt}
          placeholder={"City "}
        />
      </form>
      <a className="text-primary text-xs font-semibold" href="">
        Forgot Password?
      </a>
      <button className="rounded-md bg-primary text-white text-xl w-full p-3">
        LOGIN
      </button>
    </div>
  );
};

export default RegisterScreen;
