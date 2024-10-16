import training from "../../assets/healthicons_i-training-class.png";
import techSupport from "../../assets/tech-support.png";
import software from "../../assets/hugeicons_software-license.png";

export default function OurServices() {
  const data = [
    {
      img: training,
      name: "Traning",
      description: "Comprehensive courses on ICT skills.",
    },
    {
      img: techSupport,
      name: "Tech Support",
      description: "Reliable for all your technology needs.",
    },
    {
      img: software,
      name: "Software Development",
      description: "Custom software solutions tailored to your requirements.",
    },
  ];
  return (
    <section
      id="services"
      className="px-4 lg:px-20 flex flex-col items-center gap-20 py-12"
    >
      <div className="text-center">
        <h2 className=" font-extrabold text-4xl">Our Services</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-24 ">
        {data.map(({ img, name, description }, i) => (
          <div
            key={i}
            className=" text-center flex flex-col justify-center items-center"
          >
            <img
              src={img}
              alt={img}
              className=" place-items-center bg-[#EFF3FD] rounded-full p-2 my-3"
            />
            <p className=" font-bold text-2xl py-3">{name}</p>
            <p className="text-gray">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
