"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  DialogBody,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { IconClose } from "../Components/Icons";
import Title from "../Components/Title";
import ActionButton from "../Components/ActionButton";

const arrCard = [
  {
    title: "investimentos",
    description:
      "Você está disposto a fazer um planejamento e construir uma Renda Passiva? E se para isso contasse com um investimento seguro como a renda fixa e tão bom ou ainda mais rentável que a renda variável? Isso faz sentido pra você?",
    icon: "",
    text: (
      <>
        <DialogHeader className="text-center">
          Alavancagem de Capital
        </DialogHeader>
        <DialogBody divider>
          <Typography className="font-normal">
            Nesta modalidade vamos trabalhar a comercialização da contemplação,
            onde podemos alcançar uma rentabilidade média expressiva de até
            <strong>500%a.a.</strong> sobre o capital investido (parcelas pagas
            até a contemplação) devido ao retorno obtido com o ágio médio em
            torno de 20% sobre o valor do crédito contratado.
          </Typography>
          <Typography className="font-normal mt-3">
            Ex.: Contratando um crédito de <strong>R$350.000,00</strong>, e
            simulando que sejam pagas <strong>24 parcelas</strong> reduzidas
            (60%) no valor de <strong>R$1.183,70</strong>.
          </Typography>
          <Typography className="font-normal mt-3">
            Total investido: <strong>R$28.408,80</strong>
          </Typography>
          <Typography className="font-normal mt-3">
            Valor do Ágio: <strong>R$70.000,00</strong>{" "}
            <small>
              (média de 20% do valor do crédito. Consulte seu Consultor)
            </small>
            .
          </Typography>
          <Typography className="font-normal mt-3">
            Rentabilidade: <strong>10,41% a.m / 250,00% a.a</strong>{" "}
            <small> (aproximadamente)</small>.
          </Typography>
          <Typography className="font-normal mt-3">
            Valor Resgatado: <strong>R$98.400,00</strong>{" "}
            <small>(aproximadamente)</small>. <br /> • Rentabilidade estimada
            mantendo forte competitividade aos financiamentos tradicionais
          </Typography>
          <Typography className="font-normal mt-3">
            Valor do Crédito: <strong>R$350.000,00</strong>
          </Typography>
          <Typography className="font-normal mt-3">
            Prazo: <strong>220 meses</strong>
          </Typography>
          <Typography className="font-normal mt-3">
            Valor de Parcela (60%): <strong>R$1.183,70</strong>
          </Typography>
          <Typography className="font-normal mt-3">
            Valor do Seguro: <strong>R$173,60</strong> -{" "}
            <small>(não obrigatório)</small>.
          </Typography>
          <Typography className="font-normal mt-3">
            <small>
              Obs.: Para essa estratégia utilizaremos a parcela reduzida de 60%
              até a contemplação com possibilidade de lance embutido de 25%.{" "}
            </small>
          </Typography>
          <Typography className="font-normal mt-3">
            A Select Prime presta toda assessoria de forma personalizada e
            gratuita com o objetivo de acelerar o processo de contemplação
            através de lances, que só será pago em caso de contemplação e o
            melhor, esse lance será pago através de um lance embutido da própria
            carta de crédito, ou seja, você não se descapitaliza.
          </Typography>

          <Typography className="font-bold mt-3 text-center">
            É SEGURO COMO A POUPANÇA!
          </Typography>
          <Typography className="font-normal mt-3">
            Qualquer investidor se preocupa com a segurança de suas aplicações.
            A lei 11.795 do consórcio garante que o dinheiro é 100% seu, não da
            nossa corretora e nem da Administradora de Consórcios.
          </Typography>
          <Typography className="font-normal mt-3">
            A Select Prime é uma corretora que atua apenas na gestão do seu
            investimento. Todo valor referente ao aporte das parcelas mensais é
            pago diretamente a RANDON Administradoras de Consórcios Ltda que é
            100% regulamentada, fiscalizada e auditada pelo Banco Central do
            Brasil.
          </Typography>
        </DialogBody>
      </>
    ),
  },
  {
    title: "GESTÃO E AUMENTO PATRIMONIAL",
    description:
      "Quem não sonha com a estabilidade financeira no futuro? Viver de renda e o melhor,  conhecer a estratégia dos grandes investidores de sucesso: A técnica da “auto-quitação”",
    icon: "",
    text: (
      <>
        <DialogHeader className="text-center">
          Alavancagem Patrimonial / Renda Passiva
        </DialogHeader>
        <DialogBody divider>
          <Typography className="font-normal mt-3">
            Nesta modalidade vamos trabalhar a aquisição de{" "}
            <strong>imóveis</strong> para <strong>locação convencional</strong>,{" "}
            <strong>Airbnb</strong> ou{" "}
            <strong>Locação de Espaços Gourmet</strong> (Áreas de Lazer) onde
            podemos utilizar a técnica da <strong>"auto-quitação"</strong>.
          </Typography>
          <Typography className="font-normal mt-3">
            Ex.: Contratando um <>crédito</> de <strong>R$350.000,00</strong>,
            com parcelas reduzidas <strong>(60%)</strong> até a contemplação no
            valor de <strong>R$1.183,70</strong>.
          </Typography>
          <Typography className="font-normal mt-3">
            Investimento mensal Inicial: <strong>R$1.183,70</strong>.
          </Typography>
          <Typography className="font-normal mt-3">
            Valor do <strong>Seguro</strong>: <strong>R$173,60 a.m</strong>. -
            <small>(não obrigatório)</small>.
          </Typography>
          <Typography className="font-normal mt-3">
            Investimento mensal pós contemplação: <strong>R$2.300,00</strong>{" "}
            (aproximadamente). Rentabilidade média mensal Airbnb / Espaços
            Gourmet: <strong>R$3.500,00</strong> (1,0% a.m / 12,0% a.a) Renda
            Passiva Residual: <strong>R$1.200,00</strong> (média)
          </Typography>
          <Typography className="font-normal mt-3">
            Obs.: Para essa estratégia utilizaremos a parcela reduzida de{" "}
            <strong>60%</strong>
            até a contemplação com possibilidade de lance embutido de{" "}
            <strong>25%</strong> da própria carta ou lance livre de até{" "}
            <strong>99%</strong>.
          </Typography>
          <Typography className="font-normal mt-3">
            Poder de compra à vista; Planejamento estratégico; Aumento
            Patrimonial; Renda Passiva; Auto-quitação.
          </Typography>
          <Typography className="font-normal mt-3">
            O rendimento mensal residual de <strong>R$1.200,00</strong> pode ser
            reinvestido tornando a operação sustentável!
          </Typography>
          <Typography className="font-normal mt-3">
            Uma forma inteligente de gerar Aumento Patrimonial e criar Renda
            Passiva.
          </Typography>
          <Typography className="font-normal mt-3">
            A Select Prime, presta toda essa assessoria de forma personalizada e
            gratuita com o objetivo principal acelerar o processo de
            contemplação dos nossos clientes através de lances, que só serão
            pagos em caso de contemplação e o melhor, esse lance pode ser pago
            com a própria carta de crédito.
          </Typography>
          <Typography className="font-normal mt-3">
            Um Investimento tão seguro quanto a Poupança, porém com
            possibilidade de rentabilidade maior que da renda variável.
          </Typography>
          <Typography className="font-normal mt-3">
            Qualquer investidor se preocupa com a segurança de seus
            Investimentos. A lei 11.795 do consórcio garante ao investidor que o
            dinheiro investido é 100% seu e não da Select Prime tão pouco da
            Administradora de Consórcios. A corretora tem sua remuneração
            através da taxa de administração de onde também repassa a
            remuneração de nossa Corretora.
          </Typography>
          <Typography className="font-normal mt-3">
            A Select Prime é uma corretora que atua apenas na gestão e
            acompanhamento do seu investimento. Todo e qualquer valor referente
            aos aportes para pagamento das parcelas mensais são pagos
            diretamente à nossa parceira RANDON Administradora de Consórcios
            LTDA que é 100% regulamentada, fiscalizada e autorizada pelo Banco
            Central do Brasil.
          </Typography>
        </DialogBody>
      </>
    ),
  },
  {
    title: "ASSESSORIA TRIBUTÁRIA",
    description:
      "Além da recuperação de tributos pagos em duplicidade ou indevidamente, estamos vulneráveis às constantes alterações na legislação tributária, isso acontece com você? Que tal contar com um time de guardiões atentos como águias utilizando soluções inovadoras e inteligentes zelando por suas operações corporativas?",
    icon: "",
    text: (
      <>
        <DialogHeader className="text-center">
          Assessoria Tributária
        </DialogHeader>
        <DialogBody>
          <Typography className="font-normal mt-3">
            <strong>Assessoria Tributária</strong> <br />
            Nos destacamos nas seguintes áreas de atuação no Direito Tributário:
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Defesas Fiscais</strong> <br />
            Acompanhamento de fiscalizações e defesa em processos de auto de
            infração junto à Secretaria da Receita Federal e Fazenda do Estado
            do Paraná.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Planejamento Tributário</strong> <br />
            Implementação de soluções eficazes na diminuição da carga tributária
            dentro dos limites da lei, de forma segura, otimizando a gestão
            tributária e aumentando a lucratividade de nossos clientes.
          </Typography>

          <Typography className="font-normal mt-3">
            <strong>Planejamento Patrimonial</strong>
            <br />
            Visando otimizar a gestão do patrimônio pessoal, desenvolvemos
            estratégias que reduzem legalmente a carga tributária e facilitam o
            processo de sucessão, tais como a holding.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Consultoria Permanente</strong>
            <br />
            Atuação jurídica consultiva na área tributária, acompanhando
            reuniões de negócios, atendendo consultas, pareceres e propondo
            soluções para as questões jurídico-tributárias enfrentadas pela
            empresa.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Recuperação de Tributos</strong>
            <br />
            Por meio de um diagnóstico prévio, realizamos o levantamento de
            tributos pagos indevidamente ou à maior por nossos clientes,
            pleiteando pela via administrativa ou judicial a devolução desses
            valores.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Revisão Das Bases de Cálculo do IRPJ e CSLL</strong>
            <br />
            Através da revisão das bases de cálculo dos tributos buscamos
            identificar e neutralizar possíveis equívocos ocorridos nas
            apurações, assim como estudamos a possibilidade de aplicação de
            benefícios fiscais como forma de redução da carga tributária.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Revisão das Bases de Cálculo do PIS e da COFINS</strong>
            <br />
            Revisão das Bases de Cálculo do PIS e da COFINS
            <ul style={{ listStyle: "disc", listStylePosition: "inside" }}>
              <li>
                Nosso diferencial está em oferecer uma análise detalhada (item a
                item), na apuração das contribuições, voltada a definição de
                insumo para a atividade de cada empresa. Para isso buscamos
                conhecer as particularidades do processo produtivo das
                entidades.
              </li>
              <li>
                Foco: Empresas com apuração não-cumulativa das contribuições.{" "}
              </li>
            </ul>
          </Typography>
          <Typography className="font-normal mt-3">
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
          </Typography>
          <Typography className="font-normal mt-3">
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
            personalizadas e assessoria para entregar viabilidade com agilidade
            aos nossos clientes.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Incentivo à Pesquisa e Desenvolvimento Tecnológico</strong>
            <br />
            As empresas que investem em pesquisa e desenvolvimento de novos
            produtos ou processos de fabricação, poderão usufruir dos seguintes
            benefícios:
            <ul
              style={{ listStyle: "lower-latin", listStylePosition: "inside" }}
            >
              <li>
                Dedução, na apuração do lucro líquido, dos dispêndios com
                Pesquisa & Desenvolvimento Tecnológico, inclusive aqueles com
                instituições de pesquisa, universidades ou inventores
                independentes;{" "}
              </li>
              <li>
                Exclusão, na determinação do lucro real para cálculo do IRPJ e
                da base de cálculo da CSLL, do valor correspondente a até 60% da
                soma dos dispêndios efetuados com P&D. O percentual poderá
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
                nas remessas efetuadas para o exterior destinadas ao registro e
                manutenção de marcas, patentes e cultivares;
              </li>
            </ul>
            <ul style={{ listStyle: "disc", listStylePosition: "inside" }}>
              <li>
                Os benefícios visam estimular a fase de maior incerteza quanto à
                obtenção de resultados econômicos e financeiros pelas empresas
                no processo de criação e testes de novos produtos, processos ou
                aperfeiçoamento dos mesmos (risco tecnológico).{" "}
              </li>
              <li>
                Aplicam-se às pessoas jurídicas com regularidade fiscal, sob
                regime de tributação do Lucro Real, que desenvolvam atividades
                de pesquisa e de inovação tecnológica.{" "}
              </li>
              <li>
                Assessoramos as empresas na implantação do P&D, organização das
                informações relativas aos projetos, levantamento dos dispêndios,
                apuração do benefício e envio das informações ao MCT (Ministério
                da Ciência e Tecnologia).{" "}
              </li>
              <li>Foco: Indústrias – Lucro Real.</li>
            </ul>
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Desoneração da Folha de Pagamento</strong>
            <br />
            Recuperação de valores recolhidos pela empresa a título de
            Contribuição Previdenciária Patronal (INSS – 20%) sobre as verbas
            indenizatórias e não habituais contidas na folha de pagamento, bem
            como valores decorrentes da limitação da base de cálculo das
            Contribuições parafiscais recolhidas por conta dos terceiros –
            Salário-Educação, INCRA, SENAI, SESI, SENAC, SESC, SEBRAE dentre
            outros (Sistema S) a 20 salários mínimos, ao invés do valor total da
            folha de pagamento.{" "}
            <strong>
              {" "}
              Revisão Fiscal para Empresas Optantes do SIMPLES Nacional
            </strong>{" "}
            Apesar da tributação reduzida, grande parte das empresas acaba
            pagando impostos a maior no SIMPLES. Diante disso, fazemos um
            diagnóstico preciso, revisando as apurações dos últimos cinco anos,
            garantindo que os benefícios e descontos previstos na legislação
            sejam aproveitados e também buscamos a restituição/compensação dos
            valores recolhidos indevidamente. Foco: Farmácias, mercados, lojas
            de conveniência, bares, restaurantes, revenda de pneus, lojas de
            cosméticos e perfumaria, lojas de autopeças e lojas de cama, mesa e
            banho.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>
              Habilitação e Transparência dos Créditos Acumulados de
              ICMS/PR-SISCRED
            </strong>
            <br />
            Atuamos no processo de habilitação e transferência de créditos
            acumulados de ICMS, auxiliando nossos clientes desde o
            credenciamento até a transferência do crédito habilitado.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Compliance Tributário e Auditoria de Arquivos SPED</strong>
            <br />
            Na era da informação e do aperfeiçoamento tecnológico, as empresas
            vivem um período de profunda adaptação na forma de organizar e
            transmitir dados às autoridades fiscais. Nos últimos anos, a
            digitalização de arquivos provocou um significativo aumento na carga
            de obrigações acessórias e mais obrigações estão por vir. <br />
            Podemos afirmar que a totalidade das informações geradas pelas
            companhias pode ser monitorada pelos órgãos fiscalizadores. Assim,
            as empresas passaram a se preocupar cada vez mais com o cumprimento
            da legislação. <br /> As autoridades fiscais federais, estaduais e
            municipais já têm tecnologia e mão de obra capazes de fazer uma
            verificação detalhada das informações, os erros e inconsistências
            podem ser mais facilmente detectados e gerar pesadas autuações. Para
            se adequar é importante melhorar os processos na origem das
            informações que serão encaminhadas aoFisco. <br /> As autoridades
            fiscais federais, estaduais e municipais já têm tecnologia e mão de
            obra capazes de fazer uma verificação detalhada das informações, os
            erros e inconsistências podem ser mais facilmente detectados e gerar
            pesadas autuações. Para se adequar é importante melhorar os
            processos na origem das informações que serão encaminhadas aoFisco.
          </Typography>
        </DialogBody>
      </>
    ),
  },
];

