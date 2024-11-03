import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SlidePrevButton from "./buttons/SlidePrevButton";
import SlideNextButton from "./buttons/SlideNextButton";
import imagesList from "./list/imagesList";

const buttonsText = ["SAT", "ECAT", "MDCAT", "BCAT", "INTERMEDIATE"];

const Achievements = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // A Function with Index value returns String
  const isSelectedButton = (index) =>
    selectedIndex === index &&
    "text-primary bg-white border-[1px] border-gray-200 rounded-full shadow-lg";

  // Changes the index state on Click
  const handleSelection = (index) => {
    setSelectedIndex(index);
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  // Changes the state of buttons upon swiper hook boolean changes
  const handleSlideChange = (swiper) => {
    setSelectedIndex(swiper.activeIndex);
  };

  return (
    <div className="defaultpadding_achievements flex flex-col gap-2 md:gap-16">
      {/* Title */}
      <div className="text-center flex flex-col justify-center items-center gap-3">
        <h2 className="text-3xl font-medium md:text-4xl">
          Stellar <span className="text-primary">Achievements </span>
          in 2023-24! 🔥
        </h2>
        <p className="text-sm md:text-base md:w-1/2">
          With the relentless efforts & dedication of our esteemed teachers and
          students, achievements like these are made possible each year.
        </p>
      </div>

      {/* Slider with button */}
      <div className="flex flex-col gap-8 px-1">
        {/* Buttons */}
        <div className="bg-slate-100 shadow-sm flex justify-between rounded-full overflow-x-scroll md:overflow-x-auto">
          {buttonsText.map((text, index) => (
            <button
              key={index}
              className={`font-medium text-sm px-4 py-2 m-2 md:text-lg ${isSelectedButton(
                index
              )}`}
              onClick={(e) => handleSelection(index)}
            >
              {text}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={0}
            onSlideChange={handleSlideChange}
            onInit={(swiper) => setSwiperInstance(swiper)}
            navigation={{
              prevEl: "swiper-prev",
              nextEl: "swiper-next",
            }}
          >
            {imagesList.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`${image} bg-contain bg-no-repeat h-screen rounded-3xl xs:bg-cover md:h-[445px]`}
                />
              </SwiperSlide>
            ))}

            {/* Navigation Buttons */}
            <SlidePrevButton />
            <SlideNextButton />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
