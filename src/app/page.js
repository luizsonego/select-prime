import {
  About, Banner, Compromise, Contact, Education, Faixa, Founders, Gallery, Hero, Investing, Partners, Results, Services, Simulator, Testimonials
} from "./Sections";

const Home = () => {
  return (
    <>
      <Hero />
      <Investing />
      <Simulator />
      <Founders />
      <Testimonials />
      <About />
      <Faixa />
      <Gallery />
      <Results />
      <Education />
      <Services />
      <Partners />
      <Banner />
      <Compromise />
      <Contact />
    </>
  );
}

export default Home;