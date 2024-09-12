import AboutUS from "../About/AboutUs";
import Reviews from "../Review/Reveiws";
import OurServices from "../Services/Services";
import Hero from "./Hero";
import OurProgram from "./OurProgram";
import Subscribe from "./Subscribe";

const Landing = () => {
  return (
    <div>
      <Hero />
      <AboutUS id={"about"}/>
      <OurProgram />
      <OurServices />
      <Subscribe />
      <Reviews />
    </div>
  );
};

export default Landing;
