
function Mission() {
  return (
    <>
      <div className=" md:px-14 p-4 max-w-s mx-auto space-y-12">
        <div className=" flex flex-col  md:flex-row justify-between items-center gap-8">
          <div className=" md:w-1/2">
            <img src="../../public/marthe.png" alt="ùission" />
          </div>
          <div className=" md:w-2/5">
            <h2 className=" md:text-4xl  text-3xl font-extrabold mb-2 leading-normal text-blue-800">
              Notre mission
            </h2>
            <p className=" text-slate-500 text-xl mb-3 text-justify">
              Avec une équipe de professionnels passionnés et talentueux, nous
              sommes dévoués à vous offrir une expérience exceptionnelle,
              rehaussant votre beauté naturelle et vous laissant rayonner à
              chaque occasion spéciale.
            </p>
            <p className=" text-slate-500 text-xl mb-3 text-justify">
              Notre site vitrine présente nos services sur mesure, notre
              portefeuille de créations époustouflantes, nos tarifs compétitifs,
              et nos coordonnées pour planifier votre prochaine consultation.
            </p>
            <button className="py-3 text-xl shadow-md px-6 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:bg-purple-500 transition-all duration-300">
              Prendre rendez-vous
            </button>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission