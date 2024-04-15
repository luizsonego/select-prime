import React from "react";
import Navbar from "../components/navbar";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar isAnchor={true} />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8 lg:py-20">
        <div className="mt-24 max-w-xl w-full sm:text-center sm:mx-auto">
          <h2 className="mb-6 font-corporate text-md font-bold tracking-tight text-gray-200 sm:text-4xl sm:leading-none">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-32 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="6b0188f3-b7a1-4e9b-b95e-cad916bb3042"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#6b0188f3-b7a1-4e9b-b95e-cad916bb3042)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>{" "}
            Política de Privacidade da{" "}
            <span className="text-degrade">Select Prime Financial</span>
          </h2>
          {/* <Title
          title="Política de Privacidade da Select Prime Financial"
          colorTitle="#fff"
        /> */}
          <div className="text-justify">
            <p className="text-base text-gray-100 md:text-lg">
              A Select Prime Financial (doravante "Select Prime", "nós", "nosso"
              ou "nossa") utiliza cookies em seu site em
              https://selectprimefinancial.com.br/ (doravante "site"). Esta
              política de cookies explica o que são cookies, como os usamos e
              como você pode controlar seu uso, de acordo com a Lei Geral de
              Proteção de Dados (LGPD).
            </p>{" "}
            <br />
            <p className="text-base text-gray-100 md:text-lg">
              Ao visitar ou utilizar nosso site, você concorda com as práticas
              descritas nesta política de cookies.
            </p>
            <br />
            <p className="text-base text-gray-100 md:text-lg">
              O que são cookies Cookies são pequenos arquivos de texto que são
              armazenados em seu dispositivo quando você visita nosso site. Os
              cookies são usados ​​para armazenar informações sobre suas
              preferências e atividades no site e para melhorar sua experiência
              de navegação. Alguns cookies são essenciais para o funcionamento
              do site, enquanto outros são opcionais e exigem o seu
              consentimento.
            </p>
            <br />
            <p className="text-base text-gray-100 md:text-lg">
              Como usamos cookies Podemos usar cookies para os seguintes fins:
            </p>
            <br />
            <p className="text-base text-gray-100 md:text-lg">
              2.1 Cookies essenciais Esses cookies são necessários para que o
              site funcione corretamente. Eles incluem cookies que permitem que
              você faça login em sua conta, adicione produtos ao carrinho de
              compras e use o carrinho de compras para fazer uma compra.
            </p>
            <br />
            <p className="text-base text-gray-100 md:text-lg">
              2.2 Cookies de desempenho Esses cookies nos ajudam a entender como
              você usa nosso site, permitindo-nos melhorar o desempenho do site
              e oferecer uma experiência de usuário melhor e mais personalizada.
              Eles nos permitem rastrear o número de visitantes ao site, o tempo
              gasto em cada página e os erros encontrados. Esses cookies são
              opcionais e exigem o seu consentimento.
            </p>
            <br />
            <p className="text-base text-gray-100 md:text-lg">
              2.3 Cookies de publicidade comportamental Podemos usar cookies
              para fornecer anúncios mais relevantes para você com base em seus
              interesses. Esses cookies são opcionais e exigem o seu
              consentimento.
            </p>
            <br />
            <p className="text-base text-gray-100 md:text-lg">
              Como controlar o uso de cookies Você pode controlar o uso de
              cookies no seu navegador da web. Você pode configurar seu
              navegador para recusar todos os cookies ou para alertá-lo quando
              um cookie é enviado. Observe que a recusa de cookies pode impedir
              o uso completo do site.
            </p>
            <p className="text-base text-gray-100 md:text-lg">
              Cookies de terceiros Podemos usar cookies de terceiros, como
              Google Analytics e Google AdWords, em nosso site. Esses cookies
              são usados ​​para coletar informações sobre como você usa nosso
              site e para fornecer anúncios mais relevantes para você. Esses
              cookies são opcionais e exigem o seu consentimento.
            </p>
            <p className="text-base text-gray-100 md:text-lg">
              Mudanças na política de cookies Podemos atualizar esta política de
              cookies periodicamente para refletir mudanças em nossas práticas
              de cookies. A versão mais recente desta política de cookies estará
              sempre disponível em nosso site. Se fizermos alterações
              significativas nesta política de cookies, publicaremos um aviso em
              nosso site ou o notificaremos por outros meios.
            </p>
            <br />
            <h3>Contato:</h3>
            <p className="text-base text-gray-100 md:text-lg">
              Endereço: Rua Santos Dumont, 3.275 – 19º andar – Sala 1902 <br />
              CENTRO EMPRESARIAL EMPIRE CENTER <br />
              Zona 01 – Maringá, PR
            </p>
            <p className="text-base text-gray-100 md:text-lg">
              Telefone: 44 3200 1510
            </p>
            <p className="text-base text-gray-100 md:text-lg">
              E-mail: contato@selectprimefinancial.com.br
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
