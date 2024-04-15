import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightArrowLeft,
  faBuildingShield,
  faChartLine,
  faLock,
  faPeopleLine,
} from "@fortawesome/free-solid-svg-icons";
import { IconFacebook, IconInstagram, IconLinkedin } from "./Icons";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";
import imageQuote from "../public/img/family.png";
import educationalImg from "../public/img/education.png";
import timeImg from "../public/img/time.jpeg";
import womanImg from "../public/img/time.jpeg";
import francisImg from "../public/img/peoples/francis.png";
import luanaImg from "../public/img/peoples/luana.png";

import esterImg from "../public/img/peoples/ester.jpeg";
import viridianImg from "../public/img/peoples/viridian.jpeg";
import davidImg from "../public/img/peoples/david.jpeg";
import nayaraImg from "../public/img/peoples/nayara.jpeg";
import ackleyImg from "../public/img/peoples/ackley.jpeg";
import { Dialog } from "@headlessui/react";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

const investing = {
  title: "Investing",
  desc: "",
  image: "",
  background: "bg-gray-50",
  bullets: [
    {
      title: "Equalize seus investimentos",
      icon: (
        <FontAwesomeIcon
          icon={faArrowRightArrowLeft}
          className="fa-3x text-gray-300 svg-icon"
          transform="rotate--40"
        />
      ),
    },
    {
      title: "Ganhos Exponenciais",
      icon: (
        <FontAwesomeIcon
          icon={faChartLine}
          className="fa-3x text-gray-300 svg-icon"
        />
      ),
    },
    {
      title: "Segurança",
      icon: (
        <FontAwesomeIcon
          icon={faLock}
          className="fa-3x text-gray-300 svg-icon"
        />
      ),
    },
    {
      title: "100% Regulamentado (Bacen)",
      icon: (
        <FontAwesomeIcon
          icon={faBuildingShield}
          className="fa-3x text-gray-300 svg-icon"
        />
      ),
    },
    {
      title: "Assessoria",
      icon: (
        <FontAwesomeIcon
          icon={faPeopleLine}
          className="fa-3x text-gray-300 svg-icon"
        />
      ),
    },
  ],
};

const testimonials = {
  title: "Investing",
  desc: "",
  image: "",
  background: "bg-gray-50",
  bullets: [
    {
      name: "Ester Souza",
      testimonial:
        "A escolha pela Select Prime, ocorreu pela excelência no atendimento, competência, transparência e clareza na proposta apresentada, passando a confiabilidade de adquirir o Consórcio Racon, entre outras inúmeras opções de Investimentos.",
      avatar: esterImg,
    },
    {
      name: "Viridian Zadinello",
      testimonial:
        "Equipe comprometida com a satisfação do cliente, me orientam em cada etapa do consórcio, estou muito satisfeito com o serviço.",
      avatar: viridianImg,
    },
    {
      name: "David Souza",
      testimonial:
        "Através da Select Prime conheci um jeito diferente de investir, uma proposta muito bem estruturada somada a segurança do Investimento e profissionalismo dos assessores foram os pontos fundamentais para que me tornasse cliente. Eu Recomendo!",
      avatar: davidImg,
    },
    {
      name: "Nayara Lima",
      testimonial:
        "Há algum tempo comecei investir em consórcio imobiliário, mas com a assessoria da Select Prime eu aprendi a organizar minhas finanças, ter estratégias e assim ficando ainda mais fácil realizar meus sonhos de forma segura e inteligente.",
      avatar: nayaraImg,
    },
    {
      name: "Ackley Serrano",
      testimonial:
        "Invisto em Consórcio Imobiliário há algum tempo e agora com a assessoria da Select Prime ficou ainda mais fácil atingir meus objetivos através de estratégias personalizadas as quais potencializaram a rentabilidade de meus investimentos de forma inteligente e segura.",
      avatar: ackleyImg,
    },
  ],
};

const quotes = {
  image: imageQuote,
  background: "bg-gray-50",
  author: "Francis Cunha",
  quote:
    "Quando seguimos sozinhos, podemos ir mais rápido, pois só depende de nós. A caminhada em conjunto é mais lenta, mas chegamos mais longe. A força do grupo é maior do que a soma das partes. O objetivo alcançado pode ser maior, pois muitos contribuem com aquele sonho, fica mais fácil viabilizá-lo.",
};

