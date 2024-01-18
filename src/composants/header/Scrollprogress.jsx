import { motion, useScroll } from "framer-motion";

function Scrollprogress() {
  const { scrollYProgress } = useScroll()
  return (
    <>
        <motion.div style={{
          scaleX : scrollYProgress,
          position: 'fixed',
          top:0,
          left:0,
          right:0,
          height:10,
          transformOrigin:'0%',
        }} 
        className=" bg-blue-800 "
      >

        </motion.div>
    </>
  )
}

export default Scrollprogress