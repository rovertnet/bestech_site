
function Service() {
  return (
    <>
      <div className="md:px-14 p-4 max-w-s mx-auto space-y-12 my-10 md:my-12">
        <div className=" flex flex-col justify-center items-center md:mt-10 mt-7">
          <h2 className=" md:text-4xl text-center text-3xl font-extrabold md:mb-7 mb-5 leading-normal text-blue-800">
            Nos Services
          </h2>
          <p className=" text-slate-700 max-w-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odio
            sunt dolore repellat iste commodi.
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-2">
          <div className="">
            <img src="../../public/app.png" alt="" className=" h-44 w-44 rounded-full" />
            <div className=" flex flex-col justify-start items-start">
                <h2 className=" text-slate-900 text-xl md:text-2xl font-bold">Développement d'applications</h2>
                <span className=" text-slate-700 text-base md:text-lg  font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi alias ratione nulla a enim! Esse,
                </span>
                <span className=" text-sm md:text-base text-slate-600 cursor-pointer">En savoir plus</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service