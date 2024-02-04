import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

function Service() {
  return (
    <div className=" bg-gray-100 md:py-5 py-3">
      <div className="md:px-14 p-5 max-w-s mx-auto space-y-12 my-10 md:my-12">
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" flex flex-col justify-center items-center"
        >
          <h2 className=" md:text-4xl text-center text-3xl font-extrabold md:mb-7 mb-5 leading-normal text-blue-800">
            Nos Services
          </h2>
          <p className=" text-slate-700 max-w-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odio
            sunt dolore repellat iste commodi.
          </p>
        </motion.div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-10">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="bg-white shadow-md hover:shadow-lg px-7 py-4 rounded-md"
          >
            <img src="../../public/app.png" alt="" className=" h-16 w-16" />
            <div className=" flex flex-col justify-start items-start md:py-7 py-5">
              <h2 className=" text-blue-800 text-xl md:text-2xl md:pb-3 pb-2 font-bold">
                Développement d'applications
              </h2>
              <span className=" text-slate-700 text-base md:text-lg md:pb-3 pb-2 text-justify font-medium">
                Donnez vie à vos visions grâce à notre expertise en
                développement d’applications, où la technologie rencontre la
                créativité pour des résultats hors du commun.
              </span>
              <span className=" text-sm md:text-base text-slate-500 cursor-pointer">
                En savoir plus
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="bg-white shadow-md hover:shadow-lg px-7 py-4 rounded-md"
          >
            <img
              src="../../public/marketing.png"
              alt=""
              className=" h-16 w-16"
            />
            <div className=" flex flex-col justify-start items-start md:py-7 py-5">
              <h2 className=" text-blue-800 text-xl md:text-2xl md:pb-3 pb-2 font-bold">
                Marketing Digital
              </h2>
              <span className=" text-slate-700 text-base md:text-lg md:pb-3 pb-2 text-justify font-medium">
                Boostez votre présence en ligne avec notre offre de Marketing
                digital, propulsant votre entreprise vers de nouveaux sommets
                numériques.
              </span>
              <span className=" text-sm md:text-base text-slate-600 cursor-pointer">
                En savoir plus
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" bg-white shadow-md hover:shadow-lg px-7 py-4 rounded-md"
          >
            <img
              src="../../public/formation.png"
              alt=""
              className=" h-16 w-16 text-blue-800"
            />
            <div className=" flex flex-col justify-start items-start md:py-7 py-5">
              <h2 className=" text-blue-800 text-xl md:pb-3 pb-2 md:text-2xl font-bold">
                Formation aux métiers numériques
              </h2>
              <span className=" text-slate-700 text-base md:pb-3 pb-2 md:text-lg text-justify font-medium">
                Atomiser votre carrière professionnelle en vous formant aux
                métiers numériques pour plus de performance et une productivité
                dynamique.
              </span>
              <span className=" text-sm md:text-base text-slate-600 cursor-pointer">
                En savoir plus
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Service