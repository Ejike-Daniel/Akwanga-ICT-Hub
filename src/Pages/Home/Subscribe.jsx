import image from "../../../public/assets/Image2.png";
import { MdEmail } from "react-icons/md";

export default function Subscribe() {
  return (
    <section
      className="my-12 px-4 bg-blue mx-2 lg:mx-20 md:px-6 rounded-[16px]
    py-14 lg:px-16 text-white flex flex-col-reverse md:flex-row gap-14 lg:gap-20 justify-between items-center"
    >
      <div className="flex flex-col justify-center items-center md:items-start md:justify-start gap-3">
        <div className="text-center md:text-start">
          <h2 className=" text-4xl md:text-5xl font-bold">
            <span>Feel The Push?</span>
            <br />
            <span>Join Us For Free</span>
          </h2>
          <p className="font-light py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing .
          </p>
        </div>
        <form className="flex flex-col md:flex-row justify-center items-center gap-6 relative py-6">
          <MdEmail className="absolute left-2 top-[2.1rem]  text-2xl text-gray" />
          <input
            type="email"
            placeholder="Email Address"
            className="py-2 px-10 rounded-[4px] outline-none text-black"
            required
          />
          <button className="bg-black py-2 px-6 rounded-[4px] text-center text-nowrap text-white font-medium">
            Sign Up
          </button>
        </form>
      </div>
      <div>
        <img src={image} alt={image} className="w-full" />
      </div>
    </section>
  );
}