const quotesTwo = {
  image: "",
  background: "bg-gray-50",
  author: "Robert Kiyosaki",
  quote:
    "A filosofia dos ricos e dos pobres é a seguinte: Os ricos investem seu dinheiro e gastam o que sobrou. Os pobres gastam seu dinheiro e depois investem o que sobrou.",
};

const results = {
  title: "Resultados",
  desc: "",
  image: "",
  background: "bg-gray-50",
  bullets: [
    {
      desc: "ANOS",
      number: 36,
      suffix: "",
      prefix: "",
    },
    {
      desc: "CLIENTES CONTEMPLADOS",
      number: 158,
      suffix: "mil",
      prefix: "+",
    },
    {
      desc: "BILHÕES EM CRÉDITOS",
      number: 23,
      suffix: "",
      prefix: "+",
    },
    {
      desc: "ESTADOS ONDE ATUAMOS",
      number: 10,
      suffix: "",
      prefix: "+",
    },
  ],
};

const knowOne = {
  image: educationalImg,
  title: "Educação Financeira",
  sub: "",
  desc: "Você sabe qual a diferença entre independência financeira e liberdade financeira? Enquanto uma pode ser entendida como um sinônimo de estabilidade, a outra vai além, uma vez que representa a máxima popularmente conhecida como “viver de renda”. Não é difícil imaginar porque tantos brasileiros sonham com essas metas, não é mesmo?",
  link: "/educacao-financeira",
};

const knowTwo = {
  image: timeImg,
  title: "Quer saber mais?",
  sub: "SELECT PRIME",
  desc: "O que tem mais valor que o TEMPO? Você está disposto a fazer um planejamento e construir uma Renda Passiva? Pois é ela que vai te dar mais tempo e te proporcionar LIBERDADE. Como seria se você tivesse a mesma renda e padrão de vida que tem hoje, ou até melhor, pudesse fazer o que gosta além de ajudar as pessoas que ama, sabendo que todos os meses você teria uma renda? Essa é a nossa missão! Disseminar os princípios da Educação Financeira incentivando nossos clientes a investirem seu dinheiro de forma inteligente pensando sempre no futuro e assim proporcionar-lhes Tempo para que possam desfrutar do que realmente tem valor em nossas vidas!",
  link: "",
};

