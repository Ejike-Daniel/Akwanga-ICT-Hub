import { Link } from "react-router-dom";
import frontend from "../../assets/frontend.png";
import html from "../../assets/html-vec.png";
import entrepreneurVector from "../../assets/enterprenuer-vec.png";
import dataScienceVector from "../../assets/science-vec.png";
import arrow2 from "../../assets/arrow2.png";
import arrow3 from "../../assets/arrow3.png";
import entreprenuer from "../../assets/entreprenuer.png";
import dataScience from "../../assets/data-sci.png";

const data = [
  {
    id: "1",
    img: frontend,
    vector: html,
    stack: "Front-end web development",
    modules: [
      "HTML and CSS basics",
      "Intermediate HTML, CSS and responsive design",
      "JavaScript fundamentals",
      "Final front-end project",
    ],
  },
  {
    id: "2",
    img: dataScience,
    vector: dataScienceVector,
    stack: "Data Science",
    modules: [
      "Introduction to data science and Python prog.",
      "Data manipulation and numerical computing",
      "Data visualization, audio, and image processing",
      "Machine learning and project",
    ],
  },
  {
    id: "3",
    img: entreprenuer,
    vector: entrepreneurVector,
    stack: "Entrepreneurship",
    modules: [
      "Business fundamentals and tools",
      "Business finance and formation",
      "Brand identity and digital marketing",
      "Integrated business project and advanced topics",
    ],
  },
];

const OurProgram = () => {
  return (
    <section className="px-4 lg:px-20 md:py-12">
      <div className="text-center py-6 md:py-12">
        <h3 className="pb-6 text-4xl font-bold capitalize">Our Programs</h3>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-start ">
        {data.map(({ id, img, vector, stack, modules }) => (
          <div key={id}>
            <div className="relative">
              <img src={img} alt={`${stack} program image`} />
              <img
                src={vector}
                alt={`${stack} vector`}
                className="w-[15%] absolute -bottom-4 z-10 left-[0.6rem]"
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg py-3 px-4  mt-4 h-52">
              <h5 className="font-semibold text-xl  text-nowrap">{stack}</h5>
              <p className="text-gray">Modules</p>
              <ul className="list-disc text-gray text-[13.5px] px-6 text-nowrap">
                {modules.map((module, index) => (
                  <li key={index} className=" ">
                    {module}
                  </li>
                ))}
              </ul>
              <Link
                to={"signup"}
                className="flex items-center justify-start gap-2 text-blue font-semibold my-4"
              >
                <span>Apply Here</span>
                <img src={arrow2} alt="apply arrow" />
              </Link>
            </div>
          </div>
        ))}
      </section>
      <Link
        to={"programs"}
        className="flex items-center justify-end gap-2 pt-6 text-blue font-semibold text-[16px] font-inter"
      >
        <span>View More</span>
        <img src={arrow3} alt="arrow icon" />
      </Link>
    </section>
  );
};

export default OurProgram;
