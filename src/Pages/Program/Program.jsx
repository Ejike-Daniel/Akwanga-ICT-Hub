import CreativeCourses from "./Creative";
import EconomyCourses from "./Economy";
import EntreprenuerCourses from "./Entreprenuer";
import InnovativeCourses from "./Innovative";
import Img from "../../assets/image3.png";
import Arow from "../../assets/white-arrow.png";
import { Link } from "react-router-dom";
import Subscribe from "../Home/Subscribe";

export default function Program() {
  const scrollToPrograms = () => {
    window.scrollTo({
      top: 550,
      behavior: "smooth",
    });
  };
  return (
    <section>
      <section
        className="bg-black  px-4 
    py-16 md:px-12 lg:px-24 text-white flex flex-col-reverse md:flex-row gap-14 md:gap-20 justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center md:items-start md:justify-start gap-3">
          <h1 className="  text-4xl lg:text-5xl font-bold md:text-start text-center ">
            Empowering <br /> <span>Akwanga Through</span> Technology
          </h1>
          <p className=" md:text-start text-center">
            Innovative Solutions for a Digital Future Explore our exclusive
            programs.
          </p>
          <Link
            className="  flex py-2 items-center justify-center gap-2 hover:animate-none transition duration-300 animate-bounce "
            onClick={scrollToPrograms}
          >
            Our Programs
            <img className=" h-4 w-4 " src={Arow} />
          </Link>
        </div>
        <div>
          <img src={Img} alt={Img} className="w-full" />
        </div>
      </section>

      <InnovativeCourses />
      <EntreprenuerCourses />
      <CreativeCourses />
      <EconomyCourses />
      <Subscribe />
    </section>
  );
}
