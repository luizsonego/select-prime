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
    <>
      <div className="card-founders w-80 mx-10 rounded hidden  md:block">
        <div className="header max:h-[25rem] h-[5rem]">
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
      {/* //mobile */}
      <div className="mx-5 xl:w-1/3 sm:w-full md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 grid md:hidden z-10">
        <div className="rounded overflow-hidden shadow-md bg-white">
          <div className="absolute -mt-20 w-full flex  justify-center">
            <div className="h-32 w-32">
              <Image
                width={200}
                height={200}
                src={props.avatar}
                className={
                  "rounded-full object-cover h-full w-full shadow-md bg-white"
                }
                alt="Hero"
                loading="lazy"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="px-6 mt-16">
            <div className="font-bold text-3xl text-black text-center pb-1">
              {props.name}
            </div>
            <p className="text-gray-800 text-sm text-center">
              {props.position}
            </p>
            <p className="text-center text-gray-600 text-base pt-3 font-normal">
              {props.desc}
            </p>
            <div className="w-full flex justify-center pt-5 pb-5">
              {props.social.map((item, index) => (
                <a href={item.link} key={index} target="_blank">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Founders;
