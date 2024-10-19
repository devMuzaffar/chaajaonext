

const Hero = () => {

    const bgDefaultStyling = {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    }

    const bgCard1 = {
        bgDefaultStyling,
        backgroundImage: "url('./assets/card/1-mobile.png')",
    };


  return (
    <div className="border-2">

        {/* Card Section */}
        <div>

            {/* Card 1 */}
            <div style={bgCard1}
            className="w-full h-96"
            >
                {/* Text Block */}
                <div>


                </div>

                
            </div>

        </div>



        {/* Numbers Section */}

    </div>
  )
}

export default Hero