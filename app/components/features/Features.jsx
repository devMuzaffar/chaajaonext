import featuresList from "./featuresList";

const Features = () => {
  return (
    <div className="defaultpadding ">
      {/* Features Title */}
      <div>
        <h2 className="text-center text-3xl font-medium md:text-4xl">
          Products Designed to{" "}
          <span className="text-primary">Deliver Results!</span>
        </h2>
      </div>

      {/* Features & Image Block */}
      <div>
        {/* Features */}
        <div className="flex flex-col gap-3">
          {featuresList.map(({ img, title, desc }, index) => (
            <div key={index} className="flex">
              <img className="w-20 py-6 pl-0 pr-6" src={img} alt="" />
              <div className="flex flex-col justify-center gap-1">
                <h2 className="text-lg font-medium">{title}</h2>
                <p className="text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image */}
        <div></div>
      </div>
    </div>
  );
};

export default Features;
