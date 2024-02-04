import { fadeIn } from "../Variants";
import About from "../composants/body/About";
import Mission from "../composants/body/Mission";
import Team from "../composants/body/Team";
import Navbar from "../composants/header/Navbar";
import { motion } from "framer-motion";

function Abouts() {
  return (
    <>
      <div className="bg-center bg-cover object-cover w-full h-full p-20 bg-[url('../../public/bb.png')]">
        <Navbar />

        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" flex flex-col justify-center items-center"
        >
          <div className=" text-center md:py-14 py-12">
            <h1 className="text-white text-2xl md:pt-12 pt-10 md:text-4xl font-extrabold">
              A propos de nous
            </h1>
          </div>
        </motion.div>
      </div>
      <div>
        <About />
        <Mission />
        <Team />
      </div>
    </>
  );
}

export default Abouts