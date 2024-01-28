import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Abouts from "./pages/Abouts";
import Scrollprogress from "./composants/header/Scrollprogress";
import Newsletter from "./composants/body/Newsletter";
import Footer from "./composants/footer/Footer";


function App() {
 
  return (
    <>
      <div className="">
        <Scrollprogress />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<Abouts />} />
        </Routes>
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default App
