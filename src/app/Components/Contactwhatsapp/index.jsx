import React from "react";
import { IconWhatsapp } from "../Icons";

const Contactwhatsapp = () => {
  return (
    <div className="fixed bottom-0 right-0 z-50 p-10 hover:scale-125 transition duration-700 ease-in-out cursor-pointer">
      <span className="relative flex h-3 w-3 top-2 left-9">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
      <IconWhatsapp className="text-green-500 bg-white w-40 h-40 rounded-full p-1 hover:scale-125 transition duration-700 ease-in-out " />
    </div>
  );
};

export default Contactwhatsapp;
