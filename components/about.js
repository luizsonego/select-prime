import { useState } from "react";
import Container from "./container";
import { tangerine } from "../pages/fonts";
// import { tangerine } from "../pages/fonts";

import imageOne from "../public/img/office/sala12.jpeg";
import imageTwo from "../public/img/office/10.jpg";
import imageThree from "../public/img/office/IMG_0718.jpeg";
import Image from "next/image";

const About = () => {
  return (
    <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap mt-14 px-5">
      <div className={`flex flex-wrap items-start w-full lg:w-1/2 `}>
        <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
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
            Temos como propósito disseminar os princípios da Educação Financeira
            incentivando as pessoas a investirem seu dinheiro de forma
            inteligente.
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
            Oferecemos aos nossos clientes uma assessoria personalizada onde os
            auxiliamos na gestão e aumento Patrimonial, criação de Renda Passiva
            e acompanhamento Tributário através de soluções inteligentes e
            inovadoras.
          </p>
          <p
            style={{ color: "#fff", fontSize: 16, fontWeight: 400 }}
            className="font-poppins"
          >
            Nosso grande diferencial tem sido a elaboração de estratégias
            personalizadas utilizando um investimento, simples, seguro e
            rentável. Através disso, temos ajudado muitas pessoas a alcançarem o
            sucesso dos grandes investidores.
          </p>
          <p
            style={{ color: "#fff", fontSize: 16, fontWeight: 400 }}
            className="font-poppins"
          >
            Sediados na região central Maringá PR, contamos com uma ampla e
            confortável estrutura para melhor atender nossos amigos e clientes.
          </p>
          <p
            style={{ color: "#fff", fontSize: 16, fontWeight: 400 }}
            className="font-poppins"
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
  );
};

export default About;
