"use client";

import React, { useState } from "react";
import { tangerine } from "../fonts";

const text = (
  <>
    <p>
      <strong>A Select Prime</strong>
    </p>
    <p>
      Sediados na região central Maringá PR, somos representantes exclusivos da
      Racon Consórcios, uma marca da RANDON Administradora de Consórcios mais
      uma empresa do grupo RANDONCORP.
    </p>
    <p>
      https://www.randoncorp.com/pt/negocios/ <br />
      https://www.racon.com.br/racon/historia
    </p>
    <p>
      <strong>A Racon</strong>
    </p>
    <p>
      A Racon Consórcios é a marca da Randon Administradora de Consórcios. Sob
      essa marca, iniciou operações em 1991, no segmento de consórcios para a
      aquisição de veículos e, em 1993, agregou o segmento de imóveis.
    </p>
    <p>
      A Randon Consórcios presta serviços financeiros, por meio da administração
      de consórcios, para outros cinco segmentos, além da Racon Consórcios. São
      eles: implementos rodoviários, com o Consórcio Nacional RANDON; máquinas e
      equipamentos agrícolas, com o Consórcio Nacional John Deere; miniônibus,
      com o Consórcio Nacional Volare; caminhões leves, com o Consórcio Nacional
      Foton Caminhões pesados e extrapesados, com o Consórcio Nacional DAF,
      todos eles em parceria com os fabricantes das referidas marcas.
    </p>
    <p>
      A empresa é uma das líderes no mercado de consórcios de pesados e está
      entre as maiores administradoras de consórcios de imóveis. Sua atuação no
      mercado baseia-se em três premissas: relacionamento, flexibilidade e
      credibilidade. Por isso, dispõe dos melhores recursos humanos e
      tecnológicos de atendimento aos clientes e sistema próprio de gestão do
      negócio, dentre outros diferenciais, que garantem aos consorciados,
      confiabilidade, segurança e transparência na administração dos seus
      investimentos.
    </p>
    <p>
      Por meio de uma rede própria de franquias, a Racon possui cerca de 130
      pontos de vendas e está presente em 10 estados brasileiros, aliando a
      economia, o planejamento e as demais vantagens do consórcio à aquisição de
      imóveis e veículos. + de 23 Bi em créditos distribuídos + de 159 mil
      clientes contemplados; + de 256 mil cotas comercializadas.
    </p>
  </>
);

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="relative about" id="sobre">
        <div
          className="absolute"
          style={{
            background: "url('/assets/sala/sala-capa.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            backgroundPositionY: "50%",
            backgroundAttachment: "fixed",
            opacity: 0.3,
            width: "100%",
            height: "100%",
          }}
        ></div>
        <div className="m-auto">
          <div className="flex items-center flex-wrap md:px-0">
            <div className="relative lg:w-full lg:min-h-[40rem] lg:py-16 xl:py-16 lg:px-24 xl:px-32">
              <h1
                className={`text-strong  text-5xl z-50 font-corporate text-center mb-10`}
                style={{ fontWeight: "500" }}
              >
                <span className="text-degrade">Sobre Nós</span>
              </h1>
              <div className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-6 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  <h5 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white text-center font-corporate">
                    Invista com Sabedoria e Segurança
                  </h5>
                  <h3
                    variant="h3"
                    className={`mb-4 text-4xl text-gray-900 dark:text-white text-center ${tangerine.className}`}
                  >
                    <i>A Melhor Maneira de prever o futuro é criá-lo!</i>
                  </h3>

                  <div className="text-justify font-poppins font-normal">
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
                  <p onClick={() => setShow(!show)}>Ler mais</p>
                  {/* <p onClick={handleOpen}>Ler mais</p> */}
                </div>
                {/* <div className="grid grid-cols-2 gap-4 mt-8"> */}
                <div className="flex items-center justify-center -mx-4 lg:pl-8 ">
                  <div className="flex flex-col items-end px-3">
                    <img
                      className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                      src="/assets/sala/sala12.jpeg"
                      alt=""
                    />
                    <img
                      className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                      src="/assets/sala/10.jpg"
                      alt=""
                    />
                  </div>
                  <div className="px-3">
                    <img
                      className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                      src="/assets/sala/IMG_0718.jpeg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-full  my-10 text-center ">
                {/* <ReactPlayer
                  url="https://www.youtube.com/watch?v=8O7PEJnHCd0"
                  light={false}
                  config={{
                    youtube: {
                      playerVars: { showinfo: 1 },
                    },
                  }}
                /> */}
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
              className="min-h-screen fixed py-12 bg-gray-700 dark:bg-gray-900 transition duration-150 ease-in-out z-10 overflow-hidden top-0 right-0 bottom-0 left-0"
              id="modal"
            >
              <div role="alert" className="container mx-auto w-11/12 md:w-2/3 ">
                <div className="relative py-8 px-8 md:px-16 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400">
                  {text}

                  <div
                    className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 transition duration-150 ease-in-out"
                    onClick={() => setShow(!show)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Close"
                      className="icon icon-tabler icon-tabler-x"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
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
