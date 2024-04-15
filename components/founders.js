import React from "react";
import Container from "./container";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

const Founders = (props) => {
  const { data } = props;
  return (
    <Container className="flex flex-wrap lg:gap-10 pb-24 lg:flex-nowrap">
      <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-center w-full">
        {data.bullets.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            desc={item.desc}
            position={item.position}
            avatar={item.avatar}
            social={item.social}
          />
        ))}
      </div>
    </Container>
  );
};

function Card(props) {
  return (
    <div className="card-founders w-80 mx-10 rounded hidden md:block">
      <div className="header h-[25rem]">
        <Image
          width={200}
          height={200}
          src={props.avatar}
          className={"w-full object-cover"}
          alt="Hero"
          loading="lazy"
          placeholder="blur"
        />
      </div>
      <div className="body">
        <h4 className="text-black">{props.name}</h4>
        <h5 className="text-black text-sm">{props.position}</h5>
        <div className="text-base/5 text-lg details transition px-6 py-5 align-center">
          {props.desc}
        </div>
      </div>
      <div className="footer flex justify-around items-center">
        {props.social.map((item, index) => (
          <a href={item.link} key={index} target="_blank">
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Founders;
