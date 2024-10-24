"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

import Card1 from "./cards/Card1";
import Card2 from "./cards/Card2";
import Card3 from './cards/Card3';
import SlidePrevButton from './swiper/SlidePrevButton';
import SlideNextButton from './swiper/SlideNextButton';
import { useState } from 'react';



const Hero = () => {

  // For Buttons
  const [isBeginning, setIsBeginning] = useState(null);
  const [isEnd, setIsEnd] = useState(null);

  // Changes the state of buttons upon swiper hook boolean changes
  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }


  return (
    <div className="defaultpadding_hero border-2">

        {/* Card Section */}
      <div className='border-2 relative'>
      <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      spaceBetween={8}
      loop={false}
      onSlideChange={handleSlideChange}
      navigation={{
        prevEl: "swiper-prev",
        nextEl: "swiper-next",
      }}
    >
      
      <SwiperSlide><Card3 /></SwiperSlide>
      <SwiperSlide><Card1 /></SwiperSlide>
      <SwiperSlide><Card2 /></SwiperSlide>

      {/* Navigation Buttons */}
      <SlidePrevButton isBeginning={isBeginning} />
      <SlideNextButton isEnd={isEnd}/>

    </Swiper>
      </div>



        {/* Numbers Section */}

    </div>
  )
}

export default Hero