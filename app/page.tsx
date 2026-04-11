import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import Process from "@/components/home/Process";
import ServicesGrid from "@/components/home/ServicesGrid";
import TrainerTeaser from "@/components/home/TrainerTeaser";
import Facility from "@/components/home/Facility";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Testimonials />
      <Process />
      <ServicesGrid />
      <TrainerTeaser />
      <Facility />
      <CTABanner />
    </>
  );
}
