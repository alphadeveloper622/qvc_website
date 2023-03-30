import { NewsStoryCard } from '@/components/Card';
import { Section } from '@/layouts/Section';

type ISectionStoryListProps = {
  className?: string;
};
const SectionStoryList = (props: ISectionStoryListProps) => {
  return (
    <Section
      padding={`${props.className} px-[5vw] md:px-[min(7vw,100px)] pb-[130px]`}
    >
      <div className="md:flex md:justify-between">
        <NewsStoryCard
          className="reveal fade-bottom my-[33px]  mx-auto w-full md:my-0 md:mr-[27px]"
          link="/NewsDetail"
        />
        <NewsStoryCard
          className="reveal fade-bottom form1 my-[33px] mx-auto w-full md:my-0 md:mr-[27px]"
          link="/NewsDetail"
        />
        <NewsStoryCard
          className="reveal fade-bottom form2 my-[33px] mx-auto w-full md:my-0 md:mr-[27px]"
          link="/NewsDetail"
        />
        <NewsStoryCard
          className="reveal fade-bottom form3 my-[33px] mx-auto w-full md:my-0"
          link="/NewsDetail"
        />
      </div>
    </Section>
  );
};
export default SectionStoryList;
