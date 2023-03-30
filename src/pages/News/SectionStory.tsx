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
    <div className={`${props.className} poppins400 md:w-1/2 md:pr-[100px]`}>
      <div className="poppins600 mt-[17px] text-[16px]">
        <p>{date}</p>
      </div>
      <div className="poppins600 text-[20px] leading-[34px] xl:text-[28px] xl:leading-[42px]">
        <p>{title}</p>
      </div>
      <hr
        className=""
        style={{
          marginTop: '19px',
          marginBottom: '19px',
          width: '75px',
          border: '3px solid #11253c',
        }}
      />
      <div className="mb-[15px] text-justify text-[13px] leading-[16px] xl:mb-[20px] xl:text-[14px] xl:leading-[21px]">
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
      <div className="group flex border border-solid border-[#C8C8C8] py-[30px] px-[30px]">
        {reverse && <Summary className="pl-[4vw]" />}
        <div className="w-1/2">
          <Image
            src={storySectionPic}
            alt="StacksBowers"
            className="transition-all duration-300 ease-in-out group-hover:opacity-60 "
          />
        </div>
        {!reverse && <Summary className="pl-[4vw]" />}
      </div>
    </Section>
  );
};
export default SectionStory;
