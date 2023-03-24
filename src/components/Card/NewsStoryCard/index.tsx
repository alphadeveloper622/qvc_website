import Image from 'next/image';
import Link from 'next/link';

import storyCardDeskPic from '@@/images/news/story-card-d.jpg';
import storyCardMobilePic from '@@/images/news/story-card-m.jpg';

type INewsStoryCardProps = {
  className?: string;
  date?: string;
  summary?: string;
  link?: string;
};

const Index = (props: INewsStoryCardProps) => {
  const {
    date = 'Nov 1, 2023',
    summary = 'Lorem ipsum dolor sit amet consectetur. Amet pellentesque neque cursus ut mattis.',
    link = '/NewsDetail',
  } = props;
  return (
    <div
      className={`${props.className} container h-fit w-full border border-solid border-[#C8C8C8] p-[15px] md:w-[20vw]`}
    >
      <div className="h-1/2" style={{ contain: 'paint' }}>
        <Image
          src={storyCardDeskPic}
          alt="StacksBowers"
          className="hidden w-full md:block"
        />
        <Image
          src={storyCardMobilePic}
          alt="StacksBowers"
          className="block w-full md:hidden"
        />
      </div>
      <div className="poppins400 h-1/2 pt-[10px] text-left">
        <p className="mb-[4px] text-[13px]">{date}</p>
        <p className="mb-[15px] text-[16px] leading-[24px]">{summary}</p>
        <Link href={link} className="text-[14px] text-[#A5221E]">
          READ STORY
        </Link>
      </div>
    </div>
  );
};

export default Index;
