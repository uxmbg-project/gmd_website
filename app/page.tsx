import Hero from "@/components/sections/Hero"
import ChoosingUs from "@/components/features/ChoosingUs/ChoosingUsSection"
import ServiceSection from "@/components/features/ServiceSection/ServiceSection"
import TestimonialSection from "@/components/features/Testimonials/TestimonialSection"
import ConsultationSection from "@/components/features/Consultation/ConsultationSection"
import FaqSection from "@/components/features/Faq/FaqSection"
import GMDAbout from "@/components/features/GMDAbout/GMDAboutSection"




export default function Home() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-white">
      <Hero backgroundImage='/logo/HeroImages.png' Heading="GMD Auto Group" subtitle="Driven By Excellence" />
      <ServiceSection />
      <ChoosingUs />
      <ConsultationSection />
      <TestimonialSection />
      <GMDAbout />
      <FaqSection />

    </div>
  );
}
