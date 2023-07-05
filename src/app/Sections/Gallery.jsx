import React from "react";

const Gallery = () => {
  return (
    <section className="relative bg-white h-4/5">
      <div
        className="absolute"
        style={{
          background: "url('/assets/sala/sala-capa.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPositionY: "50%",
          backgroundAttachment: "fixed",
          opacity: 0.5,
          width: "100%",
          height: "100%",
          zIndex: "0",
        }}
      ></div>
      <div className="px-5 pt-24 mx-auto flex flex-wrap z-30 container w-4/5">
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery "
                className="w-full h-full object-cover object-center  block brightness-110"
                src="/assets/sala/imagem8.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 z-30">
              <img
                alt="gallery"
                className="w-full object-cover h-44 object-center block"
                src="/assets/sala/imagem1.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 z-30">
              <img
                alt="gallery"
                className="w-full object-cover h-44 object-top block "
                src="/assets/sala/imagem7.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2 z-30">
              <img
                alt="gallery"
                className="w-full object-cover h-44 object-center block "
                src="/assets/sala/imagem5.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 z-30">
              <img
                alt="gallery"
                className="w-full object-cover h-44 object-center block"
                src="/assets/sala/imagem6.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-full z-30">
              <img
                alt="gallery"
                className="w-full h-80 object-cover object-center block"
                src="/assets/sala/imagem4.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="container flex pb-24 justify-around"
        style={{ zIndex: 9, position: "relative" }}
      >
        <div className=" ml-36 mt-16 sticky top-10 w-1/3">
          <h1 className="text-sm">SELECT PRIME</h1>
          <h2 className="text-3xl font-corporate ">Quer saber mais?</h2>
          <div className="border boreder-3 w-16 mt-3 degrade-primary"></div>
          <p
            className="text-black z-50 font-roboto my-8 "
            style={{ fontWeight: "100" }}
          >
            O que tem mais valor que o{" "}
            <strong className="font-bold">TEMPO?</strong> Você está disposto a
            fazer um planejamento e construir uma Renda Passiva? Pois é ela que
            vai te dar mais tempo e te proporcionar{" "}
            <strong className="font-bold">LIBERDADE</strong>. Como seria se você
            tivesse a mesma renda e padrão de vida que tem hoje, ou até melhor,
            pudesse fazer o que gosta além de ajudar as pessoas que ama, sabendo
            que todos os meses você teria uma renda? Essa é a nossa missão!
            Disseminar os princípios da Educação Financeira incentivando nossos
            clientes a investirem seu dinheiro de forma inteligente pensando
            sempre no futuro e assim proporcionar-lhes Tempo para que possam
            desfrutar do que realmente tem valor em nossas vidas!
          </p>
          <p>
            Prazer, nós somos a{" "}
            <i>
              <strong>Select Prime Financial Solutions.</strong>
            </i>{" "}
          </p>
        </div>
        <div className="">
          <img
            alt="gallery"
            className="aspect-[9/16] object-cover object-bottom block rounded-lg w-96"
            src="/assets/tempo.jpeg"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
