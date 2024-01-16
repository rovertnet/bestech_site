import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Abouts from "./pages/Abouts";

function App() {

  return (
    <>
      <div className="">
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
