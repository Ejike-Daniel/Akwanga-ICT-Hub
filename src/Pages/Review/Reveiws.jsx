// import ReviewSwiper from "./ReviewSwiper";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function Reviews() {
  return (
    <section
      id="testimonials"
      className="py-12 px-4 flex flex-col items-center lg:px-20"
    >
      <div className=" text-center">
        <h3 className=" text-4xl font-bold capitalize">
          What people say about us
        </h3>
        <span className=" text-gray">
          From Clients or Partners, and Trainees
        </span>
      </div>
      <div className="f">
        {/* <FaArrowLeft className="text-black text-2xl cursor-pointer" /> */}
        {/* <ReviewSwiper /> */}
        {/* <FaArrowRight className="text-black text-2xl cursor-pointer" /> */}
      </div>
    </section>
  );
}
