import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import {
  benefitOne,
  benefitTwo,
  Investing,
  quotes,
  testimonials,
  results as dataResult,
  knowOne,
  knowTwo,
  services,
  information,
  commitment,
  quotesTwo,
  investing,
  founders,
} from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Investings from "../components/investing";
import Section from "../components/section";
import VideoTestimonial from "../components/videoTestimonial";
import About from "../components/about";
import Quote from "../components/quote";
import Gallery from "../components/gallery";
import KnowMore from "../components/knowmore";
import Results from "../components/results";

import Services from "../components/services";
import Image from "next/image";
import Partners from "../components/partners";
import Info from "../components/info";
import Contact from "../components/contact";
import Simulator from "../components/simulator";
import Founders from "../components/founders";
import PopupWhatsApp from "../components/popupWhatsapp";
import { Tangerine } from "next/font/google";

import bgEducational from "../public/img/dollar.jpg";
import bgLogo from "../public/img/logo.png";
import bgOffice from "../public/img/office/sala-capa.jpg";

const tangerine = Tangerine({
  weight: ["400", "700"],
  subsets: ["latin"],
  adjustFontFallback: false,
});

const arrImage = [
  {
    image: "../public/img/partners/goldfield.png",
  },
  {
    image: "../public/img/partners/racon.png",
  },
  {
    image: "../public/img/partners/rtx.png",
  },
];

const Home = () => {
  return (
    <>
      <Head>
        <title>Select Prime Financial Solutions</title>
        <meta
          name="description"
          content="A Select Prime Solution Financial é especialista em soluções financeiras inteligentes para sua vida pessoal e empresarial. Oferecemos consultoria financeira personalizada, gestão de investimentos, planejamento da aposentadoria e assessoria para empresas. Entre em contato para uma consulta gratuita."
        />
        <meta
          name="keywords"
          content="financiamento, aposentadoria, investimentos, consultoria, gestão de patrimônio, Select Prime Solution Financial, soluções financeiras, consultoria financeira, gestão de investimentos, planejamento da aposentadoria, assessoria para empresas"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://selectprimefinancial.com/" />
        <meta property="og:title" content="Select Prime Financial Solutions" />
        <meta
          property="og:description"
          content="A Select Prime Solution Financial é especialista em soluções financeiras inteligentes para sua vida pessoal e empresarial. Oferecemos consultoria financeira personalizada, gestão de investimentos, planejamento da aposentadoria e assessoria para empresas. Entre em contato para uma consulta gratuita."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar isAnchor={true} />
      <Hero />
      <Section bgColor={"bg-black"} className="h-1/2 px-4 py-16" id="investing">
        <SectionTitle
          textColor={"text-degrade"}
          title=" Comece a investir"
        ></SectionTitle>
        <Investings data={investing} />
      </Section>
      <Section bgColor={"bg-white"} id="simulator">
        <SectionTitle
          textColor={"text-black"}
          title="Simule seus investimentos"
        >
          <h3 className="my-6 text-xl text-center text-black">
            Faça uma simulação do seu aporte mensal e saiba o valor da carta de
            crédito que você teria acesso.
          </h3>
          <p className="mb-6 text-lg text-center text-black">
            Qual valor você poderia investir mensalmente sem comprometer seu
            orçamento mensal?
          </p>
          <Simulator />
        </SectionTitle>
      </Section>
      <Section bgColor={"bg-gray-900"} bgImg={bgLogo}>
        <SectionTitle
          textColor={"text-white"}
          title="Fundadores"
        ></SectionTitle>
        <Founders data={founders} />
      </Section>
      <Section bgColor={"bg-white"} id="testimonial">
        <SectionTitle
          textColor={"text-black"}
          title="Depoimentos"
        ></SectionTitle>
        <Testimonials data={testimonials} />
        <Section bgColor={"bg-gray-200"} className="mt-20">
          <VideoTestimonial />
        </Section>
      </Section>
      <Section bgColor={"bg-black"} bgImg={bgOffice} id="about">
        <SectionTitle
          textColor={"text-degrade"}
          title="Sobre Nós"
        ></SectionTitle>
        <About />
        <Video />
        <SectionTitle
          textColor={"text-white"}
          fontStyle={tangerine.className}
          title="O futuro já é presente...!"
          fontSize="3.3rem"
        ></SectionTitle>
      </Section>

      <Section bgColor={"bg-gradient-to-r from-slate-500 to-zinc-800"}>
        <Quote data={quotes} />
      </Section>

      <Section id="education" bgColor={"bg-white"} bgImg={bgOffice}>
        <Gallery />
        <KnowMore data={knowTwo} className="mt-20" />
      </Section>

      <Section bgColor={"bg-black"} id="results">
        <SectionTitle
          textColor={"text-degrade"}
          pretitle="Nossos"
          title="Resultados"
        ></SectionTitle>
        <Results txColor="text-white" data={dataResult} />
      </Section>

      <Section bgColor={"bg-white"} bgImg={bgEducational}>
        <KnowMore data={knowOne} />
      </Section>

      <Section bgColor={"bg-white"}>
        <SectionTitle
          textColor={"text-black"}
          pretitle="SERVIÇOS"
          title="Especialidades"
        ></SectionTitle>
        <Services data={services} />
      </Section>

      <Section bgColor={"bg-black"}>
        <SectionTitle
          textColor={"text-degrade"}
          pretitle=""
          title="Nossos Parceiros"
        ></SectionTitle>
        <Partners />
      </Section>

      <Section bgColor={"bg-white"}>
        <SectionTitle textColor={"text-black"} title=""></SectionTitle>
        <Info data={information} grid="grid-cols-1 md:grid-cols-4" />
      </Section>

      <Section bgColor={"bg-black"}>
        <SectionTitle
          textColor={"text-degrade"}
          title="Compromisso"
        ></SectionTitle>
        <Info
          data={commitment}
          grid="grid-cols-1 md:grid-cols-3"
          fontSize={25}
        />
        <Quote data={quotesTwo} />
        <SectionTitle></SectionTitle>
      </Section>

      <Section bgColor={"bg-white"} id="contact">
        <Contact />
      </Section>
      {/* <PopupWidget /> */}
      <PopupWhatsApp />
      <Footer />
    </>
  );
};

export default Home;
