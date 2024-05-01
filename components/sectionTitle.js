import React from "react";
import Container from "./container";

const SectionTitle = (props) => {
  return (
    <Container
      className={`pb-20 flex w-full flex-col ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.pretitle && (
        <div className="text-sm font-bold tracking-wider text-white uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2
          className={`font-corporate max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl ${props.textColor} ${props.fontStyle}`}
          style={{ fontSize: props.fontSize }}
        >
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
          {props.children}
        </p>
      )}
    </Container>
  );
};

export default SectionTitle;
