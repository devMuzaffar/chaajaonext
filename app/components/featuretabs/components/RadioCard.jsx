const RadioCard = ({ title, desc, isSelected, setSelectedIndex, index }) => {
  const cardCondition = isSelected ? "h-full md:h-32" : "h-12";
  const lineCondition = isSelected ? "bg-primary" : "bg-white";
  const radioCondition = isSelected ? "bg-primary" : "bg-white";
  const textCondition = isSelected ? "block" : "hidden";

  // Sends Back Index Value to Parent
  const handleClick = () => setSelectedIndex(index);

  return (
    <div
      className={`w-full flex items-stretch gap-2 border-[1px] border-gray-300 cursor-pointer shadow-sm md:w-[500px] ${cardCondition}`}
      onClick={handleClick}
    >
      {/* Horizontal Red Line */}
      <div className={`w-1 ${lineCondition}`} />

      {/* Main Content */}
      <div className="flex flex-col gap-2 w-full justify-center py-4">
        {/* Radio Button & Title */}
        <div className="flex items-center gap-3">
          {/* Radio Button */}
          <div className="flex justify-center items-center rounded-full border-2 border-primary w-6 h-6">
            <div className={`w-4 h-4 rounded-full ${radioCondition}`} />
          </div>
          {/* Title */}
          <div className="font-semibold text-sm sm:text-base">{title}</div>
        </div>

        {/* Desc */}
        <div className={`px-2 md:px-3 text-sm md:text-base ${textCondition}`}>
          {desc}
        </div>
      </div>
    </div>
  );
};

export default RadioCard;
