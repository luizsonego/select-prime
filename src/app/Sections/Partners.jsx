import Title from "../Components/Title";

const arrImage = [
  "/assets/partners/goldfield.png",
  "/assets/partners/racon.png",
  "/assets/partners/gcosta.png",
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
              <div class="flex flex-wrap -m-4 mx-auto continer w-full justify-center">
                {arrImage.map((image, index) => {
                  return (
                    <div class="xl:w-1/4 md:w-1/2 p-4 w-96" key={index + 1}>
                      <div class="p-6 rounded-lg">
                        <img
                          class="h-40 rounded w-full object-contain md:grayscale hover:grayscale-0 hover:scale-125 transition ease-in-out  object-center mb-6"
                          src={image}
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
