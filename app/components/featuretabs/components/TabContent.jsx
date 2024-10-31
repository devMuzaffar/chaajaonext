import MotionDiv from "./MotionDiv";
import RadioCard from "./RadioCard";
import { useState } from "react";

const TabContent = ({ featuresList }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      {featuresList && (
        <div className="flex justify-between">
          {/* All Your Radio Cards */}
          <div className="flex flex-col gap-3 h-full p-4">
            {featuresList.map(({ title, desc, img }, index) => (
              <div>
                <RadioCard
                  key={index}
                  title={title}
                  desc={desc}
                  index={index}
                  isSelected={selectedIndex === index}
                  setSelectedIndex={setSelectedIndex}
                />
                {/* Mobile Only Image */}
                <img
                  hidden={selectedIndex !== index}
                  className="py-2 w-full md:hidden"
                  src={img}
                  alt=""
                />
              </div>
            ))}
          </div>

          {/* Your Image */}
          <div className="p-16 hidden md:block">
            <MotionDiv value={selectedIndex}>
              <img src={featuresList[selectedIndex].img} alt="" />
            </MotionDiv>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabContent;
