"use client";

import ReactPlayer from "react-player";
import Title from "../Components/Title";

const arrTestimonials = [
  {
    name: "Ester Souza",
    image: "/assets/peoples/ester.jpeg",
    text: "A escolha pela Select Prime, ocorreu pela excelência no atendimento,  competência, transparência e clareza na proposta apresentada,  passando a confiabilidade de adquirir o Consórcio Racon, entre outras inúmeras opções de Investimentos.",
  },
  {
    name: "Viridian Zadinello",
    image: "/assets/peoples/viridian.jpeg",
    text: "Equipe comprometida com a satisfação do cliente, me orientam em cada etapa do consórcio, estou muito satisfeito com o serviço.",
  },
  {
    name: "David Souza",
    image: "/assets/peoples/david.jpeg",
    text: "Através da Select Prime conheci um jeito diferente de investir, uma proposta muito bem estruturada somada a segurança do Investimento e profissionalismo dos assessores foram os pontos fundamentais para que me tornasse cliente. Eu Recomendo!",
  },
  {
    name: "Nayara Lima",
    image: "/assets/peoples/nayara.jpeg",
    text: "Há algum tempo comecei investir em consórcio imobiliário, mas com a assessoria da Select Prime eu aprendi a organizar minhas finanças, ter estratégias e assim ficando ainda mais fácil realizar meus sonhos de forma segura e inteligente.",
  },
  {
    name: "Ackley Serrano",
    image: "/assets/peoples/ackley.jpeg",
    text: "Invisto em Consórcio Imobiliário há algum tempo e agora com a assessoria da Select Prime ficou ainda mais fácil atingir meus objetivos através de estratégias personalizadas as quais potencializaram a rentabilidade de meus investimentos de forma inteligente e segura.",
  },
];

const Testimonials = () => {
  return (
    <>
      <div className="relative " id="depoimentos">
        <div className=" m-auto">
          <div className="flex items-center flex-wrap md:px-0">
            <div className="relative lg:w-full lg:min-h-[35rem] lg:py-16 xl:py-16 lg:px-24 xl:px-32 py-10 bg-white">
              <Title title="Depoimentos" colorTitle="text-black" />
              <section className="text-gray-600 body-font">
                <div className="px-5 py-5 mx-auto">
                  <div className="flex flex-wrap -m-4 justify-center">
                    {arrTestimonials.map((testimonial, index) => {
                      return (
                        <div key={index + 1} className="p-4 md:w-1/2 w-full">
                          <div className="h-full bg-white p-8 rounded-md border border-1 border-gray-200">
                            <svg
                              fill="currentColor"
                              className="block w-5 h-5 text-gray-400 mb-4"
                              viewBox="0 0 975.036 975.036"
                            >
                              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed mb-6 text-justify">
                              {testimonial.text}
                            </p>
                            <a className="inline-flex items-center">
                              <img
                                alt={`Imagem Depoimento ${testimonial.name}`}
                                title={`Imagem Depoimento ${testimonial.name}`}
                                src={testimonial.image}
                                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                              />
                              <span className="flex-grow flex flex-col pl-4">
                                <span className="title-font font-medium text-gray-500">
                                  {testimonial.name}
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="container mx-auto py-16 px-8">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
              <div>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=oBpbZhNt5Ps"
                  light={false}
                  width="auto"
                />
              </div>
              <div>
                <h1
                  variant="h1"
                  className={`font-corporate text-strong text-3xl z-50 font-corporate mb-4`}
                  style={{ fontWeight: "500" }}
                >
                  <span className="text-white text-center">Depoimento</span>
                  <br />
                </h1>
                <h3
                  variant="h1"
                  className={`text-strong text-lg z-50 text-left font-corporate mb-4`}
                  style={{ fontWeight: "500" }}
                >
                  <span className="text-white text-left">
                    <strong>Cliente contemplado:</strong> David Souza
                  </span>
                </h3>
                <p variant="p" className={`z-50 font-corporate text-left mb-4`}>
                  Utilizando da Estratégia de Alavancagem de Capital com
                  Consórcio Imobiliário, o cliente foi contemplado 2 vezes num
                  prazo de apenas 8 meses, obtendo um resultado aproximado de
                  450% sobre o capital investido. Tudo isso através da
                  Assessoria da nossa Equipe. <br />
                  <br /> O que você está esperando para fazer como ele? <br />
                  <br />
                  Faça como o David e venha você também para a{" "}
                  <strong>
                    <i>Select Prime Financial Solutions.</i>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
