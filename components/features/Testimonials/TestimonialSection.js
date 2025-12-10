import SectionHeading from '../SectionHeading';
import TestimonialCards from './TestimonialCards';

const TestimonialSection = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <SectionHeading sectiontitle="What Our Clients Say" subtitle="Our Customers are our first priority" />
        <TestimonialCards />
      </section>
    </div>
  );
};

export default TestimonialSection;
