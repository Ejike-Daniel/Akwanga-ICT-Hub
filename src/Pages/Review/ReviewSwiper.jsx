import data from "../../Components/Review";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ReviewSwiper() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="w-full">
      <div>
        <Slider {...settings}>
          {data.map((i) => (
            <div key={i} className=" h-0">
              <div className="">
                <div className="flex">
                  {Array.from({ length: 5 }, (_, j) => (
                    <FaStar
                      key={j}
                      className={`text-3xl outline-none ${
                        j < i.rate ? "text-blue flex" : "text-smokeyGrey"
                      }`}
                    />
                  ))}
                </div>
                <p>{i.comment}</p>
              </div>

              <div>
                <div className="flex flex-col h-[6rem] w-[6rem] justify-center items-center py-6">
                  <img
                    src={i.profileImg}
                    alt={`Profile of ${i.name}`}
                    className="rounded-full w-12"
                  />
                  <p className="text-sm">{i.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

// <Swiper
//   className="w-full mySwiper"
//   spaceBetween={20}
//   slidesPerView={revPerPage}
//   modules={[Navigation, Pagination, A11y, Virtual, Autoplay]}
//   autoplay={{
//     delay: 5000,
//     disableOnInteraction: false,
//   }}
//   pagination={{ clickable: true }}
//   onSwiper={(swiper) => console.log(swiper)}
//   onSlideChange={() => console.log("slide change")}
// >
//   {data.map(({ id, rate, comment, profileImg, name }) => {
//     console.log(comment, name);
//     return (
//       <SwiperSlide key={id}>
//         <div>
//

//       </SwiperSlide>
//     );
//   })}
// </Swiper>;
