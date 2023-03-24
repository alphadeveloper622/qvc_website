import Image from 'next/image';

import { DirectorySearchForm } from '@/components/Form';
import { Section } from '@/layouts/Section';
import heroMobilePic from '@@/images/directory-search/hero-directory-search-m.jpg';
import heroPic from '@@/images/directory-search/hero-directory-search.jpg';

type IHeroCoinLookUpProps = {
  title?: string;
  description?: string;
  className?: string;
};
const Index = (props: IHeroCoinLookUpProps) => {
  const {
    title = 'Find a Dealer',
    description = 'Lorem ipsum dolor sit amet consectetur. Ut id purus tincidunt congue nisl eget. ',
  } = props;

  return (
    <Section padding={`${props.className} px-0`}>
      <div className="relative">
        <Image
          src={heroPic}
          alt="StacksBowers"
          className="hidden aspect-[1440/360] w-full md:block"
        />
        <Image
          src={heroMobilePic}
          alt="StacksBowers"
          className="block aspect-[414/199] w-full mobile:h-[199px] md:hidden"
        />
        <div
          className={`poppins400 absolute top-1/2 m-auto w-full -translate-y-2/3 pl-[28px] pr-[47px] text-white md:pl-[7vw]  xl:w-2/3 desktop:px-[100px]`}
        >
          <h1
            className={`mb-[9px] text-[26px] leading-[32.76px] md:mb-[15px] md:text-[33px] md:leading-[42px] lg:text-[3.6vw] lg:leading-[4.5vw] desktop:text-[52px] desktop:leading-[65.52px]`}
          >
            {title}
          </h1>
          <h2
            className={`text-[16px] leading-[21.12px] md:text-[2vw] md:leading-[2.5vw] desktop:text-[28px] desktop:leading-[36.96px]`}
          >
            {description}
          </h2>
        </div>
      </div>
      <DirectorySearchForm className="w-full md:absolute md:bottom-0 md:left-[50%] md:h-[7.5vw] md:translate-y-[50%] md:translate-x-[-50%]  md:px-[7vw] desktop:max-h-[174px] desktop:px-[100px]" />
    </Section>
  );
};
export default Index;
