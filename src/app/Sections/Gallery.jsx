import { roboto } from "@/app/fonts";
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
                className="w-full object-cover h-48 object-center block"
                src="/assets/sala/imagem1.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 z-30">
              <img
                alt="gallery"
                className="w-full object-cover  h-48  object-top block "
                src="/assets/sala/imagem7.jpg"
              />
            </div>
          </div>
          {/*  */}
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2 z-30">
              <img
                alt="gallery"
                className="w-full object-cover h-48 object-center block "
                src="/assets/sala/imagem5.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 z-30">
              <img
                alt="gallery"
                className="w-full object-cover h-48 object-center block"
                src="/assets/sala/imagem6.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-full z-30">
              <img
                alt="gallery"
                className="w-full h-96 object-cover object-center block"
                src="/assets/sala/imagem4.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="container flex pb-24 justify-evenly"
        style={{ zIndex: 9, position: "relative" }}
      >
        <div className=" ml-36 mt-16  w-2/6 text-black">
          <h1 className="text-sm">SELECT PRIME</h1>
          <h2 className="text-3xl font-corporate ">Quer saber mais?</h2>
          <div className="border border-0 boreder-3 w-16 h-1 rounded mt-3 degrade-primary"></div>
          <p className={`text-black z-50 my-5 ${roboto.className} `}>
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
          <p className="text-center">
            Prazer, nós somos a{" "}
            <i>
              <strong>Select Prime Financial Solutions.</strong>
            </i>{" "}
          </p>
        </div>
        <div className="mt-16 justify-self-start">
          <img
            alt="gallery"
            className="aspect-[1/1] object-cover left-0 object-bottom block rounded-lg w-[26rem]"
            src="/assets/tempo.jpeg"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
