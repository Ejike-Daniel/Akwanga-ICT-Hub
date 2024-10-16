import logo1 from "../assets/main-logo.png";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full px-8 flex-1 lg:px-20 flex items-center bg-white shadow-lg top-0 gap-6 justify-between  md:py-4 sticky z-20">
      <Link to="/" className="flex  flex-1 items-center flex-shrink-0">
        <img
          src={logo1}
          alt="logo"
          className="cursor-pointer w-[150px] h-auto max-w-full"
        />
      </Link>
      <Nav className="flex-1" />
    </header>
  );
}
