import { HomeNewsCard } from '@/components/Card';
import { Section } from '@/layouts/Section';

export default function SectionNewsEvents() {
  return (
    <Section
      padding="md:px-[10px] lg:px-[100px] px-0 md:pb-[98px] pb-[53px] md:pt-[125px] pt-[40px]"
      title="News & Events"
    >
      <div className="block md:flex">
        <HomeNewsCard screen="large" className="md:w-[50%]" />
        <HomeNewsCard screen="small" className="md:w-[25%]" />
        <HomeNewsCard screen="small" className="md:w-[25%]" />
      </div>
    </Section>
  );
}