const Services = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const handleOpen = (e) => {
    setText(e);
    setOpen(!open);
  };
  return (
    <>
      <div className="relative">
        <div className="m-auto">
          <div className="flex items-center flex-wrap md:px-0">
            <div className="relative lg:w-full lg:min-h-[20rem] lg:py-4 xl:py-10 lg:px-24 xl:px-32 py-10 bg-white">
              <Title
                title="Especialidades"
                subheader="Serviços"
                colorTitle="text-black"
                colorsubheader="text-black"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 md:px-0 px-5">
                {arrCard.map((item, index) => (
                  <Card
                    key={index}
                    variant="filled"
                    className="w-full p-8 bg-zinc-800 rounded-lg relative shadow-md hover:shadow-xl"
                  >
                    <CardHeader
                      floated={false}
                      shadow={false}
                      color="transparent"
                      className="m-0 mb-8 rounded-none border-b-2 border-orange-400 pb-8 text-center grid justify-items-stretch"
                    >
                      <p className="text-xl font-normal uppercase text-white">
                        {item.title}
                      </p>
                    </CardHeader>
                    <CardBody className="p-0">
                      <p className="font-normal text-white text-center">
                        {item.description}
                      </p>
                    </CardBody>
                    <CardFooter className="mt-12 p-0 flex justify-center">
                      {/* <Button
                        size="lg"
                        className="text-zinc-900 degrade-primary normal-case bg-gray-200 w-1/3 py-2 shadow-none hover:shadow-sm bottom-5 absolute font-corporate"
                        ripple={false}
                        fullWidth={true}
                        onClick={() => handleOpen(item.text)}
                      >
                        Ler mais
                      </Button> */}
                      <ActionButton href="#contato" text="Ler mais" onClick={() => handleOpen(item.text)} className="shadow-none hover:shadow-sm bottom-5 absolute " />
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div
          className="min-h-screen fixed py-12 bg-zinc-700/30 backdrop-blur-md transition duration-150 ease-in-out z-90 top-0 right-0 bottom-0 left-0"
          style={{ zIndex: 9999999999999 }}
          id="modal"
        >
          <div className="container mx-auto w-11/12 md:w-2/3 ">
            <div className="relative overflow-y-auto h-[38rem] py-8 px-8 md:px-16 bg-zinc-900  shadow-md rounded border border-gray-400">
              {text}
              <div
                className="cursor-pointer fixed top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 transition duration-150 ease-in-out"
                onClick={() => setOpen(!open)}
              >
                <IconClose />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
