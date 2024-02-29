"use client";

import { useState } from "react";
import ReactPlayer from "react-player";
import { IconClose } from "../Components/Icons";
import ResultEfect from "../Components/ResultEfect";
import Title from "../Components/Title";
import { tangerine } from "../fonts";

const arrResults = [
  {
    id: 1,
    text: "em créditos distribuídos",
    number: <ResultEfect finalNumber="23" prefix="+" sufix="Bi" />,
  },
  {
    id: 2,
    text: "CLIENTES CONTEMPLADOS",
    number: <ResultEfect finalNumber="159" prefix="+" sufix="mil" />,
  },
  {
    id: 3,
    text: "cotas comercializadas",
    number: <ResultEfect finalNumber="256" prefix="+" sufix="mil" />,
  },
];

const text = (
  <div className="flex gap-3 flex-col">
    <h2 className="text-2xl text-center">
      <strong>A Select Prime</strong>
    </h2>
    <p className="md:text:left text-justify">
      Sediados na região central Maringá PR, somos representantes exclusivos da
      Racon Consórcios, uma marca da RANDON Administradora de Consórcios mais
      uma empresa do grupo RANDONCORP.
    </p>
    <p className="flex md:flex-row flex-col gap-4 text-cyan-100">
      <a
        className="no-underline hover:underline"
        href="https://www.randoncorp.com/pt/negocios/ "
      >
        www.randoncorp.com/pt/negocios
      </a>
      <a
        className="no-underline hover:underline"
        href="https://www.racon.com.br/racon/historia"
      >
        www.racon.com.br/racon/historia
      </a>
    </p>
    <p className="text-xl text-center">
      <strong>A Racon</strong>
    </p>
    <p className="md:text:left text-justify">
      A Racon Consórcios é a marca da Randon Administradora de Consórcios. Sob
      essa marca, iniciou operações em 1991, no segmento de consórcios para a
      aquisição de veículos e, em 1993, agregou o segmento de imóveis.
    </p>
    <p className="md:text:left text-justify">
      A Randon Consórcios presta serviços financeiros, por meio da administração
      de consórcios, para outros cinco segmentos, além da Racon Consórcios. São
      eles: implementos rodoviários, com o Consórcio Nacional RANDON; máquinas e
      equipamentos agrícolas, com o Consórcio Nacional John Deere; miniônibus,
      com o Consórcio Nacional Volare; caminhões leves, com o Consórcio Nacional
      Foton Caminhões pesados e extrapesados, com o Consórcio Nacional DAF,
      todos eles em parceria com os fabricantes das referidas marcas.
    </p>
    <p className="md:text:left text-justify">
      A empresa é uma das líderes no mercado de consórcios de pesados e está
      entre as maiores administradoras de consórcios de imóveis. Sua atuação no
      mercado baseia-se em três premissas: relacionamento, flexibilidade e
      credibilidade. Por isso, dispõe dos melhores recursos humanos e
      tecnológicos de atendimento aos clientes e sistema próprio de gestão do
      negócio, dentre outros diferenciais, que garantem aos consorciados,
      confiabilidade, segurança e transparência na administração dos seus
      investimentos.
    </p>
    <p className="md:text:left text-justify">
      Por meio de uma rede própria de franquias, a Racon possui cerca de 130
      pontos de vendas e está presente em 10 estados brasileiros, aliando a
      economia, o planejamento e as demais vantagens do consórcio à aquisição de
      imóveis e veículos.
    </p>
    <p className="flex md:flex-row flex-col gap-16 justify-center">
      {arrResults.map((result) => {
        return (
          <div key={result.id} className="text-center text-white">
            <h1 className="text-5xl font-poppins">{result.number}</h1>
            <h3 className="text-md font-light uppercase">{result.text}</h3>
          </div>
        );
      })}
    </p>
  </div>
);

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="relative about" id="sobre">
        <div
          className="top-0 h-[100vh] md:h-[85vh] bg-top md:bg-bottom bg-cover absolute"
          style={{
            backgroundImage: "url('/assets/sala/sala-capa.jpg')",
            backgroundRepeat: "no-repeat",
            // backgroundClip: "content-box",
            // backgroundAttachment: "fixed",
            opacity: 0.3,
            width: "100%",
            height: "100%",
            WebkitBackgroundSize: "auto",
            MozBackgroundSize: "auto",
            OBackgroundSize: "auto",
          }}
        ></div>
        <div className="m-auto">
          <div className="flex items-center flex-wrap md:px-0">
            <div className="relative lg:w-full lg:min-h-[40rem] lg:py-16 xl:py-16 lg:px-24 py-10 xl:px-32 container mx-auto w-full">
              <Title title="Sobre Nós" colorTitle="text-degrade" />
              <div className="gap-16 items-center  lg:grid lg:grid-cols-2 lg:py-6 lg:px-6 px-6">
                <div className="text gray-500 sm:text-lg ">
                  <h2 className="text-3xl font-corporate text-center mb-8">
                    Invista com Sabedoria e Segurança
                  </h2>
                  <h3
                    variant="h3"
                    className={`mb-4 text-4xl text-gray-900 text-white text-center ${tangerine.className}`}
                  >
                    <i>A melhor maneira de prever o futuro é criá-lo!</i>
                  </h3>

                  <div className="text-left font-poppins font-normal">
                    <p className="mb-4">
                      Temos como propósito disseminar os princípios da Educação
                      Financeira incentivando as pessoas a investirem seu
                      dinheiro de forma inteligente.
                    </p>
                    <p className="mb-4">
                      Oferecemos aos nossos clientes uma assessoria
                      personalizada onde os auxiliamos na gestão e aumento
                      Patrimonial, criação de Renda Passiva e acompanhamento
                      Tributário através de soluções inteligentes e inovadoras.
                    </p>
                    <p className="mb-4">
                      Nosso grande diferencial tem sido a elaboração de
                      estratégias personalizadas utilizando um investimento,
                      simples, seguro e rentável. Através disso, temos ajudado
                      muitas pessoas a alcançarem o sucesso dos grandes
                      investidores.
                    </p>
                    <p>
                      Sediados na região central Maringá PR, contamos com uma
                      ampla e confortável estrutura para melhor atender nossos
                      amigos e clientes.
                    </p>
                  </div>
                  <p
                    className="no-underline hover:underline text-left  cursor-pointer my-8"
                    onClick={() => setShow(!show)}
                  >
                    <i>Ler mais</i>
                  </p>
                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8 ">
                  <div className="flex flex-col items-end px-3">
                    <img
                      className="object-cover mb-6 rounded shadow-lg h-32 w-32 md:h-48 md:w-48 xl:h-56 xl:w-56"
                      src="/assets/sala/sala12.jpeg"
                      alt=""
                    />
                    <img
                      className="object-cover rounded shadow-lg w-28 h-28 sm:h-32 sm:w-32 xl:h-40 xl:w-40"
                      src="/assets/sala/10.jpg"
                      alt=""
                    />
                  </div>
                  <div className="px-3">
                    <img
                      className="object-cover rounded shadow-lg w-48 h-48 sm:h-64 sm:w-64 xl:h-80 xl:w-80"
                      src="/assets/sala/IMG_0718.jpeg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-full my-10 text-center px-5">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=8O7PEJnHCd0"
                  light={false}
                  config={{
                    youtube: {
                      playerVars: { showinfo: 1 },
                    },
                  }}
                />
              </div>
              <h1
                className={`mb-6 text-6xl text-center ${tangerine.className}`}
              >
                O futuro já é presente...!
              </h1>
            </div>
          </div>

          {show && (
            <div
              className="min-h-screen fixed py-12 bg-zinc-700/30 backdrop-blur-md transition duration-150 ease-in-out z-90 top-0 right-0 bottom-0 left-0"
              style={{ zIndex: 9999999999999 }}
              id="modal"
            >
              <div className="container mx-auto w-11/12 md:w-2/3 ">
                <div className="relative overflow-y-auto h-[38rem] py-8 px-8 md:px-16 bg-zinc-900  shadow-md rounded border border-gray-400">
                  {text}
                  <div
                    className="cursor-pointer fixed top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 hover:text-gray-500 transition duration-150 ease-in-out"
                    onClick={() => setShow(!show)}
                  >
                    <IconClose />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
