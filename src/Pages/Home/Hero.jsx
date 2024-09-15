import heroImg from "../../assets/Image.png";

export default function Hero() {
  return (
    <section
      className="bg-black  px-4 
    py-16 md:px-12 lg:px-24 text-white flex flex-col-reverse md:flex-row gap-14 md:gap-20 justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center md:items-start md:justify-start gap-3">
        <h1 className="  text-4xl lg:text-5xl font-bold md:text-start text-center ">
          Empowering <br /> <span>Akwanga Through</span> Technology
        </h1>
        <p className=" md:text-start text-center ">
          Innovative Solutions For a Digital Future.
        </p>
        <button className="bg-blue py-2 px-6 rounded-[4px] text-center text-nowrap text-white font-medium my-2">
          Join Now
        </button>
      </div>



      
      <div>
        <img src={heroImg} alt={heroImg} className="w-full" />
      </div>
    </section>
  );
}
