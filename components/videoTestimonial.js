import { useState } from "react";
import Container from "./container";

const VideoTestimonial = () => {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <Container className="flex flex-wrap  lg:gap-10 lg:flex-nowrap mt-14 px-5">
      <div className={`flex items-center justify-center w-full lg:w-1/2`}>
        <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
          <div
            onClick={() => setPlayVideo(!playVideo)}
            className="relative bg-indigo-300 cursor-pointer aspect-w-16 aspect-h-9 bg-gradient-to-tr from-purple-400 to-indigo-700"
            style={{
              backgroundImage:
                "url(https://i3.ytimg.com/vi/oBpbZhNt5Ps/maxresdefault.jpg)",
              backgroundSize: "cover",
            }}
          >
            {!playVideo && (
              <button className="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16  lg:w-28 lg:h-28"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Play Video</span>
              </button>
            )}
            {playVideo && (
              <iframe
                src="https://www.youtube-nocookie.com/embed/oBpbZhNt5Ps?controls=0&autoplay=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
      <div className={`flex flex-wrap items-start w-full lg:w-1/2 `}>
        <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20  ">
          <h1
            style={{
              color: "#000",
              fontSize: 30,
              fontWeight: 700,
              marginBottom: 10,
            }}
            className="font-corporate"
          >
            Depoimento
          </h1>
          <h2
            style={{
              color: "#000",
              fontSize: 22,
              fontWeight: 500,
              marginBottom: 10,
            }}
            className="font-corporate"
          >
            <strong>CLIENTE CONTEMPLADO:</strong> David Souza
          </h2>
          <p
            style={{
              color: "#000",
              fontSize: 16,
              fontWeight: 400,
              marginBottom: 10,
            }}
          >
            Utilizando da Estratégia de Alavancagem de Capital com Consórcio
            Imobiliário, o cliente foi contemplado 2 vezes num prazo de apenas 8
            meses, obtendo um resultado aproximado de 450% sobre o capital
            investido. Tudo isso através da Assessoria da nossa Equipe.
          </p>
          <p
            style={{
              color: "#000",
              fontSize: 16,
              fontWeight: 400,
              marginBottom: 10,
            }}
          >
            O que você está esperando para fazer como ele?
          </p>
          <p style={{ color: "#000", fontSize: 16, fontWeight: 400 }}>
            Faça como o David e venha você também para a{" "}
            <strong>
              <i>Select Prime Financial Solutions</i>
            </strong>{" "}
            .
          </p>
        </div>
      </div>
    </Container>
  );
};

export default VideoTestimonial;
