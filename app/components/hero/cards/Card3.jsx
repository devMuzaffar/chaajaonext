const Card3 = () => {
  const bgCard = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div style={bgCard} className="bg-card3-mobile h-[calc(100vh-20vh)] rounded-3xl md:bg-card3 md:flex md:items-center md:h-[calc(100vh-25vh)]">
      
      {/* Div Block */}
      <div className="flex flex-col items-center gap-2 h-full px-2 py-4 text-center md:gap-5 md:justify-center md:w-1/2 md:items-center md:px-20 md:py-2">

        {/* Text Block */}
        <div className="flex flex-col">

          {/* Chaajao App */}
        <div className="flex items-center justify-center gap-3 md:justify-start">
          <img className="inline w-2/5 md:w-4/6" src="./assets/logo.png" alt="" />
          <h2 className="text-3xl font-bold md:text-6xl">App</h2>
        </div>
        
        {/* Revelated By */}
        <p className="text-sm tracking-[10px] md:text-left md:text-5xl md:tracking-[18px]">Revealed By</p>

        {/* #Tabish Hashmi */}
        <h3 className="font-bold text-2xl md:text-5xl md:pt-5">#TabishHashmi</h3>
        </div>

        {/* Button */}
        <button className="bg-green-500 rounded-full text-sm w-max py-2 px-6 transition-all font-medium text-white hover:bg-transparent hover:text-black md:px-10 md:py-3 md:text-lg">
          Watch Now
        </button>

      </div>
    </div>
  )
}

export default Card3

// Conitnue Card 3