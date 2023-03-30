import Image from 'next/image';

import { RedFillRoundButton } from '@/components/Button';
import { ButtonTypes } from '@/utils/global';
import newsCardLeftDeskPic from '@@/images/home/news_card_left_d.jpg';
import newsCardLeftMobilePic from '@@/images/home/news_card_left_m.jpg';
import newsCardRightDeskPic from '@@/images/home/news_card_right_d.jpg';
import newsCardRightMobilePic from '@@/images/home/news_card_right_m.jpg';

type IHomeNewsCardProps = {
  className?: string;
  screen?: string;
  title?: string;
  subtitle?: string;
};

const Index = (props: IHomeNewsCardProps) => {
  const { screen = 'small' } = props;
  return (
    <div className={`${props.className} relative m-auto w-fit min-w-[250px]`}>
      {screen === 'small' && (
        <>
          <Image
            src={newsCardRightDeskPic}
            alt="StacksBowers"
            className="hidden min-h-[368px] object-cover transition-all duration-300 ease-in-out hover:opacity-80 md:block"
          />
          <Image
            src={newsCardRightMobilePic}
            alt="StacksBowers"
            className="block transition-all duration-300 ease-in-out hover:opacity-80 md:hidden"
          />
        </>
      )}
      {screen === 'large' && (
        <>
          <Image
            src={newsCardLeftDeskPic}
            alt="StacksBowers"
            className="hidden min-h-[368px]  object-cover transition-all duration-300 ease-in-out hover:opacity-80 md:block"
          />
          <Image
            src={newsCardLeftMobilePic}
            alt="StacksBowers"
            className="block  transition-all duration-300 ease-in-out hover:opacity-80 md:hidden"
          />
        </>
      )}
      <div className="absolute bottom-[31px] ml-[28px] md:bottom-[25.76px] md:ml-[25.5px]">
        <div className="poppins400 text-start text-[21px] text-white  md:text-[17px] md:leading-[27.6px] ">
          <p>{props.title}</p>
          <p>{props.subtitle}</p>
        </div>
        <RedFillRoundButton
          title="read story"
          className="float-left mt-[18px] md:mt-[10px]"
          bType={ButtonTypes.Button}
          link="/NewsDetail"
        />
      </div>
    </div>
  );
};

export default Index;
