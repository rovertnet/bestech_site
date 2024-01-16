
function About() {
  return (
    <>
      <div className=" md:px-14 p-4 max-w-s space-y-12 my-10 md:my-12">
        {/*  */}
        <div className=" flex flex-col md:flex-row-reverse justify-center items-center gap-16 ">
          <div className=" md:w-2/3 flex gap-10 ">
            <div className="h-full ">
              <img src="../../public/1.png" alt="" className=" rounded-md" />
            </div>
            <div className=" h-full ">
              <img
                src="../../public/2.png"
                alt=""
                className=" mt-16 md:w-full rounded-md w-full md:h-full h-full"
              />
            </div>
          </div>

          <div className=" md:w-3/5">
            <h2 className=" md:text-4xl pb-5 md:pb-7 text-3xl font-extrabold mb-2 leading-normal text-blue-800">
              A propos de nous
            </h2>
            <p className=" text-slate-500 text-xl mb-3 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              reiciendis beatae obcaecati autem blanditiis, atque alias adipisci
              facere molestiae dicta ex nulla ratione, tempore dolor dolore
              suscipit earum in velit!
            </p>
            <p className=" text-slate-500 text-lg mb-3 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              reiciendis beatae obcaecati autem blanditiis, atque alias adipisci
              facere molestiae dicta ex nulla ratione, tempore dolor dolore
              suscipit earum in velit!
            </p>
            <button className="py-3 md:mt-7 mt-10 text-xl px-6 rounded-md border border-blue-800 text-blue-800 hover:bg-blue-700 hover:text-blue-50 transition-all duration-300 font-semibold">
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About