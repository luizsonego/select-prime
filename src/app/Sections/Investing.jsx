import {
  faArrowRightArrowLeft,
  faBuildingShield,
  faChartLine,
  faLock,
  faPeopleLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../Components/Title";
import ActionButton from "../Components/ActionButton";
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
            <div className="relative lg:w-full lg:h-[35rem] lg:py-20 xl:py-20 lg:px-24 xl:px-24 py-10 bg-black">
              <Title title="Comece a investir" colorTitle="text-degrade" />

              <section className=" ">
                <div className="px-5 py-16 mx-auto">
                  <div className="flex flex-wrap -m-10 text-center justify-center container mx-auto">
                    {arrInvest.map((invest, index) => (
                      <div
                        key={index + 1}
                        className="px-2 py-5 md:w-1/5 sm:w-1/2 w-1/2 hover:text-gray-700"
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
                  <ActionButton href="#contato" text="Invista com Select Prime" />
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
