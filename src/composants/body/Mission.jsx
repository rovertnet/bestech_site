import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

function Mission() {
  return (
    <>
      <div className=" md:px-14 p-5 max-w-s mx-auto space-y-12 md:my-11 my-14">
        <div className=" flex flex-col  md:flex-row justify-between items-center gap-14">
          <div className=" md:w-1/2 flex gap-10">
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=""
            >
              <img
                src="../../public/3.png"
                alt="ùission"
                className=" rounded-tl-3xl rounded-bl-3xl"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=""
            >
              <img src="../../public/4.png" alt="ùission" className=" mt-20" />
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=""
            >
              <img
                src="../../public/5.png"
                alt="ùission"
                className="rounded-tr-3xl rounded-br-3xl"
              />
            </motion.div>
          </div>
          <div className=" md:w-2/5">
            <motion.h2
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" md:text-4xl text-start text-3xl font-extrabold md:mb-9 mb-7 leading-normal text-blue-800"
            >
              Notre mission
            </motion.h2>
            <motion.p
              variants={fadeIn("left", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-slate-500 text-xl mb-3 text-justify"
            >
              Nous avons pour mission principale d’être un des leaders du pays
              dans le développement et la fourniture de solutions digitales,
              être un pilier de la réussite de nos clients et ainsi participer à
              la transformation numérique du continent Africain en général et de
              la RDC en particulier.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <span className="text-slate-500 text-xl md:pb-5 pb-5">
                Suivez-nous sur :{" "}
              </span>

              <div className=" flex justify-start items-center gap-4 md:mt-7 mt-5">
                <FaInstagramSquare className="cursor-pointer text-3xl md:text-3xl text-red-600 " />
                <BsTwitterX className="cursor-pointer text-3xl md:text-3xl " />
                <FaLinkedinIn className="cursor-pointer text-3xl md:text-3xl text-blue-500 " />
                <FaFacebookF className="cursor-pointer text-3xl md:text-3xl text-blue-600 " />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission;
