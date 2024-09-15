import image1 from "../../assets/image1.png";
import image2 from "../../assets/laptop-guy.png";

// eslint-disable-next-line react/prop-types
export default function AboutUS({ id }) {
  return (
    <section
      id={id}
      className="w-full lg:px-24 px-8 flex flex-col items-center gap-10 py-12"
    >
      <div className="text-center">
        <h2 className=" font-extrabold text-4xl">About Us</h2>
        <p className="text-gray text-sm">Here is a bit about us</p>
      </div>
      <section>
        <div className=" flex flex-col  md:flex-row justify-between items-center gap-6 md:gap-16 mt-9">
          <img src={image1} alt="image" className="md:w-[50%] " />

          <div className=" py-3 text-center md:text-justify">
            <h3 className="text-black text-3xl font-bold lg:pb-5 pb-3">
              ICT Hub Building
            </h3>
            <p className="text-gray text-lg font-medium">
              Welcome to the ICT Hub of Akwanga! Our mission is to bridge the
              digital divide and foster technological innovation within our
              community. Established with the vision of empowering individuals
              and businesses through technology, we provide comprehensive ICT
              solutions, training programs, and support services.
            </p>
          </div>
        </div>
        <div className=" flex flex-col-reverse  md:flex-row justify-between items-center gap-6 md:gap-16 mt-9">
          <div className="py-6 text-center md:text-justify">
            <h3 className="text-black text-3xl font-bold lg:pb-5 pb-3 ">
              Traning Session
            </h3>
            <p className="text-gray text-lg font-medium ">
              At the ICT Hub, we believe in the transformative power of
              technology. Our values are rooted in commitment, innovation, and
              community development. We strive to equip our members with the
              necessary skills and knowledge to thrive in the digital age.
            </p>
          </div>
          <img src={image2} alt="image" className="md:w-[50%] " />
        </div>
      </section>
    </section>
  );
}
