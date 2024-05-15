import React, { Fragment } from "react";
import Container from "./container";
import { Image } from "next/image";

const Info = (props) => {
  const { data } = props;

  return (
    <Container className="w-full pb-20 lg:gap-10 lg:flex-nowrap">
      <div className={`grid gap-4 mt-5 md:px-0 px-5 ${props.grid}`}>
        {data.bullets.map((item, index) => (
          <Fragment key={index + 1}>
            {!item.image ? (
              <Card
                title={item.title}
                description={item.description}
                icon={item.icon}
                fontSize={props.fontSize}
              />
            ) : (
              <img src={item.image.src} className="w-full" alt="" />
            )}
          </Fragment>
        ))}
      </div>
    </Container>
  );
};

function Card(props) {
  return (
    <div className="w-full p-8 bg-zinc-800 rounded-lg relative shadow-md hover:shadow-xl">
      <>
        {props.icon && <Icon icon={props.icon} />}
        <Title title={props.title} fontSize={props.fontSize} />
        <Description description={props.description} />
      </>
    </div>
  );
}

function Title(props) {
  return (
    <p
      className="m-0 mb-8 rounded-none pb-8 text-center grid justify-items-stretch font-corporate font-extrabold border-b-2 border-orange-400"
      style={{ fontSize: `${props.fontSize}px` }}
    >
      {props.title}
    </p>
  );
}

function Description(props) {
  return (
    <div className="font-normal text-white text-center">
      {props.description}
    </div>
  );
}

function Icon(props) {
  return <div className="flex justify-center mb-5">ICON</div>;
}

function ImageBg(props) {
  const { image } = props;
  return (
    <Image
      src={image}
      className={"w-full object-cover h-72 object-center block"}
      alt=""
      loading="eager"
      placeholder="blur"
      blurDataURL={image.src}
    />
  );
}

export default Info;
