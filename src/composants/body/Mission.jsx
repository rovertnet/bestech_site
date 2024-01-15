import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Mission() {
  return (
    <>
      <div className=" md:px-14 p-4 max-w-s mx-auto space-y-12 md:my-11 my-14">
        <div className=" flex flex-col  md:flex-row justify-between items-center gap-16">
          <div className=" md:w-1/2 flex gap-10">
            <div className="">
              <img
                src="../../public/3.png"
                alt="ùission"
                className=" rounded-tl-md rounded-bl-md"
              />
            </div>
            <div className="">
              <img
                src="../../public/4.png"
                alt="ùission"
                className=" rounded-tl-md rounded-tr-md rounded-br-md rounded-bl-md mt-20"
              />
            </div>
            <div className="">
              <img
                src="../../public/5.png"
                alt="ùission"
                className="rounded-tr-md rounded-br-md"
              />
            </div>
          </div>
          <div className=" md:w-2/5">
            <h2 className=" md:text-4xl text-end md:text-start text-3xl font-extrabold md:mb-9 mb-7 leading-normal text-blue-800">
              Notre mission
            </h2>
            <p className=" text-slate-500 text-xl mb-3 text-justify">
              Avec une équipe de professionnels passionnés et talentueux, nous
              sommes dévoués à vous offrir une expérience exceptionnelle,
              rehaussant votre beauté naturelle et vous laissant rayonner à
              chaque occasion spéciale.
            </p>
            <p className=" text-slate-500 text-xl mb-3 text-justify">
              Notre site vitrine présente nos services sur mesure, notre
              portefeuille de créations époustouflantes, nos tarifs compétitifs,
              et nos coordonnées pour planifier votre prochaine consultation.
            </p>

            <span className="text-slate-500 text-xl md:pb-5 pb-5">
              Suivez-nous sur :{" "}
            </span>

            <div className=" flex justify-start items-center gap-4 md:mt-7 mt-5">
              <FaInstagramSquare className="cursor-pointer text-3xl md:text-3xl text-red-600 " />
              <BsTwitterX className="cursor-pointer text-3xl md:text-3xl " />
              <FaLinkedinIn className="cursor-pointer text-3xl md:text-3xl text-blue-500 " />
              <FaFacebookF className="cursor-pointer text-3xl md:text-3xl text-blue-600 " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission;
