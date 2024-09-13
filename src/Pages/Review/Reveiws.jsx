import ReviewSwiper from "./ReviewSwiper";

export default function Reviews() {
  return (
    <section
      id="testimonials"
      className="py-12  flex flex-col items-center  overflow-hidden"
    >
      <div className=" text-center">
        <h3 className=" text-4xl font-bold capitalize">
          What people say about us
        </h3>
        <span className=" text-gray">
          From Clients or Partners, and Trainees
        </span>
      </div>
      <div className="">
        <ReviewSwiper />
      </div>
    </section>
  );
}
