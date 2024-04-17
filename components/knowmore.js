import { useState } from "react";
import Container from "./container";
import Image from "next/image";
import time from "../public/img/time.jpeg";

const KnowMore = (props) => {
  const { data } = props;
  return (
    <Container
      className={`flex flex-wrap lg:gap-10 lg:flex-nowrap mt-14 px-5 ${props.className}`}
    >
      <div className={`flex flex-wrap items-start w-full lg:w-1/2 `}>
        <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20  ">
          <Sub sub={data.sub} />
          <Title title={data.title} />
          <div className="border border-0 border-3 w-16 h-1 mb-3 rounded mt-3 degrade-primary"></div>
          <Desc desc={data.desc} />

          {data.link && (
            <p className="no-underline hover:underline text-left text-white cursor-pointer my-8">
              <a href={data.link}>
                {" "}
                <i>Ler mais</i>
              </a>
            </p>
          )}
        </div>
      </div>
      <div className={`flex items-center justify-center w-full lg:w-1/2`}>
        <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
          <Image
            src={data.image}
            className={
              "aspect-[1/1] object-cover mx-auto md:left-0 object-bottom block rounded-lg w-[26rem]"
            }
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
        </div>
      </div>
    </Container>
  );
};

function Title(props) {
  return (
    <h1
      style={{
        color: "#fff",
      }}
      className="text-3xl font-corporate"
    >
      {props.title}
    </h1>
  );
}
function Sub(props) {
  return (
    <h2
      style={{
        color: "#fff",
      }}
      className="text-sm"
    >
      {props.sub}
    </h2>
  );
}

function Desc(props) {
  return (
    <p
      style={{
        color: "#fff",
        fontSize: 16,
        fontWeight: 400,
        marginBottom: 10,
      }}
    >
      {props.desc}
    </p>
  );
}

export default KnowMore;
