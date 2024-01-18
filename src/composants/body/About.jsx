import { motion } from "framer-motion";

function About() {
  return (
    <>
      <div className=" md:px-14 px-8 max-w-s space-y-12 my-10 md:my-12">
        {/*  */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 500 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className=" flex flex-col md:flex-row-reverse justify-center items-center gap-16 "
        >
          <div className=" md:w-2/3 flex gap-10 ">
            <div className="h-full ">
              <img
                src="../../public/13.png"
                alt=""
                className=" rounded-tl-3xl rounded-bl-3xl"
              />
            </div>
            <div className=" h-full ">
              <img
                src="../../public/12.png"
                alt=""
                className=" mt-16 md:w-full w-full md:h-full h-full rounded-tr-3xl rounded-br-3xl"
              />
            </div>
          </div>

          <div className=" md:w-3/5">
            <h2 className=" md:text-4xl pb-5 md:pb-7 text-3xl font-extrabold mb-2 leading-normal text-blue-800">
              A propos de nous
            </h2>
            <p className=" text-slate-500 text-xl mb-3 text-justify">
              Bestech Consult est une entreprise de consultation informatique
              spécialisée dans la proposition de solutions digitales adéquates
              tant pour les entreprises privées que publiques dans différents
              domaines et secteurs.
            </p>
            <p className=" text-slate-500 text-lg mb-3 text-justify">
              A l’ère où les nouvelles technologies battent un plein sans
              précédent dans la gestion quotidienne des activités de l’homme,
              Bestech se veut être un partenaire de taille pour votre
              transformation numérique au moyen des solutions hors concurrence.
            </p>
            <button className="py-3 md:mt-7 mt-10 text-xl px-6 rounded-md border border-blue-800 text-blue-800 hover:bg-blue-700 hover:text-blue-50 transition-all duration-300 font-semibold">
              Contactez-nous
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default About