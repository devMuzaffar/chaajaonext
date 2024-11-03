const OurMap = () => {
  return (
    <div className="defaultpadding_map flex flex-col items-center gap-5 sm:gap-10 md:flex-row md:gap-24">

        {/* Title */}
        <div className="flex flex-col gap-3 md:w-3/5">
            <h2 className="text-3xl font-medium md:text-4xl">Covering <span className="text-primary">20+</span> Universities & <span className="text-primary">60+</span> Programs!</h2>
            <p className="text-sm md:text-lg">Bringing you thousands of comprehensive lectures, tests, and notes for some of the most prestigious universities and curriculums out there, all in one place!</p>
        </div>


        {/* Map Image */}
        <div>
            <img src="./assets/map.png" alt="" />
        </div>



    </div>
  )
}

export default OurMap