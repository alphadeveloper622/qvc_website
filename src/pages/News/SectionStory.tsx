import Image from 'next/image';

import { RedFillRoundButton } from '@/components/Button';
import { Section } from '@/layouts/Section';
import storySectionPic from '@@/images/news/story-section.jpg';

type IHeroNewsProps = {
  date?: string;
  title?: string;
  description?: string;
  className?: string;
};
type ISectionStoryProps = {
  className?: string;
  reverse?: boolean;
};
const Summary = (props: IHeroNewsProps) => {
  const {
    date = 'Nov 1, 2023',
    title = 'Lorem ipsum dolor sit amet consectetur malesuada amet',
    description = 'Lorem ipsum dolor sit amet consectetur. Tristique ut lectus magnis risus sed venenatis nisl rutrum. Senectus quis diam tellus massa. Tellus consequat dictum quis vulputate nunc.',
  } = props;
  return (
    <div className={`${props.className} poppins400 md:w-1/2`}>
      <div className="mt-[17px] text-[16px]">
        <p>{date}</p>
      </div>
      <div className="mb-[30px] text-[20px] leading-[34px] lg:mb-[20px] xl:mb-[38px] xl:text-[28px] xl:leading-[42px]">
        <p>{title}</p>
      </div>
      <div className="mb-[15px] text-[13px] leading-[16px] xl:mb-[20px] xl:text-[14px] xl:leading-[21px]">
        <p>{description}</p>
      </div>
      <RedFillRoundButton title="read story" link="/NewsDetail" />
    </div>
  );
};

const SectionStory = (props: ISectionStoryProps) => {
  const { reverse = false } = props;
  return (
    <Section
      className={`${props.className ? props.className : ''}  max-h-[390px]`}
    >
      <div className="flex border border-solid border-[#C8C8C8] py-[30px] px-[30px]">
        {reverse && <Summary className="pl-[4vw]" />}
        <div className="w-1/2">
          <Image src={storySectionPic} alt="StacksBowers" className="" />
        </div>
        {!reverse && <Summary className="pl-[4vw]" />}
      </div>
    </Section>
  );
};
export default SectionStory;
