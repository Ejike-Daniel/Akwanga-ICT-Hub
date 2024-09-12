import logo1 from "../assets/logo1.png";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full px-8 lg:px-20 flex bg-white/90 backdrop-blur-md shadow-lg items-center top-0 gap-6 justify-between py-4 md:py-4 flex-wrap sticky z-20">
      <Link to="/">
        <img src={logo1} alt="logo" className="cursor-pointer" />
      </Link>
      <Nav />
    </header>
  );
}
