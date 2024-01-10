import { Link } from "react-scroll";

function Navbar() {
  return (
    <>
      <div className="md:px-16 lg:px-14 sm:px-16 p-5 max-w-screen-2xl mx-auto">
        <div className="fixed top-0 right-0 left-0 md:mx-10 mx-10 shadow-md bg-white dark:bg-slate-900">
          <div className="text-lg  container mx-auto flex justify-between items-center">
            {/* Logo */}
            <a href="#">
              <img src="" alt="" />
            </a>
            {/* Onglets */}
            <ul className="md:flex space-x-10 hidden">
              <Link>Accueil</Link>
              <Link>A propos</Link>
              <Link>Services</Link>
              <Link>Projets</Link>
              <Link>Contact</Link>
            </ul>
            {/* button */}
            <div className="space-x-12 hidden md:flex items-center">
              <button
                type="button"
                className=" bg-slate-950 px-3 py-2 hover:bg-slate-600  rounded-full text-white text-lg dark:hover:text-slate-300 dark:hover:p-2"
              >
                Devis
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
