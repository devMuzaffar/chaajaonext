import AnimateNumbers from "./components/AnimateNumbers";

const FeatureCard = ({ numbers, text }) => {

  return (
      <div className="bg-white flex flex-col justify-center items-center py-8 sm:py-12 md:py-4 md:gap-2">
      <h2 className="text-[#33363A] text-2xl font-medium md:text-3xl">
        <AnimateNumbers numbers={numbers}/>
        <span className="text-primary">+</span>
      </h2>
      <p className="text-xs text-gray-700 md:text-sm md:font-medium">{text}</p>
    </div>
  );
};

export default FeatureCard;
