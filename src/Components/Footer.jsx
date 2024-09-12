import { Link } from "react-router-dom";
import logo2 from "../../public/assets/logo2.png";
import { FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
import { LuGitBranch } from "react-icons/lu";
export default function Footer() {
  const navLinks = [
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
    <footer className="bg-blue py-12  px-8 lg:px-20">
      <section className="flex flex-col-reverse md:flex-col">
        <div className=" text-center text-nowrap text-white">
          <h6 className=" font-semibold text-xl py-2">Quick Links</h6>
          <ul className="flex justify-center items-center gap-3 font-thin ">
            {navLinks.map(({ name, path }, i) => (
              <li key={i}>
                <Link reloadDocument to={path}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <section className="flex flex-col gap-6 md:flex-row justify-between items-center md:pt-12 my-6  px-1">
          <Link to={"/"}>
            <img src={logo2} alt="" className=" cursor-pointer w-[75%]" />
          </Link>
          <div>
            <ul className=" font-thin text-white flex justify-center items-center gap-6  ">
              <Link to={"#"} className="cursor-pointer ">
                Terms
              </Link>
              <Link to={"#"} className="cursor-pointer ">
                Privacy
              </Link>
              <Link to={"#"} className="cursor-pointer ">
                Cookies
              </Link>
            </ul>
          </div>
          <div>
            <ul
              className="text-2xl   text-white
              justify-center items-center gap-6 flex "
            >
              <Link
                to={"#"}
                className="rounded-full border-lightBlue border p-2 cursor-pointer"
              >
                <FaLinkedin />
              </Link>
              <Link
                to={"#"}
                className="rounded-full border-lightBlue border p-2 cursor-pointer"
              >
                <FaSquareFacebook />
              </Link>
              <Link
                to={"#"}
                className="rounded-full border-lightBlue border p-2 cursor-pointer"
              >
                <LuGitBranch />
              </Link>
            </ul>
          </div>
        </section>
      </section>
    </footer>
  );
}
