import InputField from "./InputField";
import { FaRegUser } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";

const LoginScreen = () => {
  return (
    <div className="flex flex-col gap-5 p-8">
      <h2 className="text-lg font-semibold text-center">
        Login to your account
      </h2>
      <form className="flex flex-col gap-3">
        <InputField Icon={FaRegUser} placeholder={"Email/Username/Phone"} />
        <InputField Icon={FaUnlockAlt} placeholder={"Password"} type={"password"}/>
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

export default LoginScreen;
