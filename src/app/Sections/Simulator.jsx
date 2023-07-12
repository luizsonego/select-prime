import RangeSlide from "../Components/RangeSlide";
import Title from "./../Components/Title/index";

const Simulator = () => {
  return (
    <>
      <div className="relative" id="simule">
        <div className="m-auto">
          <div className="flex items-center flex-wrap md:px-0">
            <div className="relative lg:w-full lg:min-h-[30rem] lg:py-12 xl:py-20 lg:px-24 xl:px-32 py-10 bg-white">
              <Title title="Simule seu investimento" colorTitle="text-black" />
              <div className="container w-full mx-auto px-8">
                <h3 className="my-6 text-xl text-center text-black">
                  Faça uma simulação do seu aporte mensal e saiba o valor da
                  carta de crédito que você teria acesso.
                </h3>
                <p className="mb-6 text-lg text-center text-black">
                  Qual valor você poderia investir mensalmente sem comprometer
                  seu orçamento mensal?
                </p>
              </div>
              <RangeSlide />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Simulator;
