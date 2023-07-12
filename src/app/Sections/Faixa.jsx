const Faixa = () => {
  return (
    <section className="pt-16  bg-gradient-to-r from-slate-500 to-zinc-800">
      <div className="container mx-auto px-8">
        <div className="flex md:flex-row flex-col-reverse ">
          <div className="flex-none w-[100%] md:w-[30rem] justify-center">
            <img
              src="/assets/faixa.png"
              alt=""
              className="top-0 bg-top md:bg-bottom h-96"
            />
          </div>
          <div className="self-center">
            <h1
              className="text-white text-strong text-2xl font-corporate content-center text-justify md:text-left"
              style={{ color: "#fff", fontWeight: "500", width: "95%" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <i>
                Quando seguimos sozinhos, podemos ir mais rápido, pois só
                depende de nós. A caminhada em conjunto é mais lenta, mas
                chegamos mais longe. A força do grupo é maior do que a soma das
                partes. O objetivo alcançado pode ser maior, pois muitos
                contribuem com aquele sonho, fica mais fácil viabilizá-lo.
              </i>
              <span className="flex justify-end right-10 text-xl mt-8">
                <i>Francis cunha</i>
              </span>
            </h1>
          </div>
        </div>
        {/* <div class="grid md:grid-cols-2 grid-cols-1 gap-8 flex-col-reverse">
          <div className="">
            <img
              src="/assets/faixa.png"
              alt=""
              className="top-0 bg-top md:bg-bottom h-[22rem] justify-center"
            />
          </div>
          <div>
            <h1
              className="text-white text-strong text-2xl font-corporate content-center"
              style={{ color: "#fff", fontWeight: "500", width: "95%" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>

              <i>
                Quando seguimos sozinhos, podemos ir mais rápido, pois só
                depende de nós. A caminhada em conjunto é mais lenta, mas
                chegamos mais longe. A força do grupo é maior do que a soma das
                partes. O objetivo alcançado pode ser maior, pois muitos
                contribuem com aquele sonho, fica mais fácil viabilizá-lo.
              </i>
              <span className="flex justify-end right-10 text-xl">
                <i>Francis cunha</i>
              </span>
            </h1>
          </div>
        </div> */}
      </div>

      {/* <div className="flex" style={{ zIndex: 10, position: "relative" }}>
        <div className="flex-none w-[30rem]"></div>
        <div className="flex-1 p-24 pt-32 ml-24 text-left">
          <h1
            className="text-white text-strong text-2xl font-corporate content-center"
            style={{ color: "#fff", fontWeight: "500", width: "95%" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="block w-5 h-5 text-gray-400 mb-4"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>

            <i>
              Quando seguimos sozinhos, podemos ir mais rápido, pois só depende
              de nós. A caminhada em conjunto é mais lenta, mas chegamos mais
              longe. A força do grupo é maior do que a soma das partes. O
              objetivo alcançado pode ser maior, pois muitos contribuem com
              aquele sonho, fica mais fácil viabilizá-lo.
            </i>
            <span className="flex justify-end right-10 text-xl">
              <i>Francis cunha</i>
            </span>
          </h1>
        </div>
      </div> */}
    </section>
  );
};

export default Faixa;
