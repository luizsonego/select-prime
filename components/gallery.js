import React from "react";
import Container from "./container";
import Image from "next/image";

import office1 from "../public/img/office/imagem8.jpg";
import office2 from "../public/img/office/imagem1.jpg";
import office3 from "../public/img/office/imagem7.jpg";
import office4 from "../public/img/office/imagem5.png";
import office5 from "../public/img/office/imagem6.jpg";
import office6 from "../public/img/office/imagem3.jpg";

const Gallery = () => {
  return (
    <Container>
      <div className="px-5 pt-24 mx-auto flex flex-wrap z-30 container w-4/5">
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                src={office1}
                className={"w-full object-cover h-96 object-center block"}
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 z-30">
              <Image
                src={office2}
                className={"w-full object-cover h-72 object-center block"}
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 z-30">
              <Image
                src={office3}
                className={"w-full object-cover h-72 object-center block"}
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
              />
            </div>
          </div>
          {/*  */}
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2 z-30">
              <Image
                src={office4}
                className={"w-full object-cover h-72 object-center block"}
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 z-30">
              <Image
                src={office5}
                className={"w-full object-cover h-72 object-center block"}
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
              />
            </div>
            <div className="md:p-2 p-1 w-full z-30">
              <Image
                src={office6}
                className={"w-full object-cover h-96 object-center block"}
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
        <div className="grid gap-10 lg:grid-cols-2 grid-rows-2 xl:grid-cols-2">
          <div className="w-full ">
            <div className="grid grid-cols-1 gap-4">
              <div className="w-full h-96 ">
                <Image
                  src={office1}
                  className={"object-cover"}
                  alt="Hero Illustration"
                  loading="eager"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full h-64 ">
                <Image
                  height={"auto"}
                  width={"100%"}
                  src={office2}
                  className={"object-cover"}
                  alt="Hero Illustration"
                  loading="eager"
                  placeholder="blur"
                />
              </div>
              <div className="w-full h-64 ">
                <Image
                  src={office3}
                  className={"object-cover"}
                  alt="Hero Illustration"
                  loading="eager"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>

          <div className="w-full h-64 ">
            <div className="w-full h-64 ">
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full h-64 ">
                  <Image
                    src={office4}
                    className={"object-cover"}
                    alt="Hero Illustration"
                    loading="eager"
                    placeholder="blur"
                  />
                </div>
                <div className="w-full h-64 ">
                  <Image
                    src={office5}
                    className={"object-cover"}
                    alt="Hero Illustration"
                    loading="eager"
                    placeholder="blur"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="w-full h-96 ">
                  <Image
                    src={office6}
                    className={"object-cover"}
                    alt="Hero Illustration"
                    loading="eager"
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Container>
  );
};

export default Gallery;
