import { useState } from "react";
import { Link } from "react-scroll";
import { BiMenuAltRight } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="md:px-14 lg:px-14 sm:px-14 p-8 max-w-screen-2xl mx-auto">
        <div className="fixed top-0 right-0 left-0 mx-5 md:mx-7 md:mt-5 mt-4 shadow-xl bg-white rounded-tr-md rounded-tl-md">
          <div className="text-lg  container mx-auto flex justify-between items-center">
            {/* Logo */}
            <a href="#">
              <img src="../../public/logo.jpg" alt="" className=" h-12" />
            </a>
            {/* Onglets */}
            <ul className="md:flex space-x-10 hidden">
              <Link
                className=" block text-xl hover:bg-blue-200 text-blue-800 hover:text-slate-600 font-semibold cursor-pointer "
                onactiveclass="active"
                spy={true}
                smooth={true}
                offset={-100}
              >
                Accueil
              </Link>
              <Link
                className=" block text-xl hover:bg-blue-200 text-blue-800 hover:text-slate-600  font-semibold cursor-pointer "
                onactiveclass="active"
                spy={true}
                smooth={true}
                offset={-100}
              >
                A propos
              </Link>
              <Link
                className=" block text-xl hover:bg-blue-200 text-blue-800 hover:text-slate-600  font-semibold cursor-pointer "
                onactiveclass="active"
                spy={true}
                smooth={true}
                offset={-100}
              >
                Services
              </Link>
              <Link
                className=" block text-xl hover:bg-blue-200 text-blue-800 hover:text-slate-600  font-semibold cursor-pointer "
                onactiveclass="active"
                spy={true}
                smooth={true}
                offset={-100}
              >
                Projets
              </Link>
              <Link
                className=" block text-xl hover:bg-blue-200 text-blue-800 hover:text-slate-600 font-semibold cursor-pointer "
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
                className=" border border-slate-900 px-8 py-1  rounded-md"
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
          className={` space-y-4 mt-16 w-[400] rounded-br-md rounded-bl-md justify-center px-6 py-3 pb-5 mx-5 bg-white ${
            showMenu
              ? "block justify-center fixed top-0 right-0 left-0"
              : "hidden "
          }`}
        >
          <div className="text-center">
            <Link
              className=" block py-3 text-xl hover:bg-blue-200 text-blue-800 hover:text-slate-600 font-semibold cursor-pointer "
              onactiveclass="active"
              spy={true}
              smooth={true}
              offset={-100}
            >
              Accueil
            </Link>
            <Link
              className=" block py-3 text-xl hover:bg-blue-200 text-blue-800 hover:text-slate-600  font-semibold cursor-pointer "
              onactiveclass="active"
              spy={true}
              smooth={true}
              offset={-100}
            >
              A propos
            </Link>
            <Link
              className=" block py-3 text-xl hover:bg-blue-200 text-blue-800 hover:text-slate-600  font-semibold cursor-pointer "
              onactiveclass="active"
              spy={true}
              smooth={true}
              offset={-100}
            >
              Services
            </Link>
            <Link
              className=" block py-3 text-xl hover:bg-blue-200 text-blue-800 hover:text-slate-600  font-semibold cursor-pointer "
              onactiveclass="active"
              spy={true}
              smooth={true}
              offset={-100}
            >
              Projets
            </Link>
            <Link
              className=" block py-3 text-xl hover:bg-blue-200 text-blue-800 hover:text-slate-600 font-semibold cursor-pointer "
              onactiveclass="active"
              spy={true}
              smooth={true}
              offset={-100}
            >
              Contact
            </Link>
            <button
              type="button"
              className=" border border-slate-900 px-24 py-1 mt-4 rounded-md"
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
