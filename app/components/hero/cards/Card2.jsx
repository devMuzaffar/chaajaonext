const Card2 = () => {
  const bgCard = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div
      style={bgCard}
      className="bg-card2-mobile h-[calc(100vh-20vh)] rounded-3xl md:bg-card2 md:flex md:items-center md:h-[calc(100vh-25vh)]"
    >
      {/* Text Block */}
      <div className="flex flex-col items-center h-full gap-3 px-2 py-8 text-center md:w-1/2 md:px-20 md:py-2 md:text-left md:justify-center md:items-start md:gap-5">
        <h2 className="text-xl leading-6 text-black font-medium md:text-5xl">
          Investing in Dreams, Creating 
          <span className="text-primary"> Opportunities!</span>
        </h2>
        <p className="text-sm text-gray-700 md:text-base">
          Distributing hundreds of full scholarships to the deserving. Unlocking
          potential, one scholarship at a time!
        </p>

        <button className="bg-black text-white rounded-full text-sm w-max py-2 px-6 transition-all hover:bg-transparent">
          Chat On Whatsapp
        </button>
      </div>
    </div>
  );
};

export default Card2;
