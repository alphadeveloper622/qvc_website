import Image from 'next/image';
import Link from 'next/link';

import { Section } from '@/layouts/Section';
import heroMobilePic from '@@/images/news-detail/hero-news-detail-m.jpg';
import heroPic from '@@/images/news-detail/hero-news-detail.jpg';

type IHeroNewsDetailProps = {
  breadCrumb?: string;
  title?: string;
};
const Index = (props: IHeroNewsDetailProps) => {
  const {
    // eslint-disable-next-line unused-imports/no-unused-vars
    breadCrumb = 'Home | News | Title of this article',
    title = 'Lorem ipsum dolor sit amet consectetur. Malesuada amet.',
  } = props;
  return (
    <Section padding="px-0">
      <div className="relative ">
        <Image
          src={heroPic}
          alt="StacksBowers"
          className="hidden aspect-[1440/550] w-full lg:block"
        />
        <Image
          src={heroMobilePic}
          alt="StacksBowers"
          className="block aspect-[414/374] w-full ssm:h-[350px] lg:hidden"
        />
        <p
          className={`poppins600 reveal-active fade-left absolute top-[15px] ml-[3.6%] text-[16px] leading-[24px] text-white`}
        >
          {/* {breadCrumb} */}
          <Link href="/" className="border-solid border-white hover:border-b">
            Home |
          </Link>
          <Link
            href="/News"
            className="border-solid border-white hover:border-b"
          >
            {' '}
            News |
          </Link>
          <Link
            href="/NewsDtail"
            className="border-solid border-white hover:border-b"
          >
            {' '}
            Title of this article
          </Link>
        </p>
        <h1
          className={`poppins400 text-ceter reveal-active fade absolute top-1/2 m-auto w-full -translate-y-1/2 pl-[48px] pr-[64px] text-[33px] leading-[42px] text-white lg:text-[50px] lg:leading-[71.5px] xl:w-1/2 xl:pl-[10%] xl:pr-[1%]`}
        >
          {title}
        </h1>
      </div>
    </Section>
  );
};
export default Index;
