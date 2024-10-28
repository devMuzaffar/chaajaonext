"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import Card1 from "./cards/Card1";
import Card2 from "./cards/Card2";
import Card3 from "./cards/Card3";
import SlidePrevButton from "./swiper/SlidePrevButton";
import SlideNextButton from "./swiper/SlideNextButton";
import { useState } from "react";
import featuresList from "./featureList";
import FeatureCard from "./feature/FeatureCard";

const Hero = () => {
  // For Buttons
  const [isBeginning, setIsBeginning] = useState(null);
  const [isEnd, setIsEnd] = useState(null);

  // Changes the state of buttons upon swiper hook boolean changes
  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="defaultpadding_hero relative">
      {/* Card Section */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={0}
          loop={false}
          onSlideChange={handleSlideChange}
          onInit={(swiper) => setIsBeginning(swiper.isBeginning)}
          navigation={{
            prevEl: "swiper-prev",
            nextEl: "swiper-next",
          }}
        >
          <SwiperSlide>
            <Card3 />
          </SwiperSlide>
          <SwiperSlide>
            <Card1 />
          </SwiperSlide>
          <SwiperSlide>
            <Card2 />
          </SwiperSlide>

          {/* Navigation Buttons */}
          <SlidePrevButton isBeginning={isBeginning} />
          <SlideNextButton isEnd={isEnd} />
        </Swiper>
      </div>

      {/* Numbers Section - Mobile & Tablet */}
      <div className="absolute -bottom-12 left-0 z-10 w-full px-12 sm:px-20 md:hidden">
        <Swiper
          className="bg-white rounded-2xl shadow-lg"
          modules={[Navigation, EffectFade]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          loopPreventsSliding={false}
          effect="fade"
          navigation={{
            prevEl: "swiper-prev",
            nextEl: "swiper-next",
          }}
        >
          {/* Features List */}
          {featuresList.map(({ numbers, text }, index) => (
            <SwiperSlide>
              <FeatureCard key={index} numbers={numbers} text={text} />
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <SlidePrevButton className="left-5 sm:left-6" />
          <SlideNextButton className="right-5 sm:right-6" />
        </Swiper>
      </div>

      {/* Numbers Section - Desktop */}
      <div className="hidden absolute -bottom-10 left-0 z-10 px-36 w-full md:block">
        <div className="flex rounded-2xl overflow-hidden border-x-8 border-y-4 border-white bg-white shadow-lg ">
          {/* Features List */}
          {featuresList.map(({ numbers, text }, index) => (
            <div className="w-full">
              <FeatureCard key={index} numbers={numbers} text={text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
