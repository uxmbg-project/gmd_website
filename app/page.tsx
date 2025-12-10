import Hero from "@/components/sections/Hero"
import ChoosingUs from "@/components/features/ChoosingUs/ChoosingUsSection"
import ServiceSection from "@/components/features/ServiceSection/ServiceSection"
import TestimonialSection from "@/components/features/Testimonials/TestimonialSection"
import ConsultationSection from "@/components/features/Consultation/ConsultationSection"
import FaqSection from "@/components/features/Faq/FaqSection"
import GMDAbout from "@/components/features/GMDAbout/GMDAboutSection"



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero Heading="GMD Auto & Smash Repairs" subtitle="Please find the best services we provide, ensuring quality and reliability for your vehicle." />
      <ServiceSection />
      <ChoosingUs />
      <ConsultationSection />
      <TestimonialSection />
      <GMDAbout />
      <FaqSection />
    </div>
  );
}
