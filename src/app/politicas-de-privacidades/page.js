const Privacypolicy = () => {
  return (
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
          <h2>1. Informações que coletamos</h2>
          <p className="text-base text-gray-100 md:text-lg">
            Coletamos informações pessoais fornecidas por você, como nome,
            endereço de e-mail, número de telefone, informações de pagamento e
            outras informações relevantes. Também coletamos informações não
            pessoais, como endereço IP, tipo de navegador utilizado e páginas
            visitadas, por meio de cookies e tecnologias similares.
          </p>{" "}
          <br />
          <h2>2. Uso das informações</h2>
          <p className="text-base text-gray-100 md:text-lg">
            Utilizamos as informações coletadas para fornecer e melhorar nossos
            serviços, enviar comunicações relevantes, realizar análises
            internas, cumprir obrigações legais e proteger nossos direitos
            legais.
          </p>
          <br />
          <h2>3. Compartilhamento de informações</h2>
          <p className="text-base text-gray-100 md:text-lg">
            Compartilhamos suas informações pessoais com prestadores de serviços
            terceirizados que atuam em nosso nome e com parceiros de negócios,
            somente quando necessário e de acordo com as obrigações contratuais
            de confidencialidade.
          </p>
          <br />
          <h2>4. Cookies e tecnologias similares</h2>
          <p className="text-base text-gray-100 md:text-lg">
            Utilizamos cookies, pixels e outras tecnologias similares para
            coletar informações sobre sua atividade no site, personalizar sua
            experiência e melhorar nossos serviços.
          </p>
          <br />
          <h2>5. Seus direitos e escolhas</h2>
          <p className="text-base text-gray-100 md:text-lg">
            Você tem o direito de acessar e atualizar suas informações pessoais,
            optar por não receber comunicações de marketing e definir suas
            preferências de cookies.
          </p>
          <br />
          <h2>6. Segurança das informações</h2>
          <p className="text-base text-gray-100 md:text-lg">
            Implementamos medidas de segurança para proteger suas informações
            pessoais contra acesso não autorizado ou uso indevido.
          </p>
          <br />
          <h2>7. Contato</h2>
          <p className="text-base text-gray-100 md:text-lg">
            Se você tiver dúvidas ou solicitações relacionadas à nossa Política
            de Privacidade, entre em contato conosco através do endereço,
            telefone ou e-mail fornecidos abaixo.
          </p>
          <br />
          <p className="text-base text-gray-100 md:text-lg">
            Reservamo-nos o direito de atualizar esta Política de Privacidade
            periodicamente. Data de entrada em vigor: [Inserir data de entrada
            em vigor]
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
  );
};

export default Privacypolicy;
