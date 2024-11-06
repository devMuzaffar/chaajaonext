import { useState } from "react";

const InputField = ({ Icon, placeholder, type, className }) => {
  const [isSelected, setIsSelected] = useState(false);

  const notSelectedBorder = "border-4 border-transparent";
  const selectedBorder = "border-4 border-blue-300";
  const borderCondition = isSelected ? selectedBorder : notSelectedBorder;

  const enableBorder = () => setIsSelected(true);
  const disableBorder = () => setIsSelected(false);

  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all ${className} ${borderCondition}`}
      onFocus={enableBorder}
      onBlur={disableBorder}
    >
      <div className="border-[1px] border-gray-300 bg-transparent flex items-center overflow-hidden rounded-xl">
        {Icon && <Icon size={22} className="my-4 ml-4" />}
        <input
          className="text-xs placeholder:text-black selection:bg-primary selection:text-white tracking-wide outline-none w-full py-4 px-4"
          type={type ? type : "text"}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default InputField;
