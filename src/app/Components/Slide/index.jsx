"use client";
import { Typography } from "@material-tailwind/react";

const Slide = () => {
  return (
    <>
      <section
        className="top-0 h-[100vh] md:h-[85vh] bg-top md:bg-bottom bg-cover"
        style={{
          backgroundImage: "url('/assets/hero/maringa.png')",
          backgroundRepeat: "no-repeat",
          backgroundClip: "content-box",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="flex flex-col md:flex-row items-center"
          style={{ zIndex: 999, position: "relative", height: "100%" }}
        >
          <div className="flex-1 ml-24 text-left self-center w-full">
            <Typography
              className="text-white text-strong text-3xl md:text-5xl z-50 font-corporate text-shadow"
              style={{ color: "#fff", fontWeight: "500" }}
            >
              Invista de forma inteligente no seu futuro.
            </Typography>
            <Typography
              className="text-white text-strong  text-2xl z-50 font-corporate text-shadow mt-8"
              style={{ color: "#fff", fontWeight: "300" }}
            >
              Realize seus sonhos com a segurança e flexibilidade do Consórcio
              Imobiliário.
            </Typography>
            <Typography
              variant="span"
              className="text-white z-50 font-roboto mt-8"
              style={{ color: "#fff", fontWeight: "100" }}
            >
              Descubra como mais de 150.000 mil investidores estão multiplicando
              o seu patrimônio utilizando o consórcio imobiliário como principal
              estratégia. Temos clientes que obtiveram retornos acima de 500% de
              rentabilidade financeira sobre o capital investido através de
              nossa assessoria.
            </Typography>
            <div className="flex justify-start mt-8">
              <a
                href="#contato"
                className="font-corporate degrade-primary text-black-50  border-0 py-2 px-8 focus:outline-none transition-all hover:scale-105 hover:shadow-lg shadow-cyan-500/50 rounded text-lg"
              >
                Invista com Select Prime
              </a>
            </div>
          </div>
          <div className="flex-none w-[30rem]"></div>
        </div>
      </section>
    </>
  );
};

export default Slide;
