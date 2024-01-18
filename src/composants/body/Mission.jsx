import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

function Mission() {
  return (
    <>
      <div className=" md:px-14 px-8 max-w-s mx-auto space-y-12 md:my-11 my-14">
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 500 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className=" flex flex-col  md:flex-row justify-between items-center gap-14"
        >
          <div className=" md:w-1/2 flex gap-10">
            <div className="">
              <img
                src="../../public/3.png"
                alt="ùission"
                className=" rounded-tl-3xl rounded-bl-3xl"
              />
            </div>
            <div className="">
              <img src="../../public/4.png" alt="ùission" className=" mt-20" />
            </div>
            <div className="">
              <img
                src="../../public/5.png"
                alt="ùission"
                className="rounded-tr-3xl rounded-br-3xl"
              />
            </div>
          </div>
          <div className=" md:w-2/5">
            <h2 className=" md:text-4xl text-start text-3xl font-extrabold md:mb-9 mb-7 leading-normal text-blue-800">
              Notre mission
            </h2>
            <p className=" text-slate-500 text-xl mb-3 text-justify">
              Nous avons pour mission principale d’être un des leaders du pays
              dans le développement et la fourniture de solutions digitales,
              être un pilier de la réussite de nos clients et ainsi participer à
              la transformation numérique du continent Africain en général et de
              la RDC en particulier.
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
        </motion.div>
      </div>
    </>
  );
}

export default Mission;
