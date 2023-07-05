import React, { Fragment } from "react";
import { IconFacebook, IconInstagram, IconLinkedin } from "../Components/Icons";

const arrFounders = [
  {
    name: "Francis Cunha",
    image: "/assets/peoples/francis.png",
    cargo: "CEO",
    desc: "Maringaense, Formado em Administração com ênfase em Gestão Empresarial e Negócios pela PUC/PR e Corretor Imobiliário devidamente inscrito no CRECI/PR: 38.184, com mais de 9 anos atuando no mercado financeiro e imobiliário consolidando grandes operações financeiras, fomentando inclusive o agronegócio brasileiro. Atualmente, especialista em Consórcios sendo certificado pela ABAC (Associação Brasileira das Administradoras de Consórcios).",
    instagram: "http://instagram.com/francis.cunha.selectprime",
    facebook: "Select Prime Financial Solutions",
    linkedin: "Francis Cunha",
  },
  {
    name: "Luana Souza",
    image: "/assets/peoples/luana.png",
    cargo: "Sócia – Diretora Financeira / Administrativa",
    desc: "Curitibana, formada em Arquitetura em Urbanismo pela FAG (Faculdade Assis Gurgacz) e Pós-graduada em Gestão de Obras, pelo SENAI, atuando há mais de 8 anos no setor financeiro e imobiliário, fomentando operações de crédito no ramo da construção civil, atualmente especialista em Liberação de Crédito e Gestão.",
    instagram: "http://instagram.com/souza_luh",
    facebook: "Racon Consórcios – Maringá PR",
    linkedin: "Select Prime Financial Solutions",
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
            zIndex: "999",
          }}
        ></div>
        <div className=" m-auto">
          <div className="flex items-center flex-wrap md:px-0">
            <div className="relative lg:w-full lg:min-h-[35rem] lg:py-20 xl:py-20 lg:px-24 xl:px-32 bg-black">
              <h1
                className={`text-strong  text-5xl z-50 font-corporate text-center mb-10`}
                style={{ fontWeight: "500" }}
              >
                <span className="text-degrade">Fundadores</span>
              </h1>
              <div className="flex justify-center mb-20">
                {arrFounders.map((invest, index) => (
                  <Fragment key={index}>
                    <div className="card-founders w-80 mx-10 rounded">
                      <div className="header h-[25rem]">
                        <img src={invest.image} alt="profile-picture" />
                      </div>
                      <div className="body">
                        <h4 className="text-black">{invest.name}</h4>
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
                          {/* <FontAwesomeIcon
                            icon="fa-brands fa-facebook"
                            className="fa-3x text-gray-300 svg-icon"
                            transform="rotate--40"
                          /> */}
                        </a>
                        <a href={invest.linkedin}>
                          <IconLinkedin className="fa-3x text-gray-300 svg-icon" />
                          {/* <FontAwesomeIcon
                            icon="fa-brands fa-linkedin"
                            className="fa-3x text-gray-300 svg-icon"
                            transform="rotate--40"
                          /> */}
                        </a>
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founders;
