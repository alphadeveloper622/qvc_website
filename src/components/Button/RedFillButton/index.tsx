import Image from 'next/image';

import heroButtonArrowPic from '@@/images/hero-button-arrow.svg';

type IButtonProps = {
  title: string;
  subtitle?: string;
  className?: string;
};
const Index = (props: IButtonProps) => {
  return (
    <div
      className={`${props.className} poppins400  hero-button flex h-[100px] w-[100%] cursor-pointer items-center justify-end rounded-r-[4px] bg-[#A5221E] text-white transition-all duration-300 ease-in-out hover:bg-[#781b18] md:h-[148px] md:max-w-[843px]`}
    >
      <div className="text-right text-[20px] md:text-[30px]">
        <p>{props.title}</p>
        {props.subtitle && <p>{props.subtitle}</p>}
      </div>
      <div className=" px-[23px]">
        <Image
          src={heroButtonArrowPic}
          alt="StacksBowers"
          className="w-[80%] md:w-[100%]"
        />
      </div>
    </div>
  );
};
export default Index;
