import Image from 'next/image';

import { CoinLookUpForm } from '@/components/Form';
import { Section } from '@/layouts/Section';
import { IItem } from '@/utils/global';
import heroMobilePic from '@@/images/coin-lookup/hero-coin-lookup-m.jpg';
import heroPic from '@@/images/coin-lookup/hero-coin-lookup.jpg';

type IHeroCoinLookUpProps = {
  title?: string;
  description?: string;
  className?: string;
};
const Index = (props: IHeroCoinLookUpProps) => {
  const {
    title = 'Coin Look-Up',
    description = 'Check our database for coins that we have stickered. The database is updated every night, so if your coin was just submitted, please be patient.',
  } = props;
  const fields: IItem[] = [
    {
      id: 'look-up',
      name: 'look-up-coin',
      title: 'Certification Number',
      placeHolder: 'Certification Number',
    },
  ];
  return (
    <Section padding={`${props.className} px-0`}>
      <div className="relative">
        <Image
          src={heroPic}
          alt="StacksBowers"
          className="hidden aspect-[1440/360] w-full md:block md:h-[360px]"
        />
        <Image
          src={heroMobilePic}
          alt="StacksBowers"
          className="block aspect-[414/199] w-full mobile:h-[199px] md:hidden"
        />
        <div
          className={`poppins400 absolute top-1/2 m-auto w-full -translate-y-2/3 pl-[28px] pr-[47px] text-white md:pl-[7%] xl:w-1/2`}
        >
          <h1
            className={`reveal-active fade-left mb-[9px] text-[26px] leading-[32.76px] md:mb-[15px] md:text-[33px] md:leading-[42px] lg:text-[52px] lg:leading-[65.52px]`}
          >
            {title}
          </h1>
          <h2
            className={`reveal-active fade-bottom text-[16px] leading-[21.12px]  md:text-[22px] md:leading-[29.04px]`}
          >
            {description}
          </h2>
        </div>
      </div>
      <CoinLookUpForm
        fields={fields}
        className="reveal-active fade w-full md:absolute md:bottom-0 md:left-[50%] md:h-[12vw] md:translate-y-[50%]  md:translate-x-[-50%] md:px-[7vw] desktop:max-h-[172.8px] desktop:px-[100px]"
      />
    </Section>
  );
};
export default Index;
