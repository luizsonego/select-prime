import Navbar from "@/app/Components/Navbar";
import { Founders } from "@/app/Sections";
import Hero from "@/app/Sections/Hero";
// import Investing from "@/app/Sections/Investing";
// import Simulator from "@/app/Sections/Simulator";
import dynamic from "next/dynamic";

const DynamicInvesting = dynamic(() => import("@/app/Sections/Investing"), {
  loading: () => <p>Loading...</p>,
});
const DynamicSimulator = dynamic(() => import("@/app/Sections/Simulator"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DynamicInvesting />
      <DynamicSimulator />
      <Founders />
    </>
  );
}
