import YouTube from "react-youtube";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import videoList from "./list/videoList";
import 'swiper/css';
import 'swiper/css/navigation';
import './styles/style.css';
import { opts, swiperBreakpoints } from "./constants/constants";


const YoutubeList = () => {

  return (
    <div className="defaultpadding_youtube">

      {/* List of Youtube Videos on swiper */}
      <div className="relative">
        <Swiper
          breakpoints={swiperBreakpoints}
          modules={[Navigation]}
          spaceBetween={1}
          navigation={true}
        >
          {videoList.map((videoId, index) => (
            <SwiperSlide>
              <YouTube
                key={index}
                videoId={videoId}
                opts={opts}
                className="rounded-3xl overflow-hidden w-full h-64 md:h-80 md:w-72"
              />
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
  );
};

export default YoutubeList;
