import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="md:px-16 lg:px-16 sm:px-16 px-14 max-w-screen-2xl mx-auto">
      <div className="fixed top-0 right-0 left-0 md:px-14 lg:px-14 sm:px-14 p-2 mx-5 md:mx-5 md:mt-5 mt-4 shadow-lg bg-white rounded-tr-md rounded-tl-md opacity-90">
          <div className="text-lg  container mx-auto flex justify-between items-center gap-5">
            {/* Logo */}
            <a href="#">
              <img src="../../public/logo.jpg" alt="" className=" h-16" />
            </a>
            {/* Onglets */}
            <ul className="md:flex space-x-5 hidden justify-start items-start">
              <Link
                className=" block text-xl text-blue-800 hover:text-slate-600 font-semibold cursor-pointer "
                onactiveclass="active"
                spy={true}
                smooth={true}
                offset={-100}
                as={Link}
                to="/"
              >
                Accueil
              </Link>
              <Link
                className=" block text-xl text-blue-800 hover:text-slate-600  font-semibold cursor-pointer "
                as={Link}
                to="/about"
                onactiveclass="active"
                spy={true}
                smooth={true}
                offset={-100}
              >
                A propos
              </Link>
              <Link
                className=" block text-xl text-blue-800 hover:text-slate-600  font-semibold cursor-pointer "
                onactiveclass="active"
                spy={true}
                smooth={true}
                offset={-100}
              >
                Services
              </Link>
              <Link
                className=" block text-xl text-blue-800 hover:text-slate-600  font-semibold cursor-pointer "
                onactiveclass="active"
                spy={true}
                smooth={true}
                offset={-100}
                as={Link}
                to="/project"
              >
                Projets
              </Link>
              <Link
                className=" block text-xl text-blue-800 hover:text-slate-600 font-semibold cursor-pointer "
                onactiveclass="active"
                spy={true}
                smooth={true}
                offset={-100}
              >
                Contact
              </Link>
            </ul>
            {/* button */}
            <div className="space-x-12 hidden md:flex items-center">
              <button
                type="button"
                className=" border border-blue-800 hover:bg-blue-900 hover:text-white  px-8 py-2  rounded-md text-blue-800"
              >
                Devis
              </button>
            </div>
            <div className="md:hidden space-x-2">
              <button
                onClick={toggleMenu}
                className=" text-white focus:outline-none focus:text-[#feff5b]"
              >
                {showMenu ? (
                  <HiOutlineXMark className=" h-8 w-8 text-blue-300 dark:text-slate-900 transition-all duration-300" />
                ) : (
                  <div className="flex space-x-2">
                    <BiMenuAltRight className=" h-10 w-10 transition-all duration-300 text-blue-300 dark:text-slate-900" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="left-11 right-11">
        <div
          className={` space-y-4 mt-20 w-[400] rounded-br-md rounded-bl-md justify-center px-6 py-3 pb-5 mx-5 bg-white ${
            showMenu
              ? "block justify-center fixed top-0 right-0 left-0"
              : "hidden "
          }`}
        >
          <div className="text-center">
            <Link
              className=" block py-3 text-xl hover:bg-blue-200 hover:rounded-md text-blue-800 hover:text-slate-600 font-semibold cursor-pointer "
              onactiveclass="active"
              spy={true}
              smooth={true}
              offset={-100}
              as={Link}
              to="/"
            >
              Accueil
            </Link>
            <Link
              className=" block py-3 text-xl hover:bg-blue-200 hover:rounded-md text-blue-800 hover:text-slate-600  font-semibold cursor-pointer "
              onactiveclass="active"
              spy={true}
              smooth={true}
              offset={-100}
              as={Link}
              to="/about"
            >
              A propos
            </Link>
            <Link
              className=" block py-3 text-xl hover:bg-blue-200 hover:rounded-md text-blue-800 hover:text-slate-600  font-semibold cursor-pointer "
              onactiveclass="active"
              spy={true}
              smooth={true}
              offset={-100}
            >
              Services
            </Link>
            <Link
              className=" block py-3 text-xl hover:bg-blue-200 hover:rounded-md text-blue-800 hover:text-slate-600  font-semibold cursor-pointer "
              onactiveclass="active"
              spy={true}
              smooth={true}
              offset={-100}
            >
              Projets
            </Link>
            <Link
              className=" block py-3 text-xl hover:bg-blue-200 hover:rounded-md text-blue-800 hover:text-slate-600 font-semibold cursor-pointer "
              onactiveclass="active"
              spy={true}
              smooth={true}
              offset={-100}
            >
              Contact
            </Link>
            <button
              type="button"
              className=" border border-blue-800 text-blue-900 hover:bg-blue-900 hover:text-white px-28 py-2 text-xl font-semibold mt-4 rounded-md"
            >
              Devis
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
