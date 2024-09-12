import { Link } from "react-router-dom";
import { creativeData } from "../../Components/program";
import arrow2 from "../../assets/arrow2.png";

export default function CreativeCourses() {
  return (
    <section className="px-4 lg:px-20 py-12 flex flex-col items-center justify-center">
      <div className=" py-6 md:py-12 text-center">
        <p>Course we offer</p>
        <p className=" font-bold text-3xl ">School of Creativity</p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-y-12 text-start ">
        {creativeData.map(({ img, vector, stack, modules }, i) => (
          <div key={i}>
            <div className="relative">
              <img src={img} alt="image" />
              <img
                src={vector}
                alt="vector"
                className="w-[15%] absolute -bottom-4 z-10 left-[0.6rem]"
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg py-3 px-4 mt-4 h-52 ">
              <h5 className="font-semibold text-xl  text-nowrap">{stack}</h5>
              <p className="text-gray">Modules</p>
              <ul className="list-disc text-gray text-[13px] px-6 text-wrap ">
                {modules.map((module, index) => (
                  <li key={index} className=" ">
                    {module}
                  </li>
                ))}
              </ul>
              <Link
                to={"#"}
                className="flex items-center justify-start gap-2 text-blue font-semibold my-4"
              >
                <span>Apply Here</span>
                <img src={arrow2} alt="apply arrow" />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
