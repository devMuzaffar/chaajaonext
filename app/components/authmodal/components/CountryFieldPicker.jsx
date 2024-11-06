import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import "../styles/style.css";

const CountryFieldPicker = () => {
  const [isSelected, setIsSelected] = useState(false);

  const notSelectedBorder = "border-4 border-transparent";
  const selectedBorder = "border-4 border-blue-300";
  const borderCondition = isSelected ? selectedBorder : notSelectedBorder;

  const enableBorder = () => setIsSelected(true);
  const disableBorder = () => setIsSelected(false);

  const mypadding = { padding: "16px 8px 16px 48px" };

  return (
    <div
      className={`rounded-2xl transition-all ${borderCondition}`}
      onFocus={enableBorder}
      onBlur={disableBorder}
    >
      <div className="border-[1px] border-gray-300 bg-transparent flex items-center justify-center rounded-xl h-full">
        <PhoneInput
          country={"pk"}
          disableCountryCode={true}
          placeholder="Phone Number"
          inputStyle={{
            height: "100%",
            width: "100%",
            outline: "none",
            border: "none",
            borderRadius: "12px",
            color: "#000000",
          }}
        />
      </div>
    </div>
  );
};

export default CountryFieldPicker;
