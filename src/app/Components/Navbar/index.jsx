"use client";

import React, { useEffect } from "react";
// import logoSelectPrime from "/assets/logo.png";

const arrNav = [
  {
    link: "Home",
    anchor: "home",
  },
  {
    link: "Comece a investir",
    anchor: "comece-a-investir",
  },
  // {
  //   link: "Estrategias",
  //   anchor: "estrategia",
  // },
  {
    link: "Simulação",
    anchor: "simule",
  },
  {
    link: "Depoimentos",
    anchor: "depoimentos",
  },
  {
    link: "Sobre nós",
    anchor: "sobre",
  },
  {
    link: "Resultados",
    anchor: "resultados",
  },
  {
    link: "Contato",
    anchor: "contato",
  },
];

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        document.getElementById("navbar").classList.add("navbar-fixed-top");
      } else {
        document.getElementById("navbar").classList.remove("navbar-fixed-top");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <header className="text-gray-600">
      <div
        id="navbar"
        className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center navbar "
        style={{ zIndex: 999999, position: "fixed" }}
      >
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="/assets/logo.png" width={130} />
          {/* <span className="ml-3 text-xl">Tailblocks</span> */}
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center right-0 ">
          {arrNav.map((item, index) => (
            <a
              key={index + 1}
              href={`#${item.anchor}`}
              className="mr-5  text-gray-100 hover:text-gray-300"
            >
              {item.link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
