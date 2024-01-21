import { motion, useScroll } from "framer-motion";

function Scrollprogress() {
  const { scrollYProgress } = useScroll()
  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          transformOrigin: "0%",
        }}
        className=" bg-gradient-to-r from-blue-600 via-yellow-500 to-red-700 ... "
      ></motion.div>
    </>
  );
}

export default Scrollprogress