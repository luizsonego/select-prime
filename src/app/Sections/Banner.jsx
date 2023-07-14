import { IconBook, IconChecked, IconPhone } from "../Components/Icons";

const arrImage = [
  {
    title: "CONTATE-NOS",
    text: "Entre em contato com nossos Assessores para avaliarmos seu perfil de investidor e escolhermos a melhor estratégia de investimento pra você.",
    icon: <IconPhone size={3} color="#fff" />,
    img: "",
  },
  {
    title: "CONHEÇA NOSSO PORTFÓLIO",
    text: "Iremos te apresentar o que há de mais seguro e rentável quando tratamos de Investimentos.",
    icon: <IconBook size={3} color="#fff" />,
    img: "",
  },
  {
    title: "AUMENTE SEU PATRIMÔNIO",
    text: "Agora que definimos através do seu perfil qual a melhor estratégia para o seu investimento, basta seguirmos acompanhando os rendimentos e nosso objetivo principal, seu aumento Patrimonial!",
    icon: <IconChecked size={3} color="#fff" />,
    img: "",
  },
  {
    title: "",
    text: "",
    icon: "",
    img: "/assets/mulher.png",
  },
];
const Banner = () => {
  return (
    <div className="relative">
      {/*  */}
      {/* <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0 py-10 w-full">
        <svg
          viewBox="0 0 88 88"
          className="w-full max-w-screen-xl text-gray-800"
        >
          <circle fill="#aaa" fillOpacity="0.4" cx="44" cy="44" r="15.5" />
          <circle fillOpacity="0.1" fill="#aaa" cx="44" cy="44" r="44" />
          <circle fillOpacity="0.1" fill="#aaa" cx="44" cy="44" r="37.5" />
          <circle fillOpacity="0.1" fill="#aaa" cx="44" cy="44" r="29.5" />
          <circle fillOpacity="0.1" fill="#aaa" cx="44" cy="44" r="22.5" />
        </svg>
      </div> */}
      <div className="m-auto bg-white">
        <div className="flex items-center flex-wrap md:px-0">
          <div className="w-full lg:w-full lg:py-16 xl:py-16 lg:px-24 xl:px-32 px-10 z-10">
            {/* <div class="flex flex-wrap -m-4"> */}
            <div class="grid gap-10 md:grid-cols-4 mx-auto w-full container mt-10 mb-10">
              {arrImage.map((b, index) => {
                return (
                  <div className="" key={index + 1}>
                    {b.img ? (
                      <div class="bg-zinc-900 rounded h-96 ">
                        <div class=" text-center">
                          <img
                            src={b.img}
                            className="w-full overflow-hidden h-96 rounded-b object-cover"
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <div class="p-8 bg-zinc-900 rounded h-96">
                          <div class="mb-4 text-center">
                            <div className="flex justify-center mb-5">
                              {b.icon}
                            </div>
                            <p className="text-md font-normal uppercase text-white">
                              {b.title}
                            </p>
                          </div>
                          <p className="font-normal text-white text-center">
                            {b.text}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
