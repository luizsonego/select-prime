import { IconFacebook, IconInstagram, IconLinkedin } from "../Icons";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font ">
      <hr className="my-8 border-gray-300" />
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img src="/assets/logo.png" width={150} />
              {/* <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                Select Prime Financial Solutions
              </span> */}
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-600">
                Atenção: A Select Prime informa em nome da ética e transparência
                aos seus clientes, que ao atuarmos através de investimentos em
                consórcios, não garantimos data de contemplação, rentabilidades
                fixas ou prazo médios de retorno, sob hipótese alguma.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            {/* 
            <p className="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-800">Phone:</p>
              <a
                href="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                850-123-5021
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                info@lorem.mail
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                312 Lovely Street, NY
              </a>
            </div>
          */}
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-300">
              Social
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="http://instagram.com/selectprimefinancial"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <IconInstagram />
              </a>
              <a
                href="Select Prime Financial Solutions"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <IconFacebook />
              </a>
              <a
                href="Select Prime Financial Solutions"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <IconLinkedin />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              {/* Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
              spare ribs salami. */}
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2023 Select Prime Financial Solutions. Todos direitos
            reservados.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            {/* <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                F.A.Q
              </a>
            </li> */}
            <li>
              <a
                href="/politicas-de-privacidades"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Política de privacidade
              </a>
            </li>
            <li>
              <a
                href="/termos-e-condicoes"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Termos &amp; Condições
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
