const Card4 = () => {
    const bgCard = {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }

  return (
    <div style={bgCard} className={`bg-card4-mobile w-full h-[calc(100vh-20vh)] rounded-3xl md:bg-card4 md:h-[calc(100vh-25vh)]`} />
  )
}

export default Card4