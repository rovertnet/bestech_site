import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Abouts from "./pages/Abouts";
import Scrollprogress from "./composants/header/Scrollprogress";


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
      </div>
    </>
  );
}

export default App
