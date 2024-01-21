
import { fadeIn } from "../Variants";
import About from "../composants/body/About";
import Mission from "../composants/body/Mission";
import Newsletter from "../composants/body/Newsletter";
import Project from "../composants/body/Project";
import Service from "../composants/body/Service";
import Footer from "../composants/footer/Footer";
import Navbar from "../composants/header/Navbar"
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <div className="bg-center bg-cover object-cover w-full h-full p-20 bg-[url('../../public/sartup.jpg')]">
        <Navbar />

        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" flex flex-col justify-center items-center"
        >
          <div className=" text-center md:py-10 py-7">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold">
              Votre parcours vers l’efficacité informatique commence ici.
            </h1>
            <p className=" text-white  px-7 flex justify-center items-center text-2xl font-semibold md:mt-5 mt-4">
              Découvrez comment nos services <br /> peuvent transformer votre
              infrastructure <br /> et dynamiser votre entreprise
            </p>
            <div className="md:mt-8 mt-6">
              <button className=" bg-blue-900 text-white hover:bg-blue-700 rounded-md text-xl font-semibold px-5 py-3">
                En savoir plus
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <div>
        <About />
        <Mission />
        <Service />
        <Project />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default Home