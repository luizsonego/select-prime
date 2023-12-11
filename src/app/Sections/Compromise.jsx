"use client";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import Title from "../Components/Title";

const arrCard = [
  {
    title: "Missão",
    description:
      "Disseminar os princípios da Educação Financeira incentivando nossos clientes a investirem seu dinheiro de forma segura e inteligente pensando sempre no futuro e assim proporcionar-lhes Tempo para que possam desfrutar do que realmente tem valor em vossas vidas!",
    icon: "",
    text: "",
    background: "https://www.ugreen.com.br/wp-content/uploads/2016/12/alvo.png",
  },
  {
    title: "Visão",
    description:
      "Consolidar o trabalho e esforço da nossa missão, conectando pessoas e propósitos e sendo referência no mercado, promovendo Liberdade e Tempo de qualidade aos nossos colaboradores e clientes.",
    icon: "",
    text: "",
    background: "",
  },
  {
    title: "Valores",
    description: "Ética, confiabilidade, engajamento e rentabilidade.",
    icon: "",
    text: "",
    background: "",
  },
];

const Compromise = () => {
  return (
    <>
      <div className="relative">
        <div className="m-auto">
          <div className="flex items-center flex-wrap md:px-0">
            <div className="relative lg:w-full lg:min-h-[40rem] lg:pt-24 xl:pt-24 lg:px-24 xl:px-32 py-10 bg-black">
              <Title title="Compromisso" colorTitle="text-degrade" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 justify-center mx-3">
                {arrCard.map((item, index) => (
                  <div key={index + 1} className="divide-x">
                    <Card
                      variant="filled"
                      className="w-full h-64 py-4 px-8 rounded-lg bg-no-repeat bg-zinc-900 backdrop-opacity-90 bg-scroll shadow shadow-indigo-500/20 hover:shadow-zinc-500/40 transition-all"
                      // style={{
                      //   backgroundImage: `url("${item.background}")`,
                      // }}
                    >
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 mb-1 rounded-none  pb-5 text-white"
                      >
                        <p className="font-normal text-3xl text-center font-corporate">
                          {item.title}
                        </p>
                      </CardHeader>
                      <CardBody className="p-0">
                        <p className="font-normal text-white">
                          {item.description}
                        </p>
                      </CardBody>
                    </Card>
                  </div>
                ))}
              </div>
              <section className="text-gray-300 body-font">
                <div className="container px-5 py-24 mx-auto">
                  <div className="xl:w-10/12 lg:w-3/4 w-full mx-auto text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block w-8 h-8 text-gray-400 mb-8"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p className="leading-relaxed text-xl">
                      <i>
                        {" "}
                        {/**font manuscrito */}A filisofia dos ricos e dos
                        pobres é a seguinte: Os ricos investem seu dinheiro e
                        gastam o que sobrou. Os pobres gastam seu dinheiro e
                        depois investem o que sobrou.
                      </i>
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-gray-500 mt-8 mb-6"></span>
                    <h2 className="text-gray-100 font-medium title-font tracking-wider text-sm">
                      <i>Robert Kiyosaki</i>
                    </h2>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compromise;
