import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function Nav({ hideNav }) {
  const [activeHash, setActiveHash] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveHash(location.hash);
  }, [location]);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Services",
      path: "#services",
    },
    {
      name: "Testimonials",
      path: "#testimonials",
    },
    {
      name: "Programs",
      path: "programs",
    },
  ];

  return (
    <nav
      className={`${
        hideNav
          ? "max-h-0 opacity-0"
          : "h-[400px] md:h-0 opacity-100 py-9 mt-8 md:mt-0"
      } transition-all duration-500 ease-in-out overflow-hidden absolute top-16 left-0 w-full bg-white  z-20 md:static md:opacity-100 flex md:justify-between md:items-center md:flex-row flex-col`}
    >
      <ul className="text-lightBlue flex flex-col md:flex-row justify-center items-center font-medium gap-6 lg:gap-10 list-none z-20 w-full">
        {navLinks.map(({ name, path }, i) => (
          <li key={i}>
            {path.startsWith("#") ? (
              <HashLink
                smooth
                to={path}
                className={`${
                  activeHash === path
                    ? "text-activeBlue font-semibold"
                    : "hover:text-activeBlue"
                }`}
              >
                {name}
              </HashLink>
            ) : (
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-activeBlue font-semibold"
                    : "hover:text-activeBlue"
                }
              >
                {name}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
      <button className="bg-blue hover:bg-activeBlue mx-auto my-auto md:m-0 hover:font-semibold py-2 px-6 rounded-[4px] text-center text-nowrap text-white font-medium">
        Join Now
      </button>
    </nav>
  );
}
