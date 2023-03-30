import Image from 'next/image';

import { RedFillRoundButton } from '@/components/Button';
import { Section } from '@/layouts/Section';
import { TextDirections } from '@/utils/global';
import heroNewsMobilePic from '@@/images/news/hero-news-mobile.jpg';
import heroNewsPic from '@@/images/news/hero-news.jpg';

type IHeroNewsProps = {
  date?: string;
  title?: string;
  description?: string;
};
const Index = (props: IHeroNewsProps) => {
  const {
    date = 'Nov 1 2023',
    title = 'Lorem ipsum dolor sit amet consectetur. Malesuada amet.',
    description = 'Lorem ipsum dolor sit amet consectetur. Quis eu velit diam aliquam enim habitant in. Eget velit netus amet sagittis tellus viverra sollicitudin sit. Vel purus quam sed ut dui lacinia. Amet ac adipiscing dictum auctor enim viverra. Dolor est diam id mauris placerat diam semper.',
  } = props;
  return (
    <Section
      title="News and events"
      titleAlign={TextDirections.Left}
      padding="pt-[min(3.5vw,53px)] px-[5%] md:px-[min(7vw,100px)]"
    >
      <div className="relative ">
        <Image
          src={heroNewsPic}
          alt="StacksBowers"
          className="hidden aspect-[1240/606] w-full lg:block"
        />
        <Image
          src={heroNewsMobilePic}
          alt="StacksBowers"
          className="block aspect-[374/460] w-full ssm:h-[350px] lg:hidden"
        />
        <div
          className={`poppins400 absolute top-1/2 m-auto ml-[7.1%]  w-[calc(100%-15%)] -translate-y-1/2 text-white xl:w-[calc(50%-1%)]`}
        >
          <div className="reveal-active fade-left mb-[5px] text-[16px]">
            <p>{date}</p>
          </div>
          <div className="reveal-active fade-left mb-[19px] text-[26px] leading-[32.76px] lg:text-[36px] lg:leading-[51px]">
            <p>{title}</p>
          </div>
          <div className="reveal-active fade-bottom mb-[12px] text-[16px] leading-[23px] lg:text-[18px] lg:leading-[27px]">
            <p>{description}</p>
          </div>
          <RedFillRoundButton title="read story" link="/NewsDetail" />
        </div>
      </div>
    </Section>
  );
};
export default Index;
