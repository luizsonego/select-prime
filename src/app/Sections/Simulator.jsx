import React from "react";
import RangeSlide from "../Components/RangeSlide";

const Simulator = () => {
  return (
    <>
      <div className="relative" id="simule">
        <div className="m-auto">
          <div className="flex items-center flex-wrap md:px-0">
            <div className="relative lg:w-full lg:min-h-[30rem] lg:py-12 xl:py-20 lg:px-24 xl:px-32 bg-white">
              <h1
                className={`text-strong  text-5xl  z-50 font-corporate text-center`}
                style={{ fontWeight: "500" }}
              >
                <span className="text-black">Simule seu investimento</span>
              </h1>
              <h3 className="my-6 text-xl text-center text-black">
                Faça uma simulação do seu aporte mensal e saiba o valor da carta
                de crédito que você teria acesso.
              </h3>
              <p className="mb-6 text-lg text-center text-black">
                Qual valor você poderia investir mensalmente sem comprometer seu
                orçamento mensal?
              </p>
              <RangeSlide />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Simulator;
