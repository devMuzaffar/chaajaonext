const Card3 = () => {
  const bgCard = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div style={bgCard} className="bg-card3-mobile h-96 rounded-3xl md:bg-card3 md:flex md:items-center md:h-[calc(100vh-25vh)]">
      
      {/* Div Block */}
      <div className="flex flex-col items-center gap-5 h-full px-2 py-4 text-center md:justify-center md:w-1/2 md:items-start md:px-20 md:py-2">

        {/* Text */}
        <div className="flex flex-col md:gap-2 border-2">
        <div className="flex items-center justify-center gap-2">
          <img className="inline w-1/2 md:w-3/4 bg-cover" src="./assets/logo.png" alt="" />
          <h2 className="text-3xl font-bold md:text-6xl">App</h2>
        </div>
        
        <p className="text-sm tracking-[10px] md:text-5xl md:tracking-[12px]">Revealed By</p>

        <h3 className="font-bold text-2xl md:text-5xl">#TabishHashmi</h3>
        </div>

        {/* Button */}
        <button className="bg-green-500 rounded-full text-sm w-max py-2 px-6 transition-all hover:bg-transparent font-medium text-white">
          Watch Now
        </button>

      </div>
    </div>
  )
}

export default Card3

// Conitnue Card 3