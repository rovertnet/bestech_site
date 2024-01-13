
function About() {
  return (
    <>
      <div className="my-10 md:mx-14 px-4 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-40">
          <div className=" lg:w-4/6 px-3">
            <h3 className=" text-3xl text-blue-900 font-bold lg:w-1/2 mb-3">
              A propos
            </h3>
            <p className=" text-xl text-gray-700 text-justify">
              Artha Beauté, a été fondé avec la mission de donner à chaque
              client l'expérience ultime en matière de beauté. Notre équipe est
              passionnée par l'art du maquillage et de la coiffure, et nous nous
              engageons à offrir un service personnalisé et de haute qualité à
              chacun de nos clients.
            </p>

            <p className=" text-xl text-gray-700 mt-3 text-justify">
              Artha Beauté, a été fondé avec la mission de donner à chaque
              client l'expérience ultime en matière de beauté. Notre équipe est
              passionnée par l'art du maquillage et de la coiffure, et nous nous
              engageons à offrir un service personnalisé et de haute qualité à
              chacun de nos clients.
            </p>
          </div>

          <div className="w-full lg:w-5/6 my-6">
            <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
              <div className=" rounded-md h-full flex justify-center items-center">
                <div>
                  <img className="" src="../../public/I.jpg" alt="about" />
                </div>
              </div>
              {/*  */}
              <div className=" rounded-md h-full flex justify-center items-center md:mt-12">
                <div>
                  <img className="" src="../../public/I.jpg" alt="about" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About