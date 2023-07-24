import Hero from "./Sections/Hero";
import dynamic from "next/dynamic";
import { Contact } from "./Sections";

const DynamicEducation = dynamic(() => import("./Sections/Education"), {
  loading: () => <p>Loading...</p>,
});
const DynamicInvesting = dynamic(() => import("./Sections/Investing"), {
  loading: () => <p>Loading...</p>,
});
const DynamicSimulator = dynamic(() => import("./Sections/Simulator"), {
  loading: () => <p>Loading...</p>,
});
const DynamicAbout = dynamic(() => import("./Sections/About"), {
  loading: () => <p>Loading...</p>,
});
const DynamicFounders = dynamic(() => import("./Sections/Founders"), {
  loading: () => <p>Loading...</p>,
});
const DynamicTestimonials = dynamic(
  () => import("./Sections/Testimonials"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const DynamicGallery = dynamic(() => import("./Sections/Gallery"), {
  loading: () => <p>Loading...</p>,
});
const DynamicFaixa = dynamic(() => import("./Sections/Faixa"), {
  loading: () => <p>Loading...</p>,
});
const DynamicResults = dynamic(() => import("./Sections/Results"), {
  loading: () => <p>Loading...</p>,
});
const DynamicServices = dynamic(() => import("./Sections/Services"), {
  loading: () => <p>Loading...</p>,
});
const DynamicPartners = dynamic(() => import("./Sections/Partners"), {
  loading: () => <p>Loading...</p>,
});
const DynamicCompromise = dynamic(() => import("./Sections/Compromise"), {
  loading: () => <p>Loading...</p>,
});
const DynamicBanner = dynamic(() => import("./Sections/Banner"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <DynamicInvesting />
      <DynamicSimulator />
      <DynamicFounders />
      <DynamicTestimonials />
      <DynamicAbout />
      <DynamicFaixa />
      <DynamicGallery />
      <DynamicResults />
      <DynamicEducation />
      <DynamicServices />
      <DynamicPartners />
      <DynamicBanner />
      <DynamicCompromise />
      <Contact />
    </>
  );
}
