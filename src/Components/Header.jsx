import logo1 from "../assets/logo1.png";
import { RiMenu4Fill, RiCloseLine } from "react-icons/ri";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Header() {
  const [isViewMenu, setIsViewMenu] = useState(false);

  const toggleMenu = () => {
    setIsViewMenu(!isViewMenu);
  };
  return (
    <header className="w-full px-8 lg:px-20  flex items-center justify-between py-4 md:py-4 relative ">
      <Link to={"/"}>
        <img src={logo1} alt="logo" className=" cursor-pointer" />
      </Link>
      <Nav hideNav={isViewMenu} />
      <button
        className="text-3xl md:text-4xl text-activeBlue md:hidden"
        onClick={toggleMenu}
      >
        {isViewMenu ? <RiMenu4Fill /> : <RiCloseLine />}
      </button>
    </header>
  );
}
