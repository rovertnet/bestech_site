import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="md:px-16 px-14">
        <div className=" flex flex-1 justify-center items-center md:pb-5 pb-5">
          <a href="#">
            <img src="../../public/Icone.png" alt="" className="h-16" />
          </a>
        </div>
        <div className="flex justify-center items-center gap-5">
          <a
            href="#"
            className=" text-blue-800 text-xl md:text-2xl hover:text-slate-800 font-medium"
          >
            Accueil
          </a>
          <a
            href="#"
            className=" text-blue-800 text-xl md:text-2xl hover:text-slate-800 font-medium"
          >
            Nous
          </a>
          <a
            href="#"
            className=" text-blue-800 text-xl md:text-2xl hover:text-slate-800 font-medium"
          >
            Service
          </a>
          <a
            href="#"
            className=" text-blue-800 text-xl md:text-2xl hover:text-slate-800 font-medium"
          >
            Projets
          </a>
        </div>
        <div className="flex justify-center items-center gap-3 md:py-7 py-5">
          <FaInstagramSquare className="cursor-pointer text-xl md:text-2xl text-red-600 " />
          <BsTwitterX className="cursor-pointer text-xl md:text-2xl " />
          <FaLinkedinIn className="cursor-pointer text-xl md:text-2xl text-blue-500 " />
          <FaFacebookF className="cursor-pointer text-xl md:text-2xl text-blue-600 " />
        </div>
        <hr />
      </div>
      <div className=" bg-slate-800">
        <p className=" text-xs md:text-sm text-center text-slate-300 md:py-7 py-5">
          © {new Date().getFullYear()}. tous droits réservés par Bestech Consult
        </p>
      </div>
    </>
  );
}

export default Footer;
