import React from "react";
import Title from "../Components/Title";

const Partners = () => {
  return (
    <>
      <div className="relative">
        <div className="m-auto">
          <div className="flex items-center flex-wrap md:px-0">
            <div className="relative lg:w-full lg:h-[40rem] lg:py-24 xl:py-32 lg:px-24 xl:px-32 bg-black">
              <Title
                title="Nossos Parceiros"
                colorTitle="text-white'"
                colorsubheader="text-white'"
              />
              <div className="flex">
                <h1>Randon</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
