import { MdNavigateBefore } from "react-icons/md";
import { useSwiper } from "swiper/react";

export default function SlidePrevButton({ isBeginning }) {
  const swiper = useSwiper();
  const disabledClass = "opacity-50 cursor-not-allowed";

  return (
    <button
      className={`swiper-prev border-[1px] border-gray-300 rounded-full w-max p-4 absolute top-1/2 bg-white z-10 left-2 -mt-8 ${
        isBeginning && disabledClass
      }`}
      onClick={() => swiper.slidePrev()}
    >
      <MdNavigateBefore size={28} />
    </button>
  );
}
