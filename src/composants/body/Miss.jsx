import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Miss() {
  return (
    <>
      <div className="md:px-14 px-8 max-w-s mx-auto space-y-12 md:my-11 my-14">
        <div className=" flex flex-col  md:flex-row justify-between items-center gap-14">
          <div className="">
            <div className="flex gap-3">
              <div className="grid gap-4">
                <img
                  className="h-full max-w-full rounded-lg"
                  src="../../public/MISION/1.png"
                  alt=""
                />
              </div>
              <div className=" grid grid-cols-1 md:grid-cols-1 gap-4">
                <div>
                  <img
                    className="md:h-full max-w-full rounded-lg"
                    src="../../public/1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="md:h-full max-w-full rounded-lg"
                    src="../../public/2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/*  */}

          <div className="md:w-2/5">
            {/*  */}
            <h1 className="md:text-4xl text-start text-3xl font-extrabold md:mb-9 mb-7 leading-normal text-blue-800">
              Notre Mission
            </h1>
            {/*  */}
            <p className="text-slate-500 text-xl mb-3 text-justify">
              Nous avons pour mission principale d’être un des leaders du pays
              dans le développement et la fourniture de solutions digitales,
              être un pilier de la réussite de nos clients et ainsi participer à
              la transformation numérique du continent Africain en général et de
              la RDC en particulier.
            </p>
            {/*  */}
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

export default Miss