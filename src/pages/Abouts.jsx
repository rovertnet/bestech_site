import About from "../composants/body/About";
import Mission from "../composants/body/Mission";
import Newsletter from "../composants/body/Newsletter";
import Footer from "../composants/footer/Footer";
import Navbar from "../composants/header/Navbar"

function Abouts() {
  return (
    <>
      <div className="bg-center bg-cover object-cover w-full h-full p-20 bg-[url('../../public/BAP.png')]">
        <Navbar />

        <div className=" flex flex-col justify-center items-center">
          <div className=" text-center md:py-14 py-12">
            <h1 className="text-white text-2xl md:text-4xl font-extrabold">
              A propos de nous
            </h1>
          </div>
        </div>
      </div>
      <div>
        <About />
        <Mission />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default Abouts