import React from "react";
import Container from "./container";
import Image from "next/image";

import goldfieldImg from "../public/img/partners/goldfield.png";
import raconImg from "../public/img/partners/racon.png";
import gCostaImg from "../public/img/partners/gcosta.png";

const Partners = () => {
  return (
    <Container className="w-full pb-20 lg:gap-10 lg:flex-nowrap">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 md:px-0 px-5">
        <div
          className="p-6 rounded-lg"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Image
            src={goldfieldImg}
            className={
              "rounded object-contain md:grayscale hover:grayscale-0 hover:scale-125 transition ease-in-out  object-center mb-6"
            }
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
        </div>
        <div
          className="p-6 rounded-lg"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Image
            src={raconImg}
            className={
              "rounded object-contain md:grayscale hover:grayscale-0 hover:scale-125 transition ease-in-out  object-center mb-6"
            }
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
        </div>
        <div
          className="p-6 rounded-lg"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Image
            src={gCostaImg}
            className={
              "rounded object-contain md:grayscale hover:grayscale-0 hover:scale-125 transition ease-in-out  object-center mb-6"
            }
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
        </div>
      </div>
    </Container>
  );
};

export default Partners;
