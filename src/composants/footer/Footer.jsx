import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="md:px-16 px-14">
        <div className="flex md:flex-row justify-center items-center gap-3 md:pb-7 pb-5">
          <div className=" flex justify-start items-start space-x-3">
            <a href="#">Accueil</a>
            <a href="#">A propos</a>
            <a href="#">Service</a>
            <a href="#">Projets</a>
          </div>
          <div className="">
            <a href="#">
              <img src="../../public/Icone.png" alt="" className="h-14" />
            </a>
          </div>
          <div className="flex justify-end items-end space-x-3">
            <a href="#">Contact</a>
            <a href="#">Politique de confidentialité</a>
          </div>
        </div>
        <hr />
        <div className="flex justify-center items-center gap-3 md:py-7 py-5">
          <FaInstagramSquare className="cursor-pointer text-lg md:text-xl text-red-600 " />
          <BsTwitterX className="cursor-pointer text-lg md:text-xl " />
          <FaLinkedinIn className="cursor-pointer text-lg md:text-xl text-blue-500 " />
          <FaFacebookF className="cursor-pointer text-lg md:text-xl text-blue-600 " />
        </div>
        <p className=" text-xs md:text-sm text-center text-slate-700 md:pb-7 pb-5">
          © {new Date().getFullYear()}. tous droits réservés par Bestech Consult
        </p>
      </div>
    </>
  );
}

export default Footer;
