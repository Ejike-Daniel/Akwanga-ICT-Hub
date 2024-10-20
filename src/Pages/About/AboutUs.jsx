import image1 from "../../assets/image1.png";
import image2 from "../../assets/laptop-guy.png";

export default function AboutUS() {
  return (
    <section
      id="about"
      className="w-full lg:px-24 px-8 flex flex-col items-center gap-10 py-12"
    >
      <div className="text-center">
        <h2 className=" font-extrabold text-4xl">About Us</h2>
        <p
          className="text-gray text-lg my-2 lg:text-lg
         font-medium"
        >
          At Engr. ABDULAHI A.SULE Creative and Innovation Hub COE Akwanga, we
          offer tech and creative short courses designed to foster innovation
          through mentorship, hands-on pratice, and project-based learning. Our
          approach equips students with the skills and confidence needed for
          success in STEAMA fields.
        </p>
      </div>
      <section>
        <div className=" flex flex-col  lg:flex-row justify-between items-center gap-6 md:gap-16 lg:mt-9">
          <img src={image1} alt="image" className="lg:w-[50%] " />

          <div className=" py-2 text-center lg:text-justify">
            <h3 className="text-black text-3xl text-nowrap font-bold lg:pb-5 pb-3">
              Innovation Hub Building
            </h3>
            <p className="text-gray lg:text-lg font-medium lg:max-w-[470px]">
              Welcome to Engr. ABUDULAHI A.SULE Creative and Innovation Hub
              Akwanga! Our mission is to bridge the digital divide and foster
              technological innovation within our community. Established with
              the vision of empowering individuals and businesses through
              technology, we provide comprehensive creative and innovative
              solutions, training programs, and support services.
            </p>
          </div>
        </div>
        <div className=" flex flex-col-reverse  lg:flex-row justify-between items-center gap-6 md:gap-16 mt-9">
          <div className="py-2 text-center lg:text-justify">
            <h3 className="text-black text-3xl font-bold lg:pb-5 pb-3 ">
              Traning Session
            </h3>
            <p className="text-gray lg:text-lg font-medium lg:max-w-[470px] ">
              At the Engr. ABUDULAHI A.SULE Creative and Innovation Hub, we
              believe in the transformative power of technology. Our values are
              rooted in commitment, innovation, and community development. We
              strive to equip our members with the necessary skills and
              knowledge to thrive in the digital age.
            </p>
          </div>
          <img src={image2} alt="image" className="lg:w-[50%] " />
        </div>
      </section>
    </section>
  );
}
