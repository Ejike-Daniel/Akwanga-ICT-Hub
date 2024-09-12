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
  const [revPerPage] = useState(1);

  return (
    <section className="w-full">
      <Swiper
        className="w-full mySwiper"
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
        {data.map(({ id, rate, comment, profileImg, name }) => {
          console.log(comment, name);
          return (
            <SwiperSlide key={id}>
              <div>
                <div className="">
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, j) => (
                      <FaStar
                        key={j}
                        className={`text-3xl outline-none ${
                          j < rate ? "text-blue flex" : "text-smokeyGrey"
                        }`}
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
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