const services = {
  image: timeImg,
  title: "Quer saber mais?",
  sub: "SELECT PRIME",
  desc: "O que tem mais valor que o TEMPO? Você está disposto a fazer um planejamento e construir uma Renda Passiva? Pois é ela que vai te dar mais tempo e te proporcionar LIBERDADE. Como seria se você tivesse a mesma renda e padrão de vida que tem hoje, ou até melhor, pudesse fazer o que gosta além de ajudar as pessoas que ama, sabendo que todos os meses você teria uma renda? Essa é a nossa missão! Disseminar os princípios da Educação Financeira incentivando nossos clientes a investirem seu dinheiro de forma inteligente pensando sempre no futuro e assim proporcionar-lhes Tempo para que possam desfrutar do que realmente tem valor em nossas vidas!",

  link: "",
  bullets: [
    {
      title: "INVESTIMENTOS",
      description:
        "Você está disposto a fazer um planejamento e construir uma Renda Passiva? E se para isso contasse com um investimento seguro como a renda fixa e tão bom ou ainda mais rentável que a renda variável? Isso faz sentido pra você?",
      modal: (
        <>
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Payment successful Alavancagem de Capital
          </Dialog.Title>

          <Dialog.Description divider>
            <p className="font-normal text-black">
              Nesta modalidade vamos trabalhar a comercialização da
              contemplação, onde podemos alcançar uma rentabilidade média
              expressiva de até
              <strong>500%a.a.</strong> sobre o capital investido (parcelas
              pagas até a contemplação) devido ao retorno obtido com o ágio
              médio em torno de 20% sobre o valor do crédito contratado.
            </p>
            <p className="font-normal mt-3 text-black">
              Ex.: Contratando um crédito de <strong>R$350.000,00</strong>, e
              simulando que sejam pagas <strong>24 parcelas</strong> reduzidas
              (60%) no valor de <strong>R$1.183,70</strong>.
            </p>
            <p className="font-normal mt-3 text-black">
              Total investido: <strong>R$28.408,80</strong>
            </p>
            <p className="font-normal mt-3 text-black">
              Valor do Ágio: <strong>R$70.000,00</strong>{" "}
              <small>
                (média de 20% do valor do crédito. Consulte seu Consultor)
              </small>
              .
            </p>
            <p className="font-normal mt-3 text-black">
              Rentabilidade: <strong>10,41% a.m / 250,00% a.a</strong>{" "}
              <small> (aproximadamente)</small>.
            </p>
            <p className="font-normal mt-3 text-black">
              Valor Resgatado: <strong>R$98.400,00</strong>{" "}
              <small>(aproximadamente)</small>. <br /> • Rentabilidade estimada
              mantendo forte competitividade aos financiamentos tradicionais
            </p>
            <p className="font-normal mt-3 text-black">
              Valor do Crédito: <strong>R$350.000,00</strong>
            </p>
            <p className="font-normal mt-3 text-black">
              Prazo: <strong>220 meses</strong>
            </p>
            <p className="font-normal mt-3 text-black">
              Valor de Parcela (60%): <strong>R$1.183,70</strong>
            </p>
            <p className="font-normal mt-3 text-black">
              Valor do Seguro: <strong>R$173,60</strong> -{" "}
              <small>(não obrigatório)</small>.
            </p>
            <p className="font-normal mt-3 text-black">
              <small>
                Obs.: Para essa estratégia utilizaremos a parcela reduzida de
                60% até a contemplação com possibilidade de lance embutido de
                25%.{" "}
              </small>
            </p>
            <p className="font-normal mt-3 text-black">
              A Select Prime presta toda assessoria de forma personalizada e
              gratuita com o objetivo de acelerar o processo de contemplação
              através de lances, que só será pago em caso de contemplação e o
              melhor, esse lance será pago através de um lance embutido da
              própria carta de crédito, ou seja, você não se descapitaliza.
            </p>

            <p className="font-bold mt-3 text-center text-black">
              É SEGURO COMO A POUPANÇA!
            </p>
            <p className="font-normal mt-3 text-black">
              Qualquer investidor se preocupa com a segurança de suas
              aplicações. A lei 11.795 do consórcio garante que o dinheiro é
              100% seu, não da nossa corretora e nem da Administradora de
              Consórcios.
            </p>
            <p className="font-normal mt-3 text-black">
              A Select Prime é uma corretora que atua apenas na gestão do seu
              investimento. Todo valor referente ao aporte das parcelas mensais
              é pago diretamente a RANDON Administradoras de Consórcios Ltda que
              é 100% regulamentada, fiscalizada e auditada pelo Banco Central do
              Brasil.
            </p>
          </Dialog.Description>
        </>
      ),
    },
    {
      title: "GESTÃO E AUMENTO PATRIMONIAL",
      description:
        "Quem não sonha com a estabilidade financeira no futuro? Viver de renda e o melhor, conhecer a estratégia dos grandes investidores de sucesso: A técnica da “auto-quitação”",
      modal: (
        <>
          <Dialog.Title className="text-center  text-black">
            Alavancagem Patrimonial / Renda Passiva
          </Dialog.Title>
          <Dialog.Description divider>
            <p className="font-normal mt-3 text-black">
              Nesta modalidade vamos trabalhar a aquisição de{" "}
              <strong>imóveis</strong> para{" "}
              <strong>locação convencional</strong>, <strong>Airbnb</strong> ou{" "}
              <strong>Locação de Espaços Gourmet</strong> (Áreas de Lazer) onde
              podemos utilizar a técnica da <strong>"auto-quitação"</strong>.
            </p>
            <p className="font-normal mt-3 text-black">
              Ex.: Contratando um <>crédito</> de <strong>R$350.000,00</strong>,
              com parcelas reduzidas <strong>(60%)</strong> até a contemplação
              no valor de <strong>R$1.183,70</strong>.
            </p>
            <p className="font-normal mt-3 text-black">
              Investimento mensal Inicial: <strong>R$1.183,70</strong>.
            </p>
            <p className="font-normal mt-3 text-black">
              Valor do <strong>Seguro</strong>: <strong>R$173,60 a.m</strong>. -
              <small>(não obrigatório)</small>.
            </p>
            <p className="font-normal mt-3 text-black">
              Investimento mensal pós contemplação: <strong>R$2.300,00</strong>{" "}
              (aproximadamente). Rentabilidade média mensal Airbnb / Espaços
              Gourmet: <strong>R$3.500,00</strong> (1,0% a.m / 12,0% a.a) Renda
              Passiva Residual: <strong>R$1.200,00</strong> (média)
            </p>
            <p className="font-normal mt-3 text-black">
              Obs.: Para essa estratégia utilizaremos a parcela reduzida de{" "}
              <strong>60%</strong>
              até a contemplação com possibilidade de lance embutido de{" "}
              <strong>25%</strong> da própria carta ou lance livre de até{" "}
              <strong>99%</strong>.
            </p>
            <p className="font-normal mt-3 text-black">
              Poder de compra à vista; Planejamento estratégico; Aumento
              Patrimonial; Renda Passiva; Auto-quitação.
            </p>
            <p className="font-normal mt-3 text-black">
              O rendimento mensal residual de <strong>R$1.200,00</strong> pode
              ser reinvestido tornando a operação sustentável!
            </p>
            <p className="font-normal mt-3 text-black">
              Uma forma inteligente de gerar Aumento Patrimonial e criar Renda
              Passiva.
            </p>
            <p className="font-normal mt-3 text-black">
              A Select Prime, presta toda essa assessoria de forma personalizada
              e gratuita com o objetivo principal acelerar o processo de
              contemplação dos nossos clientes através de lances, que só serão
              pagos em caso de contemplação e o melhor, esse lance pode ser pago
              com a própria carta de crédito.
            </p>
            <p className="font-normal mt-3 text-black">
              Um Investimento tão seguro quanto a Poupança, porém com
              possibilidade de rentabilidade maior que da renda variável.
            </p>
            <p className="font-normal mt-3 text-black">
              Qualquer investidor se preocupa com a segurança de seus
              Investimentos. A lei 11.795 do consórcio garante ao investidor que
              o dinheiro investido é 100% seu e não da Select Prime tão pouco da
              Administradora de Consórcios. A corretora tem sua remuneração
              através da taxa de administração de onde também repassa a
              remuneração de nossa Corretora.
            </p>
            <p className="font-normal mt-3 text-black">
              A Select Prime é uma corretora que atua apenas na gestão e
              acompanhamento do seu investimento. Todo e qualquer valor
              referente aos aportes para pagamento das parcelas mensais são
              pagos diretamente à nossa parceira RANDON Administradora de
              Consórcios LTDA que é 100% regulamentada, fiscalizada e autorizada
              pelo Banco Central do Brasil.
            </p>
          </Dialog.Description>
        </>
      ),
    },
    {
      title: "ASSESSORIA TRIBUTÁRIA",
      description:
        "Além da recuperação de tributos pagos em duplicidade ou indevidamente, estamos vulneráveis às constantes alterações na legislação tributária, isso acontece com você? Que tal contar com um time de guardiões atentos como águias utilizando soluções inovadoras e inteligentes zelando por suas operações corporativas?",
      modal: (
        <>
          <Dialog.Title className="text-center  text-black">
            Assessoria Tributária
          </Dialog.Title>
          <Dialog.Description>
            <p className="font-normal mt-3 text-black">
              <strong>Assessoria Tributária</strong> <br />
              Nos destacamos nas seguintes áreas de atuação no Direito
              Tributário:
            </p>
            <p className="font-normal mt-3 text-black">
              <strong>Defesas Fiscais</strong> <br />
              Acompanhamento de fiscalizações e defesa em processos de auto de
              infração junto à Secretaria da Receita Federal e Fazenda do Estado
              do Paraná.
            </p>
            <p className="font-normal mt-3 text-black">
              <strong>Planejamento Tributário</strong> <br />
              Implementação de soluções eficazes na diminuição da carga
              tributária dentro dos limites da lei, de forma segura, otimizando
              a gestão tributária e aumentando a lucratividade de nossos
              clientes.
            </p>

            <p className="font-normal mt-3 text-black">
              <strong>Planejamento Patrimonial</strong>
              <br />
              Visando otimizar a gestão do patrimônio pessoal, desenvolvemos
              estratégias que reduzem legalmente a carga tributária e facilitam
              o processo de sucessão, tais como a holding.
            </p>
            <p className="font-normal mt-3 text-black">
              <strong>Consultoria Permanente</strong>
              <br />
              Atuação jurídica consultiva na área tributária, acompanhando
              reuniões de negócios, atendendo consultas, pareceres e propondo
              soluções para as questões jurídico-tributárias enfrentadas pela
              empresa.
            </p>
            <p className="font-normal mt-3 text-black">
              <strong>Recuperação de Tributos</strong>
              <br />
              Por meio de um diagnóstico prévio, realizamos o levantamento de
              tributos pagos indevidamente ou à maior por nossos clientes,
              pleiteando pela via administrativa ou judicial a devolução desses
              valores.
            </p>
            <p className="font-normal mt-3 text-black">
              <strong>Revisão Das Bases de Cálculo do IRPJ e CSLL</strong>
              <br />
              Através da revisão das bases de cálculo dos tributos buscamos
              identificar e neutralizar possíveis equívocos ocorridos nas
              apurações, assim como estudamos a possibilidade de aplicação de
              benefícios fiscais como forma de redução da carga tributária.
            </p>
            <p className="font-normal mt-3 text-black">
              <strong>Revisão das Bases de Cálculo do PIS e da COFINS</strong>
              <br />
              Revisão das Bases de Cálculo do PIS e da COFINS
              <ul style={{ listStyle: "disc", listStylePosition: "inside" }}>
                <li>
                  Nosso diferencial está em oferecer uma análise detalhada (item
                  a item), na apuração das contribuições, voltada a definição de
                  insumo para a atividade de cada empresa. Para isso buscamos
                  conhecer as particularidades do processo produtivo das
                  entidades.
                </li>
                <li>
                  Foco: Empresas com apuração não-cumulativa das contribuições.{" "}
                </li>
              </ul>
            </p>
            <p className="font-normal mt-3 text-black">
              <strong>
                Foco: Empresas com apuração não-cumulativa das contribuições.{" "}
              </strong>
              <br />
              <ul style={{ listStyle: "disc", listStylePosition: "inside" }}>
                <li>Análise de créditos tributários; </li>
                <li>
                  {" "}
                  Revisão na apuração de tributos, visando economia legal dos
                  impostos;{" "}
                </li>
                <li>
                  {" "}
                  Pedidos administrativos de ressarcimento, restituição e
                  compensação do IPI;{" "}
                </li>
                <li>
                  {" "}
                  Estudo das operações, com foco no planejamento tributário;{" "}
                </li>
                <li>
                  {" "}
                  Revisão de alíquotas e NCM das mercadorias para o adequado
                  enquadramento tributário;{" "}
                </li>
                <li>
                  {" "}
                  Revisão das práticas de emissão de documentos fiscais e
                  escrituração, apurações e recolhimentos do ICMS-ST;{" "}
                </li>
                <li> Gestão de créditos e ressarcimento ICMS-ST;</li>
              </ul>
            </p>
            <p className="font-normal mt-3 text-black">
              <strong>Assessoria e Gestão</strong>
              <br />
              Buscando sempre o crescimento saudável dos nossos parceiros e
              consequentemente uma parceria cada vez mais sólida, a Select Prime
              tem os seguintes tipos de assessoria na captação de recursos
              financeiros de forma inteligente e sustentável;
              <ul style={{ listStyle: "disc", listStylePosition: "inside" }}>
                <li>Capital de Giro;</li>
                <li>Antecipação de Recebíveis; </li>
                <li>Fundos de Investimento Imobiliário;</li>
                <li>Cartas de Crédito.</li>
              </ul>
              <br />
              Temos como diferencial de mercado operações de crédito
              personalizadas e assessoria para entregar viabilidade com
              agilidade aos nossos clientes.
            </p>
            <p className="font-normal mt-3 text-black">
              <strong>
                Incentivo à Pesquisa e Desenvolvimento Tecnológico
              </strong>
              <br />
              As empresas que investem em pesquisa e desenvolvimento de novos
              produtos ou processos de fabricação, poderão usufruir dos
              seguintes benefícios:
              <ul
                style={{
                  listStyle: "lower-latin",
                  listStylePosition: "inside",
                }}
              >
                <li>
                  Dedução, na apuração do lucro líquido, dos dispêndios com
                  Pesquisa & Desenvolvimento Tecnológico, inclusive aqueles com
                  instituições de pesquisa, universidades ou inventores
                  independentes;{" "}
                </li>
                <li>
                  Exclusão, na determinação do lucro real para cálculo do IRPJ e
                  da base de cálculo da CSLL, do valor correspondente a até 60%
                  da soma dos dispêndios efetuados com P&D. O percentual poderá
                  atingir 100% se atendidos outros requisitos;{" "}
                </li>
                <li>
                  Redução de 50% do IPI na compra de equipamentos (nacionais ou
                  importados) destinados a P&D;
                </li>
                <li>
                  Depreciação integral, no ano de aquisição, dos bens adquiridos
                  para aplicação no P&D;
                </li>
                <li>
                  Amortização acelerada dos dispêndios para aquisição de bens
                  intangíveis para P&D;{" "}
                </li>
                <li>
                  Redução a zero da alíquota do imposto de renda retido na fonte
                  nas remessas efetuadas para o exterior destinadas ao registro
                  e manutenção de marcas, patentes e cultivares;
                </li>
              </ul>
              <ul style={{ listStyle: "disc", listStylePosition: "inside" }}>
                <li>
                  Os benefícios visam estimular a fase de maior incerteza quanto
                  à obtenção de resultados econômicos e financeiros pelas
                  empresas no processo de criação e testes de novos produtos,
                  processos ou aperfeiçoamento dos mesmos (risco tecnológico).{" "}
                </li>
                <li>
                  Aplicam-se às pessoas jurídicas com regularidade fiscal, sob
                  regime de tributação do Lucro Real, que desenvolvam atividades
                  de pesquisa e de inovação tecnológica.{" "}
                </li>
                <li>
                  Assessoramos as empresas na implantação do P&D, organização
                  das informações relativas aos projetos, levantamento dos
                  dispêndios, apuração do benefício e envio das informações ao
                  MCT (Ministério da Ciência e Tecnologia).{" "}
                </li>
                <li>Foco: Indústrias – Lucro Real.</li>
              </ul>
            </p>
            <p className="font-normal mt-3 text-black">
              <strong>Desoneração da Folha de Pagamento</strong>
              <br />
              Recuperação de valores recolhidos pela empresa a título de
              Contribuição Previdenciária Patronal (INSS – 20%) sobre as verbas
              indenizatórias e não habituais contidas na folha de pagamento, bem
              como valores decorrentes da limitação da base de cálculo das
              Contribuições parafiscais recolhidas por conta dos terceiros –
              Salário-Educação, INCRA, SENAI, SESI, SENAC, SESC, SEBRAE dentre
              outros (Sistema S) a 20 salários mínimos, ao invés do valor total
              da folha de pagamento.{" "}
              <strong>
                {" "}
                Revisão Fiscal para Empresas Optantes do SIMPLES Nacional
              </strong>{" "}
              Apesar da tributação reduzida, grande parte das empresas acaba
              pagando impostos a maior no SIMPLES. Diante disso, fazemos um
              diagnóstico preciso, revisando as apurações dos últimos cinco
              anos, garantindo que os benefícios e descontos previstos na
              legislação sejam aproveitados e também buscamos a
              restituição/compensação dos valores recolhidos indevidamente.
              Foco: Farmácias, mercados, lojas de conveniência, bares,
              restaurantes, revenda de pneus, lojas de cosméticos e perfumaria,
              lojas de autopeças e lojas de cama, mesa e banho.
            </p>
            <p className="font-normal mt-3 text-black">
              <strong>
                Habilitação e Transparência dos Créditos Acumulados de
                ICMS/PR-SISCRED
              </strong>
              <br />
              Atuamos no processo de habilitação e transferência de créditos
              acumulados de ICMS, auxiliando nossos clientes desde o
              credenciamento até a transferência do crédito habilitado.
            </p>
            <p className="font-normal mt-3 text-black">
              <strong>
                Compliance Tributário e Auditoria de Arquivos SPED
              </strong>
              <br />
              Na era da informação e do aperfeiçoamento tecnológico, as empresas
              vivem um período de profunda adaptação na forma de organizar e
              transmitir dados às autoridades fiscais. Nos últimos anos, a
              digitalização de arquivos provocou um significativo aumento na
              carga de obrigações acessórias e mais obrigações estão por vir.{" "}
              <br />
              Podemos afirmar que a totalidade das informações geradas pelas
              companhias pode ser monitorada pelos órgãos fiscalizadores. Assim,
              as empresas passaram a se preocupar cada vez mais com o
              cumprimento da legislação. <br /> As autoridades fiscais federais,
              estaduais e municipais já têm tecnologia e mão de obra capazes de
              fazer uma verificação detalhada das informações, os erros e
              inconsistências podem ser mais facilmente detectados e gerar
              pesadas autuações. Para se adequar é importante melhorar os
              processos na origem das informações que serão encaminhadas
              aoFisco. <br /> As autoridades fiscais federais, estaduais e
              municipais já têm tecnologia e mão de obra capazes de fazer uma
              verificação detalhada das informações, os erros e inconsistências
              podem ser mais facilmente detectados e gerar pesadas autuações.
              Para se adequar é importante melhorar os processos na origem das
              informações que serão encaminhadas aoFisco.
            </p>
          </Dialog.Description>
        </>
      ),
    },
  ],
};

