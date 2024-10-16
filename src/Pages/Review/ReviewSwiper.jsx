import data from "../../Components/Review";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      className="hidden lg:flex absolute left-[-25px] top-[50%] transform -translate-y-1/2 bg-lightBlue p-2 rounded-full cursor-pointer"
      onClick={onClick}
    >
      <FaChevronLeft className="text-white" />
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      className=" hidden lg:flex absolute right-[-25px] top-[50%] transform -translate-y-1/2 bg-lightBlue p-2 rounded-full cursor-pointer"
      onClick={onClick}
    >
      <FaChevronRight className="text-white" />
    </div>
  );
};

export default function ReviewSwiper() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider, setSlider] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full px-4 py-8 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto">
        <Slider ref={(slider) => setSlider(slider)} {...settings}>
          {data.map((item) => (
            <div key={item.id} className="p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                <div className="flex justify-center mb-4">
                  {Array.from({ length: 5 }, (_, j) => (
                    <FaStar
                      key={j}
                      className={`text-2xl ${
                        j < item.rate ? "text-blue" : "text-gray"
                      }`}
                    />
                  ))}
                </div>
                <p className=" text-[9.5px] font-semibold md:text-sm text-gray-700 mb-4 text-wrap">
                  {item.comment}
                </p>
                <div className="flex flex-col items-center">
                  <img
                    src={item.profileImg}
                    alt={`Profile of ${item.name}`}
                    className="rounded-full w-[50px] h-[50px] object-cover mb-2"
                  />

                  <p className="text-base font-semibold text-gray-900">
                    {item.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Dots */}
        <div className="flex justify-center items-center gap-3 p-6">
          {data.map((item, index) => (
            <button
              key={item.id}
              className={`rounded-full ${
                currentSlide === index
                  ? "bg-lightBlue w-3 h-3"
                  : "bg-white w-2 h-2"
              }`}
              onClick={() => slider.slickGoTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
