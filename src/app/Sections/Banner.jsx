const arrImage = [
  {
    title: "CONTATE-NOS",
    text: "Entre em contato com nossos Assessores para avaliarmos seu perfil de investidor e escolhermos a melhor estratégia de investimento pra você.",
    icon: "",
    img: "",
  },
  {
    title: "CONHEÇA NOSSO PORTFÓLIO",
    text: "Iremos te apresentar o que há de mais seguro e rentável quando tratamos de Investimentos.",
    icon: "",
    img: "",
  },
  {
    title: "AUMENTE SEU PATRIMÔNIO",
    text: "Agora que definimos através do seu perfil qual a melhor estratégia para o seu investimento, basta seguirmos acompanhando os rendimentos e nosso objetivo principal, seu aumento Patrimonial!",
    icon: "",
    img: "",
  },
];
const Banner = () => {
  return (
    <div className="relative">
      {/*  */}
      <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
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
      </div>
      {/* <div
        className="absolute"
        style={{
          backgroundImage: "url('/assets/times-square.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundAttachment: "fixed",
          opacity: 0.6,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      ></div> */}
      <div className="m-auto bg-white">
        <div className="flex items-center flex-wrap md:px-0">
          <div className="container lg:w-full  lg:py-16 xl:py-16 lg:px-24 xl:px-32 z-10">
            {/* <div class="flex flex-wrap -m-4"> */}
            <div class="grid gap-10 md:grid-cols-3 sm:mx-auto">
              {arrImage.map((b, index) => {
                return (
                  <div className="" key={index + 1}>
                    <div class="p-8 bg-zinc-900 rounded h-80">
                      <div class="mb-4 text-center">
                        <p class="text-xl font-medium tracking-wide text-white">
                          {b.title}
                        </p>
                      </div>
                      <p className="text-justify">{b.text}</p>
                    </div>
                    <div class="w-11/12 h-2 mx-auto bg-zinc-900 rounded-b opacity-75" />
                    <div class="w-10/12 h-2 mx-auto bg-zinc-900 rounded-b opacity-50" />
                    <div class="w-9/12 h-2 mx-auto bg-zinc-900 rounded-b opacity-25" />
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
