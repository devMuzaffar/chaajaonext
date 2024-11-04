const AvailNow = () => {
  return (
    <div className="defaultpadding_availnow bg-slate-100">
      {/* Red Container */}
      <div className="flex flex-col relative items-center gap-16 rounded-3xl bg-primary px-8 pt-14 xs:gap-8 md:flex-row md:px-12 md:py-24">
        {/* Text button */}
        <div className="flex flex-col items-center gap-5 text-center md:w-1/2 md:text-left md:items-start">
          <h2 className="text-white text-xl font-medium xs:text-2xl md:text-4xl">
            Get <span className="bg-black">FREE</span> Counselling From
            Chaajao's{" "}
            <span className="bg-circleImg bg-contain bg-center bg-no-repeat">
              Experts!
            </span>
          </h2>
          <button className="bg-white font-semibold text-orange-600 text-sm py-2 px-6 rounded-3xl">
            Avail Now!
          </button>
        </div>

        {/* Image */}
        <div className="block md:absolute bottom-0 right-6">
          <img className="" src="./assets/availnow/picture.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AvailNow;
