
import About from "../composants/body/About";
import Mission from "../composants/body/Mission";
import Service from "../composants/body/Service";
import Navbar from "../composants/header/Navbar"


function Home() {
  return (
    <>
      <div className="bg-center bg-cover object-cover w-full h-full p-20 bg-[url('../../public/sartup.jpg')]">
        <Navbar />

        <div className=" flex flex-col justify-center items-center">
          <div className=" text-center md:py-5 py-3">
            <h1 className="text-blue-800 text-2xl md:text-3xl font-extrabold">
              BESTECH CONSULT
            </h1>
            <p className=" text-white max-w-md px-7 text-lg font-semibold md:mt-5 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              vitae ea tempore incidunt maxime doloribus quasi, quisquam
              laudantium itaque.
            </p>
            <div className="md:mt-8 mt-6">
              <button className=" bg-blue-900 text-white hover:bg-blue-700 rounded-md text-xl font-semibold px-5 py-3">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <About />
        <Mission />
        <Service />
      </div>
    </>
  );
}

export default Home