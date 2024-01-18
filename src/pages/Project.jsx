import Navbar from "../composants/header/Navbar";
import { motion } from "framer-motion";

function Project() {
  return (
    <>
      <div className="bg-center bg-cover object-cover w-full h-full p-20 bg-[url('../../public/bb.png')]">
        <Navbar />

        <div className=" flex flex-col justify-center items-center">
          <div className=" text-center md:py-14 py-12">
            <h1 className="text-white text-2xl md:text-4xl md:pt-12 pt-10 font-extrabold">
              Nos Meilleures Solutions
            </h1>
          </div>
        </div>
      </div>
      
      <div>
        <Project />
      </div>
    </>
  );
}

// function Box(){
//     return(
//         <motion.div 
//             initial = {{ opacity : 0, scale : 0, x:500 }} 
//             whileInView={{ opacity : 1, scale : 1, x:0 }} 
//             transition={{ duration:0.6 }}
//             className=" m-[200px] h-[100px] w-[100px] bg-slate-900 "
//         >
//             <h1 className="text-center text-white font-bold text-2xl">Box</h1>
//         </motion.div>
//     )
// }

export default Project