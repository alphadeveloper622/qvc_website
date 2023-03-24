import Image from 'next/image';

import heroButtonArrowPic from '@@/images/hero-button-arrow.svg';

type IButtonProps = {
  title: string;
  subtitle?: string;
  className?: string;
  onClickHandle?: any;
};
const Index = (props: IButtonProps) => {
  return (
    <button
      className={`${props.className} poppins400 block w-full cursor-pointer bg-[#A5221E] py-[16px] text-[20px] text-white md:absolute md:bottom-0 md:left-[50%] md:w-[19.7vw] md:translate-x-[-50%] md:translate-y-[50%] md:rounded-[4px] md:px-[3.19vw] md:text-[2vw] desktop:max-w-[284px] desktop:px-[45.9px] desktop:text-[28.8px]`}
      onClick={() => {
        props.onClickHandle;
      }}
    >
      {/* <div
       className={`${props.className} poppins400 md:  bottom-0 block bg-[#A5221E] py-[16px]    text-[20px] text-white md:absolute md:left-[50%] md:w-[284px] md:translate-x-[-50%] md:translate-y-[50%] md:rounded-[4px] md:px-[46px] md:text-[30px]`}
     > */}
      <div className="m-auto mr-[20px] flex items-center justify-end md:mr-0 md:justify-center">
        <div className="">
          <p>{props.title}</p>
          {props.subtitle && <p>{props.subtitle}</p>}
        </div>
        <div className="pl-[5px]">
          <Image
            src={heroButtonArrowPic}
            width={32}
            height={20}
            alt="StacksBowers"
            // className="w-[100%]"
          />
        </div>
      </div>
    </button>
  );
};
export default Index;
