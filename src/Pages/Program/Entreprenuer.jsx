import { Link } from "react-router-dom";
import { entreprenuerData } from "../../Components/program";
import arrow2 from "../../assets/arrow2.png";
import Frame from "../../assets/Frame.png";

export default function EntreprenuerCourses() {
  return (
    <section className=" px-4 lg:px-20 py-12 flex-col items-center justify-center">
      <div className=" py-6 md:py-12 text-center">
        <p>Course we offer</p>
        <p className=" font-bold text-3xl ">School Of Entrepreneurship</p>
      </div>

      <section className="flex justify-evenly items-center gap-3">
        {entreprenuerData.map(({ img, vector, stack, modules }, i) => (
          <div key={i} className="flex flex-col">
            <div className="relative">
              <img src={img} alt="course image" />
              <img
                src={vector}
                alt="course vector"
                className="w-[15%] absolute -bottom-4 z-10 left-[0.6rem]"
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg py-3 px-4 mt-4 h-64">
              <h5 className="font-semibold text-xl  text-nowrap">{stack}</h5>
              <p className="text-gray">Modules</p>
              <ul className="list-disc text-gray md:text-lg text-[16px] px-6 text-wrap">
                {modules.map((module, index) => (
                  <li key={index} className=" ">
                    {module}
                  </li>
                ))}
              </ul>
              <Link
                to={"/signup"}
                className="flex items-center justify-start gap-2 text-blue font-semibold my-4"
              >
                <span>Apply Here</span>
                <img src={arrow2} alt="apply arrow" />
              </Link>
            </div>
          </div>
        ))}
        <img src={Frame} alt="frame" className="w-[50%] hidden md:block" />
      </section>
    </section>
  );
}
