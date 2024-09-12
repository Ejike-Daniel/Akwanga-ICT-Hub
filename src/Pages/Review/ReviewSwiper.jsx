import data from "../../Components/Review";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Virtual } from "swiper/modules";
import "swiper/css/virtual";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { A11y, Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { useState } from "react";

export default function ReviewSwiper() {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const [slider, setSlider] = useState(null);
  const [revPerPage, setRevPerPage] = useState(1);

  return (
    <section>
      <Swiper
        className="w-60 mySwiper"
        spaceBetween={20}
        slidesPerView={revPerPage}
        modules={[Navigation, Pagination, A11y, Virtual, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map(({ id, rate, comment, profileImg, name }) => (
          <SwiperSlide key={id}>
            <div className="">
              <div className="flex">
                {Array.from({ length: 5 }, (_, j) => (
                  <FaStar
                    key={j}
                    className={
                      j < rate
                        ? "text-blue text-3xl outline-none flex"
                        : "text-smokeyGrey text-3xl outline-none"
                    }
                  />
                ))}
              </div>
              <p>{comment}</p>
            </div>
            <div className="flex flex-col h-[6rem] w-[6rem] justify-center items-center py-6">
              <img
                src={profileImg}
                alt={`Profile of ${name}`}
                className="rounded-full w-12"
              />
              <p className="text-sm">{name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

// const settings = {
//   dots: false, // Disable default dots
//   speed: 1000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   infinite: true,
//   autoplay: true,
//   autoplaySpeed: 5000,
//   arrows: false,
//   beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
//   responsive: [
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//   ],
// };

//  </Slider>;
