"use client";

import ReviewCard from "./components/ReviewCard";
import reviewList from "./data/reviewList";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

import "swiper/css";
import "swiper/css/pagination";
import "./styles/style.css";
import { useRef } from "react";



const Testimonial = () => {
  const imgRef = useRef(null);
  const { scrollY } = useScroll({target: imgRef});
  const rotateValue = useTransform(scrollY, [0, 12800], [0, 830]);
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(rotateValue.current);
  })

  return (
    <div className="defaultpadding_testimonial md:flex md:items-center md:h-full">
      {/* Left Reviews */}
      <div className="flex flex-col gap-5 md:h-5/6 md:w-1/2">
        {/* Title */}
        <div>
          <h2 className="text-2xl font-medium sm:text-3xl md:text-4xl">
            What <span className="text-primary">Students</span> Have to Say
            About Chaajao?
          </h2>
        </div>

        {/* Swiper */}
        <div className="flex h-full">
          <Swiper
            modules={[Pagination]}
            pagination={true}
            spaceBetween={1}
            loop={true}
          >
            {reviewList.map(({ img, text, name, date }, index) => (
              <SwiperSlide>
                <ReviewCard
                  key={index}
                  img={img}
                  text={text}
                  name={name}
                  date={date}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Right Rotating Image */}
      <div className="hidden w-full justify-center relative h-5/6 md:flex">
        <motion.img
          ref={imgRef}
          src="./assets/Testimonial/wheel.svg"
          style={{rotate: rotateValue}}
        />
        <img className="absolute inset-0 m-auto" src="./assets/testimonial/logo.svg" alt="" />
      </div>
    </div>
  );
};

export default Testimonial;
