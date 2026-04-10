import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ServicesGrid from "@/components/home/ServicesGrid";
import Process from "@/components/home/Process";
import TrainerTeaser from "@/components/home/TrainerTeaser";
import Testimonials from "@/components/home/Testimonials";
import Facility from "@/components/home/Facility";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ServicesGrid />
      <Process />
      <TrainerTeaser />
      <Testimonials />
      <Facility />
      <CTABanner />
    </>
  );
}