const information = {
  title: "",
  bullets: [
    {
      title: "CONTATE-NOS",
      icon: "",
      description:
        "Entre em contato com nossos Assessores para avaliarmos seu perfil de investidor e escolhermos a melhor estratégia de investimento pra você.",
      image: "",
    },
    {
      title: "CONHEÇA NOSSO PORTFÓLIO",
      icon: "",
      description:
        "Iremos te apresentar o que há de mais seguro e rentável quando tratamos de Investimentos.",
      image: "",
    },
    {
      title: "AUMENTE SEU PATRIMÔNIO",
      icon: "",
      description:
        "Agora que definimos através do seu perfil qual a melhor estratégia para o seu investimento, basta seguirmos acompanhando os rendimentos e nosso objetivo principal, seu aumento Patrimonial!",
      image: "",
    },
    {
      image: "https://www.selectprimefinancial.com.br/assets/mulher.png",
    },
  ],
};

const commitment = {
  title: "Compromisso",
  bullets: [
    {
      title: "Missão",
      icon: "",
      description:
        "Disseminar os princípios da Educação Financeira incentivando nossos clientes a investirem seu dinheiro de forma segura e inteligente pensando sempre no futuro e assim proporcionar-lhes Tempo para que possam desfrutar do que realmente tem valor em vossas vidas!",
      image: "",
    },
    {
      title: "Visão",
      icon: "",
      description:
        "Consolidar o trabalho e esforço da nossa missão, conectando pessoas e propósitos e sendo referência no mercado, promovendo Liberdade e Tempo de qualidade aos nossos colaboradores e clientes.",
      image: "",
    },
    {
      title: "Valores",
      icon: "",
      description: "Ética, confiabilidade, engajamento e rentabilidade.",
      image: "",
    },
  ],
};

