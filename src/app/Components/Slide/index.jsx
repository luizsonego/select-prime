"use client";
import { Typography } from "@material-tailwind/react";
import ActionButton from  '../ActionButton'

const Slide = () => {
  return (
    <>
      <section
        className="top-52 md:top-0 h-[100vh] md:h-[85vh] bg-position md:bg-center bg-cover user-cover"
        style={{
          backgroundImage: "url('/assets/hero/maringa.png')",
          backgroundRepeat: "no-repeat",
          backgroundClip: "content-box",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="flex flex-col md:flex-row items-center"
          style={{ zIndex: 10, position: "relative", height: "100%" }}
        >
          <div className="flex-1 mt-48 md:mt-0 md:ml-24 text-left self-center w-full px-5">
            <Typography
              className="text-white text-strong text-4xl md:text-5xl z-10 font-corporate text-shadow text-left md:text-left w-11/12 md:w-full"
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
              className="text-white z-50 font-roboto mt-8 md:block"
              style={{ color: "#fff", fontWeight: "100" }}
            >
              Descubra como mais de 150.000 mil investidores estão multiplicando
              o seu patrimônio utilizando o consórcio imobiliário como principal
              estratégia. Temos clientes que obtiveram retornos acima de 500% de
              rentabilidade financeira sobre o capital investido através de
              nossa assessoria.
            </Typography>
            <div className="flex justify-start mt-8">
              <ActionButton href="#contato" text="Invista com Select Prime" />
            </div>
          </div>
          <div className="flex-none w-[30rem]"></div>
        </div>
      </section>
    </>
  );
};

export default Slide;
