import { Fragment } from "react";
import { IconFacebook, IconInstagram, IconLinkedin } from "../Components/Icons";
import Title from "../Components/Title";

const arrFounders = [
  {
    name: "Francis Cunha",
    image: "/assets/peoples/francis.png",
    cargo: "CEO / Founder",
    desc: "Maringaense, Formado em Administração com ênfase em Gestão Empresarial e Negócios pela PUC/PR e Corretor Imobiliário devidamente inscrito no CRECI/PR: 38.184, com mais de 9 anos atuando no mercado financeiro e imobiliário consolidando grandes operações financeiras, fomentando inclusive o agronegócio brasileiro. Atualmente, especialista em Consórcios sendo certificado pela ABAC (Associação Brasileira das Administradoras de Consórcios).",
    instagram: "http://instagram.com/francis.cunha.selectprime",
    facebook: "https://www.facebook.com/selectprimeinvestimentos",
    linkedin: "https://www.linkedin.com/in/francis-cunha-43149a9a",
  },
  {
    name: "Luana Souza",
    image: "/assets/peoples/luana.png",
    cargo: "Diretora Financeira / Administrativa",
    desc: "Curitibana, formada em Arquitetura e Urbanismo pela FAG (Faculdade Assis Gurgacz) e Pós-graduada em Gestão de Obras, pelo SENAI, atuando há mais de 8 anos no setor financeiro e imobiliário, fomentando operações de crédito no ramo da construção civil, atualmente especialista em Liberação de Crédito e Gestão.",
    instagram: "http://instagram.com/souza_luhh",
    facebook: "https://www.facebook.com/profile.php?id=100089091664997",
    linkedin:
      "https://www.linkedin.com/company/select-prime-financial-solutions",
  },
];

const Founders = () => {
  return (
    <>
      <div className="relative section-founders">
        <div
          className="absolute"
          style={{
            background: "url('/assets/logo.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "80%",
            backgroundPositionY: "50%",
            backgroundPositionX: "50%",
            backgroundAttachment: "fixed",
            opacity: 0.2,
            width: "100%",
            height: "100%",
            zIndex: "9",
          }}
        ></div>
        <div className="mx-auto">
          <div className="flex items-center flex-wrap md:px-0 mx-auto">
            <div className="relative lg:w-full lg:min-h-[35rem] lg:py-20 xl:py-20 lg:px-24 xl:px-32 py-10 bg-black ">
              <Title title="Fundadores" colorTitle="text-degrade" />
              <div className="flex justify-center mb-20">
                {arrFounders.map((invest, index) => (
                  <Fragment key={index}>
                    <div className="card-founders w-80 mx-10 rounded hidden md:block">
                      <div className="header h-[25rem]">
                        <img
                          src={invest.image}
                          alt={`Imagem de perfil ${invest.name}`}
                          title={`Imagem de perfil ${invest.name}`}
                        />
                      </div>
                      <div className="body">
                        <h4 className="text-black">{invest.name}</h4>
                        <h5 className="text-black text-sm">{invest.cargo}</h5>
                        <div className="text-base/5 text-lg details transition px-6 py-5 align-center">
                          {invest.desc}
                        </div>
                      </div>
                      <div className="footer flex justify-around items-center">
                        <a href={invest.instagram}>
                          <IconInstagram className="fa-3x text-gray-300 svg-icon" />
                        </a>
                        <a href={invest.facebook}>
                          <IconFacebook className="fa-3x text-gray-300 svg-icon" />
                        </a>
                        <a href={invest.linkedin}>
                          <IconLinkedin className="fa-3x text-gray-300 svg-icon" />
                        </a>
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
              <div className="container mx-auto">
                <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around mx-10">
                  {arrFounders.map((invest, index) => (
                    <Fragment key={index + 1}>
                      <div className="xl:w-1/3 sm:w-full md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 grid md:hidden z-10">
                        <div className="rounded overflow-hidden shadow-md bg-white">
                          <div className="absolute -mt-20 w-full flex  justify-center">
                            <div className="h-32 w-32">
                              <img
                                src={invest.image}
                                alt={`Imagem de perfil ${invest.name}`}
                                title={`Imagem de perfil ${invest.name}`}
                                className="rounded-full object-cover h-full w-full shadow-md bg-white"
                              />
                            </div>
                          </div>
                          <div className="px-6 mt-16">
                            <div className="font-bold text-3xl text-black text-center pb-1">
                              {invest.name}
                            </div>
                            <p className="text-gray-800 text-sm text-center">
                              {invest.cargo}
                            </p>
                            <p className="text-center text-gray-600 text-base pt-3 font-normal">
                              {invest.desc}
                            </p>
                            <div className="w-full flex justify-center pt-5 pb-5">
                              <a href={invest.instagram} className="mx-5">
                                <div>
                                  <IconInstagram
                                    className="fa-3x text-gray-300 svg-icon"
                                    fill="#000"
                                  />
                                </div>
                              </a>
                              <a href={invest.facebook} className="mx-5">
                                <div>
                                  <IconFacebook
                                    className="fa-3x text-gray-300 svg-icon"
                                    fill="#000"
                                  />
                                </div>
                              </a>
                              <a href={invest.linkedin} className="mx-5">
                                <div>
                                  <IconLinkedin
                                    className="fa-3x text-gray-300 svg-icon"
                                    fill="#000"
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founders;
