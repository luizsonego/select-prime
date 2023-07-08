import Hero from "@/app/Sections/Hero";
import dynamic from "next/dynamic";

const DynamicInvesting = dynamic(() => import("@/app/Sections/Investing"), {
  loading: () => <p>Loading...</p>,
});
const DynamicSimulator = dynamic(() => import("@/app/Sections/Simulator"), {
  loading: () => <p>Loading...</p>,
});
const DynamicAbout = dynamic(() => import("@/app/Sections/About"), {
  loading: () => <p>Loading...</p>,
});
const DynamicFounders = dynamic(() => import("@/app/Sections/Founders"), {
  loading: () => <p>Loading...</p>,
});
const DynamicTestimonials = dynamic(
  () => import("@/app/Sections/Testimonials"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const DynamicGallery = dynamic(() => import("@/app/Sections/Gallery"), {
  loading: () => <p>Loading...</p>,
});
const DynamicFaixa = dynamic(() => import("@/app/Sections/Faixa"), {
  loading: () => <p>Loading...</p>,
});
const DynamicResults = dynamic(() => import("@/app/Sections/Results"), {
  loading: () => <p>Loading...</p>,
});
const DynamicServices = dynamic(() => import("@/app/Sections/Services"), {
  loading: () => <p>Loading...</p>,
});
const DynamicPartners = dynamic(() => import("@/app/Sections/Partners"), {
  loading: () => <p>Loading...</p>,
});
const DynamicCompromise = dynamic(() => import("@/app/Sections/Compromise"), {
  loading: () => <p>Loading...</p>,
});
const DynamicContact = dynamic(() => import("@/app/Sections/Contact"), {
  loading: () => <p>Loading...</p>,
});
const DynamicBanner = dynamic(() => import("@/app/Sections/Banner"), {
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
      <DynamicServices />
      <DynamicPartners />
      <DynamicBanner />
      <DynamicCompromise />
      <DynamicContact />
    </>
  );
}
