import ResultEfect from "../Components/ResultEfect";
import Title from "../Components/Title";

const arrResults = [
  {
    id: 1,
    text: "ANOS",
    number: <ResultEfect finalNumber="32" />,
  },
  {
    id: 2,
    text: "CLIENTES CONTEMPLADOS",
    number: <ResultEfect finalNumber="158" prefix="+" sufix="mil" />,
  },
  {
    id: 3,
    text: "BILHÕES EM CRÉDITOS",
    number: <ResultEfect finalNumber="23" prefix="+" sufix="" />,
  },
  {
    id: 1,
    text: "ESTADOS ONDE ATUAMOS",
    number: <ResultEfect finalNumber="10" prefix="+" sufix="" />,
  },
];

const Results = () => {
  return (
    <>
      <div className="relative " id="resultados">
        <div className="m-auto">
          <div className="flex items-center flex-wrap md:px-0">
            <div className="relative lg:w-full lg:py-20 xl:py-20 lg:px-24 py-10 xl:px-32 w-full container mx-auto">
              <Title
                title="Resultados"
                colorTitle="text-degrade"
                subheader="Nossos"
                colorsubheader="text-white"
              />

              <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-5 ">
                {arrResults.map((result) => {
                  return (
                    <div key={result.id} className="text-center text-white">
                      <h1 className="text-5xl font-poppins">{result.number}</h1>
                      <h3 className="text-md font-light">{result.text}</h3>
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

export default Results;
