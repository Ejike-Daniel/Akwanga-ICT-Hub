import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";
import { RiMenu4Fill, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavLinks = ({ activeHash, closeMenu }) => {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row gap-8  lg:gap-16 text-lightBlue font-inter">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-activeBlue font-bold"
            : "hover:text-activeBlue transition-all duration-300"
        }
        onClick={closeMenu}
      >
        Home
      </NavLink>
      <HashLink
        to="/#about"
        className={`${
          activeHash === "#about" ? "text-activeBlue font-bold" : ""
        } hover:text-activeBlue transition-all duration-300`}
        onClick={closeMenu}
      >
        About
      </HashLink>
      <HashLink
        to="/#services"
        className={`${
          activeHash === "#services" ? "text-activeBlue font-bold" : ""
        } hover:text-activeBlue transition-all duration-300`}
        onClick={closeMenu}
      >
        Services
      </HashLink>
      <a
        href="/#testimonials"
        className={`${
          activeHash === "#testimonials" ? "text-activeBlue font-bold" : ""
        } hover:text-activeBlue transition-all duration-300`}
        onClick={closeMenu}
      >
        Testimonials
      </a>
      <NavLink
        to="programs"
        className={({ isActive }) =>
          isActive
            ? "text-activeBlue font-bold"
            : "hover:text-activeBlue transition-all duration-300"
        }
        onClick={closeMenu}
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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setActiveHash(location.hash);
  }, [location]);

  return (
    <>
      <nav className=" flex justify-center items-center relative">
        <div className="hidden lg:flex justify-center w-full gap-32 items-center">
          <NavLinks activeHash={activeHash} closeMenu={closeMenu} />
          <Link to={"signup"}>
            <button className="bg-blue hover:bg-activeBlue py-2 px-6 rounded-[4px] text-white font-medium transition-all duration-300 whitespace-nowrap">
              Join Now
            </button>
          </Link>
        </div>
        <div className="text-3xl lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <RiCloseLine /> : <RiMenu4Fill />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="flex flex-col items-center absolute top-[10rem] right-0 justify-center gap-8 w-[75%] transition-all duration-300 lg:hidden bg-white py-4">
          <NavLinks activeHash={activeHash} closeMenu={closeMenu} />
          <Link to={"signup"}>
            <button className="bg-blue hover:bg-activeBlue py-2 px-6 rounded-[4px] text-white font-medium transition-all duration-300">
              Join Now
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