const founders = {
  title: "Fundadores",
  bullets: [
    {
      name: "Francis Cunha",
      avatar: francisImg,
      position: "CEO / Founder",
      desc: "Maringaense, Formado em Administração com ênfase em Gestão Empresarial e Negócios pela PUC/PR e Corretor Imobiliário devidamente inscrito no CRECI/PR: 38.184, com mais de 9 anos atuando no mercado financeiro e imobiliário consolidando grandes operações financeiras, fomentando inclusive o agronegócio brasileiro. Atualmente, especialista em Consórcios sendo certificado pela ABAC (Associação Brasileira das Administradoras de Consórcios).",
      social: [
        {
          name: <IconLinkedin />,
          link: "https://www.linkedin.com/in/francis-cunha-43149a9a",
        },
        {
          name: <IconInstagram />,
          link: "http://instagram.com/francis.cunha.selectprime",
        },
        {
          name: <IconFacebook />,
          link: "https://www.facebook.com/selectprimeinvestimentos",
        },
      ],
    },
    {
      name: "Luana Souza",
      avatar: luanaImg,
      position: "Diretora Financeira / Administrativa",
      desc: "Curitibana, formada em Arquitetura e Urbanismo pela FAG (Faculdade Assis Gurgacz) e Pós-graduada em Gestão de Obras, pelo SENAI, atuando há mais de 8 anos no setor financeiro e imobiliário, fomentando operações de crédito no ramo da construção civil, atualmente especialista em Liberação de Crédito e Gestão.",
      social: [
        {
          name: <IconLinkedin />,
          link: "https://www.linkedin.com/company/select-prime-financial-solutions",
        },
        {
          name: <IconInstagram />,
          link: "http://instagram.com/souza_luhh",
        },
        {
          name: <IconFacebook />,
          link: "https://www.facebook.com/profile.php?id=100089091664997",
        },
      ],
    },
  ],
};

export {
  benefitOne,
  benefitTwo,
  investing,
  testimonials,
  quotes,
  results,
  knowOne,
  knowTwo,
  services,
  information,
  commitment,
  quotesTwo,
  founders,
};
