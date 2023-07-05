import Navbar from "@/app/Components/Navbar";
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

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DynamicInvesting />
      <DynamicSimulator />
      <DynamicFounders />
      <DynamicTestimonials />
      <DynamicAbout />
      <DynamicGallery />
    </>
  );
}
