import React from "react";
import Container from "./container";

const Investings = (props) => {
  const { data } = props;
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
        <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around w-full">
          {data.bullets.map((item, index) => (
            <Investing key={index} title={item.title} icon={item.icon}>
              {item.desc}
            </Investing>
          ))}
        </div>
      </Container>
    </>
  );
};

function Investing(props) {
  return (
    <>
      <div
        className="flex flex-1 flex-col justify-center border-2 border-gray-800 px-4 py-6 rounded-lg 
        hover:rounded-lg hover:border-gray-700 hover:shadow hover:shadow-gray-500/40 
        investing-cards transition ease-in-out delay-150  duration-300"
        style={{
          height: "160px",
        }}
      >
        {React.cloneElement(props.icon, {
          className: "w-full h-14",
        })}
        <h2
          className="font-poppins text-md text-center text-gray-300 "
          style={{ padding: "15px 0" }}
        >
          <span>{props.title}</span>
        </h2>
      </div>
      <a
        className={`mb-5 shadow-none hover:shadow-sm bottom-5 absolute font-corporate degrade-primary text-black border-0 py-2 px-8 focus:outline-none transition-all hover:scale-105 hover:shadow-lg shadow-cyan-500/50 rounded text-lg cursor-pointer font-corporate degrade-primary text-black border-0 py-2 px-8 focus:outline-none transition-all hover:scale-105 hover:shadow-lg shadow-cyan-500/50 rounded text-lg `}
      >
        Invista com a Select Prime
      </a>
    </>
  );
}

export default Investings;
