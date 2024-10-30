import featuresList from "./featuresList";

const Features = () => {
  return (
    <div className="defaultpadding_features flex flex-col gap-5 sm:gap-6 md:gap-16">
      {/* Features Title */}
      <div>
        <h2 className="text-center text-3xl font-medium md:text-4xl">
          Products Designed to{" "}
          <span className="text-primary">Deliver Results!</span>
        </h2>
      </div>

      {/* Features & Image Block */}
      <div className="px-2 flex flex-col gap-12 pb-16 md:flex-row-reverse md:items-center">
        {/* Features Block */}
        <div className="flex flex-col gap-5">
          {featuresList.map(({ img, title, desc }, index) => (
            <div key={index} className="flex items-center gap-5">
              {/* Icon */}
              <img className="w-14 md:w-20" src={img} alt="" />

              {/* Texts */}
              <div className="flex flex-col justify-center gap-1 py-2">
                <h2 className="text-lg font-medium md:text-2xl">{title}</h2>
                <p className="text-xs leading-normal md:text-sm md:leading-snug">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image  */}
        <img
          className="rounded-[40px]"
          src="./assets/feature2/happy-guy.jpg"
          alt=""
        />
      </div>

      {/* Text */}
      <div className="text-sm text-center flex flex-col gap-3 md:px-72">
        <h2 className="text-[28px] leading-9 font-medium md:text-3xl md:px-20">
          All the <span className="text-primary">Features</span> You'll Ever
          Need to
          <span className="text-primary"> Ace</span> Your Exams!
        </h2>
        <p>
          Revolutionize your learning experience through a comprehensive suite
          of innovative tools and resources, all seamlessly integrated for
          maximum results!
        </p>
      </div>
    </div>
  );
};

export default Features;
