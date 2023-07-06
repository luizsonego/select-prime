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
            Você sabia quase metade de todo lucro gerado no mundo vem dos
            bancos? Qual a estratégia destas instituições?
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>R:</strong> Alavancagem de capital através da venda de
            juros.
          </Typography>
          <Typography className="font-normal mt-3">
            Estudamos muito e criamos uma estratégia parecida com a aplicada
            pelos bancos utilizando um produto 100% seguro, além de devidamente
            regulamentado pelo Banco Central do Brasil.
          </Typography>
          <Typography className="font-normal mt-3">
            Temos como principal investimento, cartas de crédito de Consórcio
            Imobiliário… Como funciona? É muito simples!
          </Typography>
          <Typography className="font-normal mt-3">
            O Consórcio não tem juros tem apenas uma taxa de administração, taxa
            essa que parte de simbólicos 0,11% a.m. ou 1,3% a.a. dependendo do
            grupo escolhido.
          </Typography>
          <Typography className="font-normal mt-3">
            Quando o investidor é contemplado dentro dessa modalidade de
            investimento, ele passa a ser dono de crédito (dinheiro) barato,
            poder de compra à vista e ainda vários benefícios se comparado ao
            financiamento imobiliário.
          </Typography>
          <Typography className="font-normal mt-3">
            E é nesse momento que nós da Select Prime entramos com nossa
            expertise de mais de 8 anos atuando e sendo referência neste
            mercado. Através de nossa assessoria inserimos um determinado ágio
            (juros) na operação respeitando a viabilidade e competitividade com
            o financiamento imobiliário.
          </Typography>
          <Typography className="font-normal mt-3">
            Anunciamos e comercializamos essa Carta de Crédito dentro do nosso
            banco de clientes que buscam crédito com taxas atrativas no mercado.
          </Typography>
          <Typography className="font-normal mt-3">
            A Lei 11.795, garante que você pode transferir a sua carta de
            crédito contemplada ou não para outra pessoa normalmente, bastando
            que a Administradora aprove o cadastro. É nosso compromisso fazer
            todo o acompanhamento das obrigações referente a transferência da
            Carta de Crédito.
          </Typography>
          <Typography className="font-normal mt-3">
            Após a comercialização da Carta contemplada, o Investidor deixa de
            ter que fazer os aportes mensais e executa o ágio do valor da venda
            da carta de crédito contemplada, um ganho que pode chegar a mais de
            4.000% isso mesmo… (quatro mil por cento) sobre o valor do capital
            investido. Costumamos dizer que aceleramos a rentabilidade de seus
            investimentos em anos…
          </Typography>
          <Typography className="font-normal mt-3">
            Tais Cartas de Crédito contempladas valem “ouro” e tem uma demanda
            crescente no mercado por tratarmos de dinheiro mais barato que o
            financiamento imobiliário.
          </Typography>
          <Typography className="font-normal mt-3">
            Normalmente, essas contemplações são comercializadas em média com
            ágio de 20% (vinte por cento) do valor do crédito.
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
          Alavancagem Patrimonial
        </DialogHeader>
        <DialogBody divider>
          <Typography className="font-normal mt-3">
            Ao tratar desse assunto, não podemos deixar de lembrarmos dos
            principais pilares da Educação Financeira:
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Colchão Financeiro</strong>– mantenha sua reserva de
            emergência que pode te ajudar em momentos difíceis ou até mesmo
            rentabilizar seu capital ao aproveitar de alguma oportunidade
            repentina de negócios com altas margens de lucro.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Pagar-se primeiro</strong>– criar e manter o hábito de
            investir antes mesmo de pagar suas despesas mensais.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Gerar Ativos</strong>– construa uma coluna de ativos capaz
            de gerar uma Renda Passiva que te traga possibilidade de ter “Tempo”
            de qualidade para cuidar da sua saúde, realizar seus maiores sonhos
            e estar próximo de quem ama.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Trabalhe com o dinheiro dos outros</strong>– Uma das
            estratégias mais utilizadas pelos investidores de sucesso é a
            estratégia do fluxo de caixa positivo, utilizando-se de capital de
            terceiros para investir no mercado imobiliário através da
            auto-quitação. <br /> `Uma estratégia com excelente rentabilidade,
            baixíssimo risco e muito simples de se aplicar é a técnica da
            “auto-quitação”.
          </Typography>
          <Typography className="font-normal mt-3">
            A estratégia é bem simples:
          </Typography>
          <Typography className="font-normal mt-3">
            Ao investir em uma carta de crédito de Consórcio Imobiliário, você
            vai aportando um valor mensal de parcelas até que seja contemplado.
            Apos a contemplação você pode adquirir um imóvel comercial,
            residencial ou até mesmo captar esse recurso para giro e assim
            através de nossa assessoria trabalhar essa Renda a seu favor
            quitando de forma integral ou parcial as parcelas do seu
            investimento inicial e posteriormente beneficiar-se gerando uma
            renda vitalícia para reinvestimentos.
          </Typography>
          <Typography className="font-normal mt-3">
            Essa estratégia é segundo o autor do Best Seller “Pai Rico e Pai
            Pobre”, Robert Kyosaki, a estratégia preferida dos multi milionários
            americanos.
          </Typography>
          <Typography className="font-normal mt-3">
            Como tratamos de um investimento que te dá poder de compra à vista,
            você pode conseguir uma excelente negociação até abaixo do valor de
            mercado.
          </Typography>
          <Typography className="font-normal mt-3">
            Estudos recentes relatam que o único setor de investimento que se
            mostrou consistente nos últimos 10 anos foi o setor imobiliário com
            ganhos expressivos em torno de 16% de rentabilidade ao ano quando
            tratamos de valorização e valor do aluguel.
          </Typography>
          <Typography className="font-normal mt-3">
            A Select Prime, presta toda essa assessoria de forma personalizada e
            gratuita com o objetivo principal acelerar o processo de
            contemplação dos nossos clientes através de lances, que só serão
            pagos em caso de contemplação e o melhor, esse lance pode ser pago
            com a própria carta de credito.
          </Typography>
          <Typography className="font-normal mt-3">
            Um Investimento tão seguro quanto a Poupança, porém com
            possibilidade de rentabilidade maior que da renda variável.
          </Typography>
          <Typography className="font-normal mt-3">
            Qualquer investidor preocupa-se com a segurança de seus
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
            diretamente à nossa parceira RANDON Administradora de Consorcios
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
        <DialogBody divider>
          <Typography className="font-normal mt-3">
            Nos destacamos nas seguintes áreas de atuação no Direito Tributário:
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Defesas Fiscais</strong> <br />
            Acompanhamento de fiscalizações e defesa em processos de auto de
            infração junto à Secretaria da Receita Federal e Fazenda do Estado
            do Paraná.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Pagar-se primeiro</strong>– criar e manter o hábito de
            investir antes mesmo de pagar suas despesas mensais.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Planejamento Tributário</strong> <br />
            Implementação de soluções eficazes na diminuição da carga tributária
            dentro dos limites da lei, de forma segura, otimizando a gestão
            tributária e aumentando a lucratividade de nossos clientes.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Planejamento Patrimonial</strong> <br /> Visando otimizar a
            gestão do patrimônio pessoal, desenvolvemos estratégias que reduzem
            legalmente a carga tributária e facilitam o processo de sucessão,
            tais como a holding.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Consultoria Permanente</strong> <br /> Atuação jurídica
            consultiva na área tributária, acompanhando reuniões de negócios,
            atendendo consultas, pareceres e propondo soluções para as questões
            jurídico-tributárias enfrentadas pela empresa.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Recuperação de Tributos</strong> <br /> Por meio de um
            diagnóstico prévio, realizamos o levantamento de tributos pagos
            indevidamente ou à maior por nossos clientes, pleiteando pela via
            administrativa ou judicial a devolução desses valores.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Revisão Das Bases de Cálculo do IRPJ e CSLL</strong> <br />
            Através da revisão das bases de cálculo dos tributos buscamos
            identificar e neutralizar possíveis equívocos ocorridos nas
            apurações, assim como estudamos a possibilidade de aplicação de
            benefícios fiscais como forma de redução da carga tributária.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Revisão das Bases de Cálculo do PIS e da COFINS</strong>{" "}
            <br />
            Revisão dos procedimentos tributários, visando o levantamento de
            créditos adicionais e/ou contingências, em consonância com a
            legislação aplicável e jurisprudências pertinentes à matéria. <br />{" "}
            – Nosso diferencial está em oferecer uma análise detalhada (item a
            item), na apuração das contribuições, voltada a definição de insumo
            para a atividade de cada empresa. Para isso buscamos conhecer as
            particularidades do processo produtivo das entidades. <br /> – Foco:
            Empresas com apuração não-cumulativa das contribuições.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>
              Revisão e Análise das Operações que Envolvem ICMS e IPI
            </strong>{" "}
            <br />– Análise de créditos tributários;
            <br /> – Revisão na apuração de tributos, visando economia legal dos
            impostos;
            <br /> – Pedidos administrativos de ressarcimento, restituição e
            compensação do IPI;
            <br /> – Estudo das operações, com foco no planejamento tributário;
            <br /> – Revisão de alíquotas e NCM das mercadorias para o adequado
            enquadramento tributário;
            <br /> – Revisão das práticas de emissão de documentos fiscais e
            escrituração, apurações e recolhimentos do ICMS-ST;
            <br /> – Gestão de créditos e ressarcimento ICMS-ST;
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Assessoria e Gestão</strong> <br />
            Buscando sempre o crescimento saudável dos nossos parceiros e
            consequentemente uma parceria cada vez mais sólida, a Select Prime
            tem os seguintes tipos de assessoria na captação de recursos
            financeiros de forma inteligente e sustentável; <br /> – Capital de
            Giro; <br /> – Antecipação de Recebíveis; <br /> – Fundos de
            Investimento Imobiliário; <br /> – Cartas de Crédito.
            <br />
            Temos como diferencial de mercado operações de crédito
            personalizadas e assessoria para entregar viabilidade com agilidade
            aos nossos clientes.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Incentivo à Pesquisa e Desenvolvimento Tecnológico</strong>{" "}
            <br />
            As empresas que investem em pesquisa e desenvolvimento de novos
            produtos ou processos de fabricação, poderão usufruir dos seguintes
            benefícios: <br />
            <br /> a) Dedução, na apuração do lucro líquido, dos dispêndios com
            Pesquisa & Desenvolvimento Tecnológico, inclusive aqueles com
            instituições de pesquisa, universidades ou inventores independentes;
            <br />
            b) Exclusão, na determinação do lucro real para cálculo do IRPJ e da
            base de cálculo da CSLL, do valor correspondente a até 60% da soma
            dos dispêndios efetuados com P&D. O percentual poderá atingir 100%
            se atendidos outros requisitos; <br />
            c) Redução de 50% do IPI na compra de equipamentos (nacionais ou
            importados) destinados a P&D; <br />
            d) Depreciação integral, no ano de aquisição, dos bens adquiridos
            para aplicação no P&D; <br />
            e) Amortização acelerada dos dispêndios para aquisição de bens
            intangíveis para P&D; <br />
            f) Redução a zero da alíquota do imposto de renda retido na fonte
            nas remessas efetuadas para o exterior destinadas ao registro e
            manutenção de marcas, patentes e cultivares;
            <br /> – Os benefícios visam estimular a fase de maior incerteza
            quanto à obtenção de resultados econômicos e financeiros pelas
            empresas no processo de criação e testes de novos produtos,
            processos ou aperfeiçoamento dos mesmos (risco tecnológico).
            <br />– Aplicam-se às pessoas jurídicas com regularidade fiscal, sob
            regime de tributação do Lucro Real, que desenvolvam atividades de
            pesquisa e de inovação tecnológica. <br /> – Assessoramos as
            empresas na implantação do P&D, organização das informações
            relativas aos projetos, levantamento dos dispêndios, apuração do
            benefício e envio das informações ao MCT (Ministério da Ciência e
            Tecnologia). <br /> – Foco: Indústrias – Lucro Real.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Desoneração da Folha de Pagamento</strong> <br />
            Recuperação de valores recolhidos pela empresa a título de
            Contribuição Previdenciária Patronal (INSS – 20%) sobre as verbas
            indenizatórias e não habituais contidas na folha de pagamento, bem
            como valores decorrentes da limitação da base de cálculo das
            Contribuições parafiscais recolhidas por conta dos terceiros –
            Salário-Educação, INCRA, SENAI, SESI, SENAC, SESC, SEBRAE dentre
            outros (Sistema S) a 20 salários mínimos, ao invés do valor total da
            folha de pagamento.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>
              Revisão Fiscal para Empresas Optantes do SIMPLES Nacional
            </strong>{" "}
            <br />
            Apesar da tributação reduzida, grande parte das empresas acaba
            pagando impostos a maior no SIMPLES. Diante disso, fazemos um
            diagnóstico preciso, revisando as apurações dos últimos cinco anos,
            garantindo que os benefícios e descontos previstos na legislação
            sejam aproveitados e também buscamos a restituição/compensação dos
            valores recolhidos indevidamente.
            <br />
            Foco: Farmácias, mercados, lojas de conveniência, bares,
            restaurantes, revenda de pneus, lojas de cosméticos e perfumaria,
            lojas de autopeças e lojas de cama, mesa e banho.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>
              Habilitação e Transparência dos Créditos Acumulados de
              ICMS/PR-SISCRED
            </strong>{" "}
            <br />
            Atuamos no processo de habilitação e transferência de créditos
            acumulados de ICMS, auxiliando nossos clientes desde o
            credenciamento até a transferência do crédito habilitado.
          </Typography>
          <Typography className="font-normal mt-3">
            <strong>Compliance Tributário e Auditoria de Arquivos SPED</strong>{" "}
            <br />
            Na era da informação e do aperfeiçoamento tecnológico, as empresas
            vivem um período de profunda adaptação na forma de organizar e
            transmitir dados às autoridades fiscais. Nos últimos anos, a
            digitalização de arquivos provocou um significativo aumento na carga
            de obrigações acessórias e mais obrigações estão por vir.
            <br />
            Podemos afirmar que a totalidade das informações geradas pelas
            companhias pode ser monitorada pelos órgãos fiscalizadores. Assim,
            as empresas passaram a se preocupar cada vez mais com o cumprimento
            da legislação.
            <br />
            As autoridades fiscais federais, estaduais e municipais já têm
            tecnologia e mão de obra capazes de fazer uma verificação detalhada
            das informações, os erros e inconsistências podem ser mais
            facilmente detectados e gerar pesadas autuações. Para se adequar é
            importante melhorar os processos na origem das informações que serão
            encaminhadas aoFisco.
            <br />
            Por meio do Compliance Tributário realizamos revisões fiscais e
            contábeis, análise de processos e controles, auditoria das
            informações que irão compor o SPED, de modo a avaliar sua
            consistência antes da entrega ao Fisco, permitindo a adoção de
            medidas corretivas anteriormente ao inicio de um procedimento
            administrativo ou judicial, reduzindo assim, o custo com possíveis
            multas e processos.
            <br />
            Além das revisões, o Compliance Tributário indica os pontos de risco
            o que possibilita a definição de um plano de ação, a fim de eliminar
            inconsistências, minimizar riscos e garantir transparência e
            segurança na transmissão de dados à fiscalização.
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
            <div className="relative lg:w-full lg:min-h-[20rem] lg:py-4 xl:py-10 lg:px-24 xl:px-32 bg-white">
              <Title
                title="Especialidades"
                subheader="Serviços"
                colorTitle="text-black"
                colorsubheader="text-black"
              />

              <div className="grid grid-cols-3 grid-flow-col gap-4 mt-5">
                {arrCard.map((item, index) => (
                  <Card
                    key={index}
                    variant="filled"
                    className="w-full p-8 bg-zinc-800 rounded-lg"
                  >
                    <CardHeader
                      floated={false}
                      shadow={false}
                      color="transparent"
                      className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center grid justify-items-stretch"
                    >
                      <p className="font-normal uppercase text-white">
                        {item.title}
                      </p>
                    </CardHeader>
                    <CardBody className="p-0">
                      <p className="font-normal text-white">
                        {item.description}
                      </p>
                    </CardBody>
                    <CardFooter className="mt-12 p-0">
                      <Button
                        size="lg"
                        className="text-gray-100 button-view-more hover:shadow-sm hover:shadow-transparent"
                        ripple={false}
                        fullWidth={true}
                        onClick={() => handleOpen(item.text)}
                      >
                        Ler mais
                      </Button>
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
                onClick={() => setShow(!open)}
              >
                <IconClose />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <Dialog
        open={open}
        handler={handleOpen}
        size="lg"
        className="h-3/4 overflow-scroll overflow-x-hidden"
      >
        {text}{" "}
      </Dialog> */}
    </>
  );
};

export default Services;
