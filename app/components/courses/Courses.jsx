import coursesList from "./coursesList";
import { LuArrowRight } from "react-icons/lu";

const Courses = () => {
  return (
    <div className="defaultpadding border-2 flex flex-col gap-2 md:gap-6 md:px-24">
      {/* Course Title */}
      <div>
        <h2 className="text-center text-3xl font-medium md:text-4xl">
          Explore Our <span className="text-primary">Course</span> Offerings!
        </h2>
      </div>

      {/* Courses Card */}
      <div className="grid place-items-center gap-4 py-6 px-5 sm:px-10 md:gap-5 md:grid-cols-3">
        {/* Card */}
        {coursesList.map(({ color, icon, text, bottomText }, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 border-[1px] border-gray-400 rounded-xl shadow-sm w-full py-8 pl-6"
          >
            {/* Icon */}
            <div className={`w-max p-3 rounded-xl md:p-5 ${color}`}>
              <img className="w-10 md:w-14" src={icon} alt="" />
            </div>

            {/* Text with Arrow */}
            <div className="flex items-center cursor-pointer gap-2">
              <p className="text-xl font-semibold md:text-2xl">{text}</p>
              <LuArrowRight className="text-[#FFC20E]" size={28} />
            </div>

            {/* Bottom Red Text */}
            <div className="text-red-700 font-medium text-sm md:text-base">
              <p>{bottomText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
