"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import {
  Navbar as Navegacao,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
// import logoSelectPrime from "/assets/logo.png";

const arrNav = [
  {
    link: "Home",
    anchor: "home",
  },
  {
    link: "Comece a Investir",
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
    link: "Educação Financeira",
    anchor: "educacao-financeira",
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
  const [openNav, setOpenNav] = React.useState(false);

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
      <Navegacao id="navbar" className="mx-auto py-2 px-4 lg:px-8 lg:py-1 text-black items-center border-none navbar" style={{ zIndex: 100, position: "fixed", width: "100vw" }}>
      <div className="container mx-auto flex items-center justify-between ">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium text-black"
        >
          <img src="/assets/logo.png" width={130} />
        </Typography>
        <div className="hidden lg:block">
        {arrNav.map((item, index) => (
            <Link
              key={index + 1}
              href={`/#${item.anchor}`}
              className="mr-5  hover:text-gray-300 "
              style={{color: "#fff"}}
            >
              {item.link}
            </Link>
          ))}</div>
        <IconButton
          variant="text"
          className="ml-auto mr-5 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="#ccc"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="#ccc"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto flex flex-col gap-3 text-black" style={{background: "#00000080", position:"absolute", left: "0", width: "100%", paddingLeft: "15px",paddingBottom: "15px"}}>
        {arrNav.map((item, index) => (
            <Link
              key={index + 1}
              href={`/#${item.anchor}`}
              className="mr-5 text-gray-500 hover:text-gray-300"
              style={{color: "#fff"}}
            >
              {item.link}
            </Link>
          ))}
        </div>
      </MobileNav>
    </Navegacao>
      {/* <div
        id="navbar"
        className=" mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center navbar "
        style={{ zIndex: 50, position: "fixed", width: "100%" }}
      >
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="/assets/logo.png" width={130} />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center right-0 ">
          {arrNav.map((item, index) => (
            <Link
              key={index + 1}
              href={`/#${item.anchor}`}
              className="mr-5  text-gray-100 hover:text-gray-300"
            >
              {item.link}
            </Link>
          ))}
        </nav>
      </div> */}
    </header>
  );
};

export default Navbar;
