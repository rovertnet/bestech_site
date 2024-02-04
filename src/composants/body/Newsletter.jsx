import { IoSend } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

function Newsletter() {
  return (
    <>
      <div className=" md:px-14 px-8 max-w-screen-2xl mx-auto md:pb-10 pb-8 bg-blue-900">
        <div className=" py-12">
          <div className=" flex flex-col md:flex-row justify-between items-center gap-10">
            {/* image */}
            <div>
              <motion.p
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className=" text-slate-200 text-xl font-medium md:text-xl"
              >
                Join our newsletter and get news in your inbox every week! We
                hate spam too, so no worries about this.
              </motion.p>
            </div>
            {/* La présentation */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.9 }}
              className=" md:w-full"
            >
              {/* le formulaire */}
              <form action="">
                <div className="flex justify-center items-center space-x-3">
                  <input
                    type="mail"
                    className=" md:w-full w-full outline outline-0 focus:outline-0 px-6 md:px-7 py-4 md:py-5 text-slate-700 rounded-md"
                    placeholder="Votre adresse e-mail"
                  />
                  <button
                    type="submit"
                    className=" border border-white px-9 md:px-12 py-4 md:py-4 rounded-md hover:bg-black hover:border hover:border-black"
                  >
                    <IoSend className="text-slate-200 text-2xl md:text-3xl font-semibold" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
