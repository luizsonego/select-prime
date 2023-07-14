import React from "react";
import { roboto } from "../fonts";
import Title from "./../Components/Title/index";

const Education = () => {
  return (
    <section className="relative h-4/5">
      <div
        className="top-0 h-[100vh] md:h-[85vh] bg-top md:bg-bottom bg-cover absolute"
        style={{
          backgroundImage: "url('/assets/dollar.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundClip: "content-box",
          backgroundAttachment: "fixed",
          opacity: 0.3,
          width: "100%",
          height: "100%",
        }}
      ></div>
      <div className="mt-5 py-5">
        <Title title="Educação Financeira" colorTitle="text-degrade" />
      </div>
      <div
        className="container flex flex-col md:flex-row pb-24 justify-evenly"
        style={{ zIndex: 9, position: "relative" }}
      >
        <div className=" md:ml-36 w-full md:w-2/6 px-5 md:px-0 text-black">
          {/* <h1 className="text-sm">SELECT PRIME</h1>
          <h2 className="text-3xl font-corporate ">Quer saber mais?</h2> */}
          {/* <div className="border border-0 boreder-3 w-16 h-1 rounded mt-3 degrade-primary"></div> */}
          <p className={`text-white z-50 my-5 ${roboto.className} `}>
            Você sabe qual a diferença entre independência financeira e
            liberdade financeira? Enquanto uma pode ser entendida como um
            sinônimo de estabilidade, a outra vai além, uma vez que representa a
            máxima popularmente conhecida como{" "}
            <strong>
              <i>“viver de renda”</i>
            </strong>
            . Não é difícil imaginar porque tantos brasileiros sonham com essas
            metas, não é mesmo?
          </p>
          <p className="no-underline hover:underline text-left text-white cursor-pointer my-8">
            <i>Ler mais</i>
          </p>
        </div>
        <div className="justify-center md:justify-self-start">
          <img
            alt="gallery"
            className="aspect-[1/1] object-cover mx-auto md:left-0 object-bottom block rounded-lg w-[26rem] "
            src="/assets/education.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
