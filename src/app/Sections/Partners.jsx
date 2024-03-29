import Title from "../Components/Title";

const arrImage = [
  {
    image: "/assets/partners/goldfield.png",
    height: "h-36",
    width: "w-full",
  },
  {
    image: "/assets/partners/racon.png",
    height: "h-44",
    width: "w-full",
  },
  {
    image: "/assets/partners/gcosta.png",
    height: "h-32",
    width: "w-10/12",
  }
];
const Partners = () => {
  return (
    <>
      {/* no mobile deixar colorido  */}
      <div className="relative border-b-2 border-gray-950">
        <div className="m-auto">
          <div className="flex items-center flex-wrap md:px-0">
            <div className="relative lg:w-full  lg:py-16 xl:py-16 lg:px-24 xl:px-32 py-10 bg-black">
              <Title
                title="Nossos Parceiros"
                colorTitle="text-white'"
                colorsubheader="text-white'"
              />
              <div className="flex flex-wrap -m-4 mx-auto continer w-full content-center items-center justify-center">
                {arrImage.map((image, index) => {
                  return (
                    <div className="xl:w-1/4 md:w-1/2 p-4 w-96" key={index + 1}>
                      <div className="p-6 rounded-lg" style={{display: "flex", justifyContent: "center"}}>
                        <img
                          className={`${image.height} ${image.width} rounded object-contain md:grayscale hover:grayscale-0 hover:scale-125 transition ease-in-out  object-center mb-6`}
                          src={image.image}
                          alt="content"
                        ></img>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
