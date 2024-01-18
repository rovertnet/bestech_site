import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";


const MissionCoponent = () => {
    return (
        <div className=" md:px-14 p-4 max-w-s mx-auto space-y-12 md:my-11 my-14">
            <motion.div
                initial={{ opacity: 0, scale: 0, x: 500 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className=" flex flex-col  md:flex-row justify-between items-center gap-14"
            >
                <div className=" flex flex-col  md:flex-row justify-between items-center gap-14">
                    <div className="md:w-1/2 flex gap-10">
                        <div className="flex items-center">
                            <div>
                                <img
                                    src="../../public/4.png"
                                    alt="Mission"
                                    className="rounded-tr-md rounded-br-md"
                                    style={{ maxWidth: "300px", maxHeight: "300px" }}
                                />
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <img
                                        src="../../public/5.png"
                                        alt="Mission"
                                        className="rounded-tr-md rounded-br-md w-full"
                                        style={{ maxWidth: "300px", maxHeight: "300px" }}
                                    />
                                </div>
                                <div>
                                    <img
                                        src="../../public/5.png"
                                        alt="Mission"
                                        className="rounded-tr-md rounded-br-md w-full"
                                        style={{ maxWidth: "300px", maxHeight: "300px" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" md:w-2/5">
                        <h2 className=" md:text-4xl text-end md:text-start text-3xl font-extrabold md:mb-9 mb-7 leading-normal text-blue-800">
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

                        <span className="text-slate-500 text-xl md:pb-5 pb-5">
                            Suivez-nous sur :{" "}
                        </span>

                        <div className=" flex justify-start items-center gap-4 md:mt-7 mt-5">
                            <FaInstagramSquare className="cursor-pointer text-3xl md:text-3xl text-red-600 " />
                            <BsTwitterX className="cursor-pointer text-3xl md:text-3xl " />
                            <FaLinkedinIn className="cursor-pointer text-3xl md:text-3xl text-blue-500 " />
                            <FaFacebookF className="cursor-pointer text-3xl md:text-3xl text-blue-600 " />
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}

export default MissionCoponent