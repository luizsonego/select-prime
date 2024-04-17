import React from "react";
import Container from "./container";

const Results = (props) => {
  const { data } = props;
  return (
    <Container className="pb-20">
      <div className="flex flex-wrap md:flex-row flex-col justify-center gap-5 md:justify-around w-full">
        {data.bullets.map((item, index) => (
          <Numbers
            key={index}
            number={item.number}
            desc={item.desc}
            prefix={item.prefix}
            suffix={item.suffix}
          />
        ))}
      </div>
    </Container>
  );
};

function Numbers(props) {
  return (
    <div className="text-center text-white">
      <h1 className="text-5xl font-poppins">
        <p>
          {props.prefix}
          <span>{props.number}</span>
          {props.suffix}
        </p>
        {/* {props.number} */}
      </h1>
      <h3 className="text-md font-light">{props.desc}</h3>
    </div>
  );
}

export default Results;
