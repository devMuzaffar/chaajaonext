const Card1 = () => {
  const bgCard = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div style={bgCard} className="bg-card1-mobile h-[calc(100vh-20vh)] rounded-3xl md:bg-card1 md:flex md:items-center md:h-[calc(100vh-25vh)]">
      
      {/* Text Block */}
      <div className="flex flex-col items-center gap-3 text-white h-full px-2 py-8 text-center md:justify-center md:w-1/2 md:text-left md:items-start md:pr-0 md:pl-20 md:py-2 md:gap-5">

        <h2 className="text-xl font-medium md:text-5xl md:leading-tight">
          From <span className="text-secondary">Learning</span> to Succeeding,
          Our Results <span className="text-secondary">Speak Volumes.</span>
        </h2>
        <p className="text-sm md:text-lg">
          chaajao's users cleared the entry tests of premier tier-1 universities
          in Pakistan!{" "}
          <span>
            <img
              className="inline"
              width={18}
              src="./assets/card/pakistan-flag.svg"
              alt=""
            />
          </span>
        </p>

        <button className="bg-black rounded-full text-sm w-max py-2 px-6 transition-all hover:bg-transparent">
          Chat On Whatsapp
        </button>
      </div>
    </div>
  );
};

export default Card1;
