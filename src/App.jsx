import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Abouts from "./pages/Abouts";
import Project from "./pages/Project";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll()
  return (
    <>
      <div className="">
        <motion.div style={{
          scaleX : scrollYProgress,
          position: 'fixed',
          top:0,
          left:0,
          right:0,
          height:10,
          transformOrigin:'0%',
        }} 
        className=" bg-blue-800"
        >

        </motion.div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<Abouts />} />
        </Routes>
        <Routes>
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </>
  );
}

export default App
