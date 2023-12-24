import { About, Banner, Compromise, Contact, Education, Faixa, Founders, Gallery, Partners, Results, Services, Testimonials } from "./Sections";
import Hero from "./Sections/Hero";
import Investing from "./Sections/Investing";
import Simulator from "./Sections/Simulator";



export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
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
