import { MdNavigateNext } from "react-icons/md";
import { useSwiper } from "swiper/react";

export default function SlideNextButton({ isEnd }) {
  const swiper = useSwiper();
  const disabledClass = "opacity-50 cursor-not-allowed";

  return (
    <button
      className={`swiper-next border-[1px] border-gray-300 rounded-full w-max p-4 absolute top-1/2 bg-white z-10 right-2 -mt-8 ${
        isEnd && disabledClass
      }`}
      onClick={() => swiper.slideNext()}
    >
      <MdNavigateNext size={28} />
    </button>
  );
}
