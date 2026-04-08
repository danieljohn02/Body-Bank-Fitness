import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import About from "@/components/home/About";
import ServicesGrid from "@/components/home/ServicesGrid";
import TrainerTeaser from "@/components/home/TrainerTeaser";
import Facility from "@/components/home/Facility";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <ServicesGrid />
      <TrainerTeaser />
      <Facility />
      <CTABanner />
    </>
  );
}
