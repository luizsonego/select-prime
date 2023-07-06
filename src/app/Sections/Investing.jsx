import {
  faArrowRightArrowLeft,
  faBuildingShield,
  faChartLine,
  faLock,
  faPeopleLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Title from "../Components/Title";
const arrInvest = [
  {
    icon: (
      <FontAwesomeIcon
        icon={faArrowRightArrowLeft}
        className="fa-3x text-gray-300 svg-icon"
        transform="rotate--40"
      />
    ),
    text: "Equalize seus investimentos",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faChartLine}
        className="fa-3x text-gray-300 svg-icon"
      />
    ),
    text: "Ganhos Exponenciais",
  },
  {
    icon: (
      <FontAwesomeIcon icon={faLock} className="fa-3x text-gray-300 svg-icon" />
    ),
    text: "Segurança",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faBuildingShield}
        className="fa-3x text-gray-300 svg-icon"
      />
    ),
    text: "100% Regulamentado (Bacen)",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faPeopleLine}
        className="fa-3x text-gray-300 svg-icon"
      />
    ),
    text: "Assessoria",
  },
];

const Investing = () => {
  return (
    <>
      <div className="relative" id="comece-a-investir">
        <div className="m-auto">
          <div className="flex items-center flex-wrap md:px-0 justify-center">
            <div className="relative lg:w-full lg:h-[35rem] lg:py-20 xl:py-20 lg:px-24 xl:px-24 bg-black">
              <Title title="Comece a investir" colorTitle="text-degrade" />

              <section className=" ">
                <div className="px-5 py-24 mx-auto">
                  <div className="flex flex-nowrap -m-10 text-center justify-center">
                    {arrInvest.map((invest, index) => (
                      <div
                        key={index + 1}
                        className="p-2 md:w-1/4 sm:w-1/2 w-full hover:text-gray-700"
                      >
                        <div
                          className="border-2 border-gray-800 px-4 py-6 rounded-lg 
                          hover:rounded-lg hover:border-gray-700 hover:shadow hover:shadow-gray-500/40 
                          investing-cards transition ease-in-out delay-150  duration-300"
                          style={{
                            height: "160px",
                          }}
                        >
                          {invest.icon}
                          <h2
                            className="font-poppins text-md text-gray-300 "
                            style={{ padding: "15px 0" }}
                          >
                            <span>{invest.text}</span>
                          </h2>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center">
                  <a
                    href="#contato"
                    className="font-corporate degrade-primary text-black  border-0 py-3 px-10 focus:outline-none transition-all hover:scale-105 hover:shadow-lg shadow-cyan-500/50 rounded text-lg"
                  >
                    Invista com Select Prime
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investing;
