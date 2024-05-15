import React from "react";
import Container from "./container";
import Image from "next/image";
import { Tangerine } from "next/font/google";

const tangerine = Tangerine({
  weight: ["400", "700"],
  subsets: ["latin"],
  adjustFontFallback: false,
});

const Quote = (props) => {
  const { data } = props;
  return (
    <Container className="flex flex-wrap lg:gap-10 lg:flex-nowrap justify-center px-5">
      {data.image && (
        <div className={`flex items-center justify-center w-full lg:w-1/2 `}>
          <div>
            <Image
              src={data.image}
              width="521"
              height="auto"
              alt="Benefits"
              className={"object-cover"}
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </div>
        </div>
      )}
      <div
        className={`flex flex-col justify-center  ${
          data.image ? "w-full lg:w-1/2" : "w-full md:w-1/2 justify-center"
        }`}
      >
        <Text text={data.quote} author={data.author} />
      </div>
    </Container>
  );
};

function Text(props) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="block w-5 h-5 text-gray-400 mb-4"
        viewBox="0 0 975.036 975.036"
      >
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p
        className={`leading-relaxed mb-6 text-center text-gray-400 text-xl ${tangerine.className}`}
        style={{ fontSize: "2.5rem", lineHeight: 1 }}
      >
        {props.text}
      </p>

      <div className="flex justify-end">
        <span className=" h-1 w-10 rounded bg-gray-500"></span>
        <span className="right-10 text-xl ">
          <i>{props.author}</i>
        </span>
      </div>
    </>
  );
}

export default Quote;
