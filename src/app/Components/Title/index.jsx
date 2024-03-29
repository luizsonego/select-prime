import { poppins } from "../../fonts";

const Title = ({
  title,
  subheader = "",
  colorTitle,
  colorsubheader = "text-black",
}) => {
  return (
    <>
      <h1
        className={`text-xl text-center leading-[1.5] ${colorsubheader} ${poppins.className}`}
      >
        {subheader}
      </h1>
      <h1
        className={`text-strong  text-5xl z-50 font-corporate text-center mb-10`}
        style={{ fontWeight: "500" }}
      >
        <span className={colorTitle}>{title}</span>
      </h1>
    </>
  );
};

export default Title;
