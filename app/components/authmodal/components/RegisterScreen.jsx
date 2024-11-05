
import { FaEnvelope, FaLocationPin, FaLocationPinLock, FaPhone } from "react-icons/fa6"
import InputField from "./InputField"
import { FaRegUser, FaUnlockAlt } from "react-icons/fa"


const RegisterScreen = () => {
  return (
    <div className="flex flex-col gap-5 p-8">
      <form className="flex flex-col gap-3">
        <InputField Icon={FaRegUser} placeholder={"First Name (required)"} />
        <InputField Icon={FaRegUser} placeholder={"Last Name (required)"} />
        <InputField Icon={FaPhone} placeholder={"Phone (+92) (required)"} type={"number"} />
        <InputField Icon={FaEnvelope} placeholder={"Email (required)"} type={"email"} />
        <InputField Icon={FaUnlockAlt} placeholder={"Password (required)"} type={"password"}/>
        <InputField Icon={FaUnlockAlt} placeholder={"Confirm Password (required)"} type={"password"}/>
        <InputField Icon={FaLocationPin} placeholder={"City (required)"}/>
      </form>
      <a className="text-primary text-xs font-semibold" href="">
        Forgot Password?
      </a>
      <button className="rounded-md bg-primary text-white text-xl w-full p-3">
        LOGIN
      </button>
    </div>
  )
}

export default RegisterScreen