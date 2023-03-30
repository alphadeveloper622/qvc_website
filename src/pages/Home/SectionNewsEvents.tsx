import { HomeNewsCard } from '@/components/Card';
import { Section } from '@/layouts/Section';

export default function SectionNewsEvents() {
  return (
    <Section
      padding="md:px-[10px] lg:px-[100px] px-0 md:pb-[98px] pb-[53px] md:pt-[125px] pt-[40px]"
      title="News & Events"
    >
      <div className="block md:flex">
        <HomeNewsCard
          screen="large"
          className="reveal fade-left md:w-[50%]"
          title="Lorem ipsum dolor sit amet"
          subtitle="consectetur. Malesuada amet."
        />
        <HomeNewsCard
          screen="small"
          className="reveal fade-right md:w-[25%]"
          title="Lorem ipsum dolor sit"
          subtitle="amet consectetur."
        />
        <HomeNewsCard
          screen="small"
          className="reveal  fade-right md:w-[25%]"
          title="Lorem ipsum dolor sit"
          subtitle="amet consectetur."
        />
      </div>
    </Section>
  );
}
