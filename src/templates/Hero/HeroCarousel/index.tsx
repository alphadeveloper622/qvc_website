import Image from 'next/image';

import { SearchForm } from '@/components/Form';
import { Section } from '@/layouts/Section';
import heroHomeMobilePic from '@@/images/hero-home-mobile.jpg';
import heroHomePic from '@@/images/hero-home.jpg';

type IItem = {
  id: string;
  name: string;
  title: string;
  placeHolder: string;
};
export default function Index() {
  const fields: IItem[] = [
    {
      id: 'look-up',
      name: 'look-up-coin',
      title: 'Look-Up Your Coin',
      placeHolder: 'Certification Number',
    },
  ];
  return (
    <Section padding="px-[0px] py-[0px]">
      <div className="hero-screen relative hidden md:block">
        <Image
          src={heroHomePic}
          alt="StacksBowers"
          className="aspect-[1440/616] w-full"
        />
        <div
          className={`poppins400 absolute top-[8vw] left-[8vw] text-white desktop:top-[115px] desktop:left-[115px]`}
        >
          <div className="hero-title text-[30px] lg:text-[52px]">
            <p>Get your coins certified.</p>
            <p>Maximize your value.</p>
          </div>
          <div className="hero-subtitle text-[20px] lg:text-[28px]">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Ut id purus tincidunt congue nisl eget.</p>
          </div>
        </div>
        {/* <div className="h-[71px] w-full"></div> */}
      </div>
      <div className="hero-mobile relative md:hidden">
        <Image
          src={heroHomeMobilePic}
          alt="StacksBowers"
          className="aspect-[414/452] w-full"
        />
        <div
          className={`poppins400 absolute top-[30px] left-[28px] text-white`}
        >
          <div className="hero-title text-[26px]">
            <p>Get your coins certified.</p>
            <p>Maximize your value.</p>
          </div>
        </div>
        {/* <div className="h-[53px] w-full"></div> */}
      </div>
      <SearchForm
        fields={fields}
        className="h-auto md:absolute md:bottom-0 md:w-[58.6%] md:translate-y-[35%]"
      />
    </Section>
  );
}
