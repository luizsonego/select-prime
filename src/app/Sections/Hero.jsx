import Slide from "../Components/Slide";

function Hero() {
  return (
    <div className="-top-10" id="home">
      <div className="m-auto w-full">
        <div className="flex items-center flex-wrap md:px-0">
          <div className="relative w-full">
            <Slide />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
