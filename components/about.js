import { useState } from "react";
import Container from "./container";
import { Tangerine } from "next/font/google";

const tangerine = Tangerine({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

import imageOne from "../public/img/office/sala12.jpeg";
import imageTwo from "../public/img/office/10.jpg";
import imageThree from "../public/img/office/IMG_0718.jpeg";
import Image from "next/image";
import Modal from "./modal";

const arrResults = [
  {
    id: 1,
    text: "em créditos distribuídos",
    number: "",
  },
  {
    id: 2,
    text: "CLIENTES CONTEMPLADOS",
    number: "",
  },
  {
    id: 3,
    text: "cotas comercializadas",
    number: "",
  },
];

const About = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap mt-14 px-5">
        <div className={`flex flex-wrap items-start w-full lg:w-1/2 `}>
          <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 ">
            <h1
              style={{
                color: "#fff",
                fontSize: 30,
                fontWeight: 700,
                marginBottom: 10,
              }}
              className="font-corporate"
            >
              Invista com Sabedoria e Segurança
            </h1>
            <h2
              style={{
                color: "#fff",
                fontWeight: 500,
                marginBottom: 10,
              }}
              className={`${tangerine.className} text-4xl`}
            >
              A melhor maneira de prever o futuro é criá-lo!
            </h2>
            <p
              style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: 400,
                marginBottom: 10,
              }}
              className="font-poppins"
            >
              Temos como propósito disseminar os princípios da Educação
              Financeira incentivando as pessoas a investirem seu dinheiro de
              forma inteligente.
            </p>
            <p
              style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: 400,
                marginBottom: 10,
              }}
              className="font-poppins"
            >
              Oferecemos aos nossos clientes uma assessoria personalizada onde
              os auxiliamos na gestão e aumento Patrimonial, criação de Renda
              Passiva e acompanhamento Tributário através de soluções
              inteligentes e inovadoras.
            </p>
            <p
              style={{ color: "#fff", fontSize: 16, fontWeight: 400 }}
              className="font-poppins"
            >
              Nosso grande diferencial tem sido a elaboração de estratégias
              personalizadas utilizando um investimento, simples, seguro e
              rentável. Através disso, temos ajudado muitas pessoas a alcançarem
              o sucesso dos grandes investidores.
            </p>
            <p
              style={{ color: "#fff", fontSize: 16, fontWeight: 400 }}
              className="font-poppins"
            >
              Sediados na região central Maringá PR, contamos com uma ampla e
              confortável estrutura para melhor atender nossos amigos e
              clientes.
            </p>
            <p
              style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: 400,
                cursor: "pointer",
              }}
              className="font-poppins"
              onClick={openModal}
            >
              Ler Mais
            </p>
          </div>
        </div>
        <div className={`flex items-center justify-center w-full lg:w-1/2`}>
          <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
            <div className="flex items-center justify-center -mx-4 lg:pl-8 ">
              <div className="flex flex-col items-end px-3">
                <Image
                  src={imageOne}
                  width="521"
                  height="auto"
                  alt="Benefits"
                  className={
                    "object-cover mb-6 rounded shadow-lg h-32 w-32 md:h-48 md:w-48 xl:h-56 xl:w-56"
                  }
                  placeholder="blur"
                  // blurDataURL={data.image.src}
                />
                <Image
                  src={imageTwo}
                  width="521"
                  height="auto"
                  alt="Benefits"
                  className={
                    "object-cover rounded shadow-lg w-28 h-28 sm:h-32 sm:w-32 xl:h-40 xl:w-40"
                  }
                  placeholder="blur"
                  // blurDataURL={image.src}
                />
              </div>
              <div className="px-3">
                <Image
                  src={imageThree}
                  width="521"
                  height="auto"
                  alt="Benefits"
                  className={
                    "object-cover rounded shadow-lg w-48 h-48 sm:h-64 sm:w-64 xl:h-80 xl:w-80"
                  }
                  placeholder="blur"
                  // blurDataURL={data.image.src}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Modal
        content={
          <div className="flex gap-3 flex-col text-black">
            <h2 className="text-2xl text-center text-black">
              <strong>A Select Prime</strong>
            </h2>
            <p className="md:text:left text-justify">
              Sediados na região central Maringá PR, somos representantes
              exclusivos da Racon Consórcios, uma marca da RANDON Administradora
              de Consórcios mais uma empresa do grupo RANDONCORP.
            </p>
            <p className="flex md:flex-row flex-col gap-4 text-cyan-800">
              <a
                className="no-underline hover:underline"
                href="https://www.randoncorp.com/pt/negocios/ "
              >
                www.randoncorp.com/pt/negocios
              </a>
            </p>
            <p className="flex md:flex-row flex-col gap-4 text-cyan-800">
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
              A Racon Consórcios é a marca da Randon Administradora de
              Consórcios. Sob essa marca, iniciou operações em 1991, no segmento
              de consórcios para a aquisição de veículos e, em 1993, agregou o
              segmento de imóveis.
            </p>
            <p className="md:text:left text-justify">
              A Randon Consórcios presta serviços financeiros, por meio da
              administração de consórcios, para outros cinco segmentos, além da
              Racon Consórcios. São eles: implementos rodoviários, com o
              Consórcio Nacional RANDON; máquinas e equipamentos agrícolas, com
              o Consórcio Nacional John Deere; miniônibus, com o Consórcio
              Nacional Volare; caminhões leves, com o Consórcio Nacional Foton
              Caminhões pesados e extrapesados, com o Consórcio Nacional DAF,
              todos eles em parceria com os fabricantes das referidas marcas.
            </p>
            <p className="md:text:left text-justify">
              A empresa é uma das líderes no mercado de consórcios de pesados e
              está entre as maiores administradoras de consórcios de imóveis.
              Sua atuação no mercado baseia-se em três premissas:
              relacionamento, flexibilidade e credibilidade. Por isso, dispõe
              dos melhores recursos humanos e tecnológicos de atendimento aos
              clientes e sistema próprio de gestão do negócio, dentre outros
              diferenciais, que garantem aos consorciados, confiabilidade,
              segurança e transparência na administração dos seus investimentos.
            </p>
            <p className="md:text:left text-justify">
              Por meio de uma rede própria de franquias, a Racon possui cerca de
              130 pontos de vendas e está presente em 10 estados brasileiros,
              aliando a economia, o planejamento e as demais vantagens do
              consórcio à aquisição de imóveis e veículos.
            </p>
            <p className="flex md:flex-row flex-col gap-16 justify-center">
              {/* {arrResults.map((result) => {
                return (
                  <div key={result.id} className="text-center text-white">
                    <h1 className="text-5xl font-poppins">{result.number}</h1>
                    <h3 className="text-md font-light uppercase">
                      {result.text}
                    </h3>
                  </div>
                );
              })} */}
            </p>
          </div>
        }
        isOpen={isOpen}
        closeModal={closeModal}
        style={{ position: "absolute" }}
      />
    </>
  );
};

export default About;
