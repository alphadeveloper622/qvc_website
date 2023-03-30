import { ReactNode } from 'react';

import Image, { StaticImageData } from 'next/image';

import { TextDirections, BorderDirections } from '@/types/global';
import MarkPic from '@@/images/mark.png';

type ISectionProps = {
  title?: string;
  description?: string;
  padding?: string;
  children: ReactNode;
  className?: string;
  bgDesktopImage?: string | StaticImageData;
  bgMobileImage?: string | StaticImageData;
  bgColor?: string;
  mark?: boolean;
  titleAlign?: TextDirections;
  borderColor?: string;
  borderDirection?: BorderDirections;
};

const Section = (props: ISectionProps) => (
  <div
    className={`${
      props.className ? props.className : ''
    } relative mx-auto min-w-[350px] max-w-[1440px] ${
      props.padding ? props.padding : 'py-0 md:px-[min(7vw,100px)] '
    } ${props.bgColor ? props.bgColor : ''} ${
      props.borderColor ? `${props.borderColor}` : 'border-black'
    } ${props.borderDirection ? props.borderDirection : ''}`}
  >
    {props.mark && (
      <>
        <Image
          src={MarkPic}
          alt="StacksBowers"
          height={95}
          width={95}
          className="absolute top-0 right-[50%] hidden translate-x-[50%] translate-y-[-50%] md:block"
        />
        <Image
          src={MarkPic}
          alt="StacksBowers"
          height={69}
          width={69}
          className="absolute top-0 right-[50%] translate-x-[50%] translate-y-[-50%] md:hidden"
        />
      </>
    )}
    {props.bgDesktopImage && (
      <Image
        src={props.bgDesktopImage}
        alt="StacksBowers"
        fill
        priority
        className=" -z-10 hidden w-[100%] object-cover md:block"
      />
    )}
    {props.bgMobileImage && (
      <Image
        src={props.bgMobileImage}
        alt="StacksBowers"
        fill
        priority
        className=" mobile -z-10 w-[100%] object-cover md:hidden"
      />
    )}
    {(props.title || props.description) && (
      <div
        className={`mb-[min(3.5vw,53px)] ${
          props.titleAlign
            ? `${props.titleAlign} reveal-active fade-left`
            : 'reveal fade-left text-center'
        } `}
      >
        {props.title && (
          <h2 className="poppins400 tex-black text-[28px] md:text-[40px]">
            {props.title}
          </h2>
        )}
        {props.description && (
          <div className="mt-[5vw] text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
