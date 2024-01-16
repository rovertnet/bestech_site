import Data from "./project/Data";
import Projectitems from "./project/Projectitems";

function Project() {
  return (
    <>
      <div className="md:px-14 px-10 max-w-s mx-auto space-y-12 my-10 md:my-12">
        <div className=" flex flex-col justify-center items-center md:mt-10 mt-7">
          <h2 className=" md:text-4xl text-center text-3xl font-extrabold md:mb-7 mb-5 leading-normal text-blue-800">
            Nos Meilleures Solutions
          </h2>
          <p className=" text-slate-700 max-w-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odio
            sunt dolore repellat iste commodi.
          </p>
        </div>

        <div className=" md:py-7 py-5" id="projet">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {Data.map((work) => (
              <Projectitems
                key={work.titre}
                imageUrl={work.imageUrl}
                titre={work.titre}
                tech={work.tech}
              ></Projectitems>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project