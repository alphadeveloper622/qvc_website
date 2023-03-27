// import Carousel from '@/components/Carousel';
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import { Carousel } from '@/components/Carousel';
import { SearchForm } from '@/components/Form';
import { Section } from '@/layouts/Section';
import pic1 from '@@/images/home/carousel/carousel1.jpg';
import pic2 from '@@/images/home/carousel/carousel2.jpg';
import pic3 from '@@/images/home/carousel/carousel3.jpg';
import pic4 from '@@/images/home/carousel/carousel4.jpg';
import pic5 from '@@/images/home/carousel/carousel5.jpg';
import heroHomeMobilePic from '@@/images/home/hero-home-mobile.jpg';

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
  const CarouselData = [
    { image: pic1 },
    { image: pic2 },
    { image: pic3 },
    { image: pic4 },
    { image: pic5 },
  ];
  return (
    <Section padding="px-[0px] py-[0px]" className="z-10">
      <div className="hero-screen relative hidden md:block">
        {/* <Image
          src={heroHomePic}
          alt="StacksBowers"
          className="aspect-[1440/616] w-full"
        /> */}
        <Carousel
          data={CarouselData}
          autoPlay={true}
          rightItem={<FaArrowRight />}
          leftItem={<FaArrowLeft />}
          animationDuration={3}
          headerTextType="black"
          subTextType="white"
          size="normal"
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
