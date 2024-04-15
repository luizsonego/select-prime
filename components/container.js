import React from "react";

const Container = (props) => {
  const { style } = props;
  return (
    <div
      className={`container  mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}
      style={style}
    >
      {props.children}
    </div>
  );
};

export default Container;
