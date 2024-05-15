import React, { Fragment, useState } from "react";
import Container from "./container";
import { Dialog, Transition } from "@headlessui/react";
import Modal from "./modal";

const Services = (props) => {
  const { data } = props;

  return (
    <>
      <Container className="w-full pb-20 lg:gap-10 lg:flex-nowrap">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 md:px-0 px-5">
          {data.bullets.map((item, index) => (
            <Fragment key={index}>
              <Card
                title={item.title}
                description={item.description}
                link={data.link}
                modal={item.modal}
              />
            </Fragment>
          ))}
        </div>
      </Container>
    </>
  );
};

function Card(props) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="w-full p-8 bg-zinc-800 rounded-lg relative shadow-md hover:shadow-xl">
        <Title title={props.title} />
        <Description description={props.description} />
        <div className="w-full mt-20 flex justify-center">
          <Button link={props.link} onClick={openModal} />
        </div>
      </div>
      <Modal
        content={props.modal}
        isOpen={isOpen}
        closeModal={closeModal}
        style={{ position: "absolute" }}
      />
    </>
  );
}

function Title(props) {
  return (
    <div
      className="m-0 mb-8 rounded-none border-b-2 border-orange-400 font-corporate pb-8 text-center grid justify-items-stretch"
      style={{ fontSize: "20px" }}
    >
      {props.title}
    </div>
  );
}

function Description(props) {
  return (
    <div className="font-normal text-white text-center">
      {props.description}
    </div>
  );
}

function Button(props) {
  return (
    <a
      className={`shadow-none hover:shadow-sm bottom-5 absolute font-corporate degrade-primary text-black border-0 py-2 px-8 focus:outline-none transition-all hover:scale-105 hover:shadow-lg shadow-cyan-500/50 rounded text-lg cursor-pointer font-corporate degrade-primary text-black border-0 py-2 px-8 focus:outline-none transition-all hover:scale-105 hover:shadow-lg shadow-cyan-500/50 rounded text-lg ${
        props.className || ""
      }`}
      {...props}
    >
      Leia Mais
    </a>
  );
}

export default Services;
