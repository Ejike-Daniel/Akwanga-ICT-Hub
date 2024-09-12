import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";
import { RiMenu4Fill, RiCloseLine } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
const NavLinks = ({ activeHash }) => {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row gap-8  lg:gap-16 text-lightBlue font-inter">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-activeBlue font-bold"
            : "hover:text-activeBlue transition-all duration-300"
        }
      >
        Home
      </NavLink>
      <HashLink
        smooth
        to="#about"
        className={`${
          activeHash === "#about" ? "text-activeBlue font-bold" : ""
        } hover:text-activeBlue transition-all duration-300`}
      >
        About
      </HashLink>
      <HashLink
        smooth
        to="#services"
        className={`${
          activeHash === "#services" ? "text-activeBlue font-bold" : ""
        } hover:text-activeBlue transition-all duration-300`}
      >
        Services
      </HashLink>
      <HashLink
        smooth
        to="#testimonials"
        className={`${
          activeHash === "#testimonials" ? "text-activeBlue font-bold" : ""
        } hover:text-activeBlue transition-all duration-300`}
      >
        Testimonials
      </HashLink>
      <NavLink
        to="/programs"
        className={({ isActive }) =>
          isActive
            ? "text-activeBlue font-bold"
            : "hover:text-activeBlue transition-all duration-300"
        }
      >
        Programs
      </NavLink>
    </div>
  );
};

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setActiveHash(location.hash);
  }, [location]);

  return (
    <>
      <nav className=" flex justify-center items-center">
        <div className="hidden lg:flex justify-center w-full gap-32 items-center">
          <NavLinks activeHash={activeHash} />
          <button className="bg-blue hover:bg-activeBlue py-2 px-6 rounded-[4px] text-white font-medium transition-all duration-300">
            Join Now
          </button>
        </div>
        <div className="text-3xl lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <RiCloseLine /> : <RiMenu4Fill />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="flex flex-col items-center justify-center gap-8 basis-full lg:hidden transition-all duration-500 ease-in-out">
          <NavLinks activeHash={activeHash} />
          <button className="bg-blue hover:bg-activeBlue py-2 px-6 rounded-[4px] text-white font-medium transition-all duration-300">
            Join Now
          </button>
        </div>
      )}
    </>
  );
}
