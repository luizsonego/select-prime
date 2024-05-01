const Section = ({ bgImg, bgColor, ...props }) => {
  return (
    <div>
      <div
        className={`w-full min-h-96  pt-8 relative ${bgColor} ${props.className}`}
        style={
          bgImg
            ? {
                backgroundImage: bgImg ? `url(${bgImg.src})` : "",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "50%",
                backgroundPositionX: "50%",
                backgroundAttachment: "fixed",
                zIndex: 0,
                backgroundSize: "cover",
              }
            : {}
        }
      >
        <div className="z-10 ">{props.children}</div>
        <div
          className="w-10"
          style={{
            backgroundColor: "#000",
            height: "100%",
            width: "100%",
            top: 0,
            position: "absolute",
            opacity: 0.5,
            zIndex: -1,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Section;
