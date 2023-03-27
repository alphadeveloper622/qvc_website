import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

// import style from './carousel.module.css';
import {
  activeItemClass,
  rightActiveItemClass,
  leftActiveItemClass,
  inactiveItemsClass,
  activeIndectorClass,
  noactiveIndectorClass,
} from './style';
import { CarouselModel } from './Types';

type Props = {
  data: CarouselModel[];
  autoPlay?: boolean;
  size?: 'normal' | 'large';
  headerTextType?: 'black' | 'white';
  subTextType?: 'black' | 'white';
  animationDuration?: 1 | 2 | 3 | number;
  leftItem?:
    | React.ReactHTMLElement<HTMLElement>
    | React.ReactNode
    | React.ReactChild;
  rightItem?:
    | React.ReactHTMLElement<HTMLElement>
    | React.ReactNode
    | React.ReactChild;
};

export const Carousel = ({
  data,
  autoPlay = true,
  size = 'normal',
  animationDuration = 3,
}: Props) => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const [play, setPlay] = useState(autoPlay);
  const timer = useRef(null);
  const handleNextSlide = (increase: boolean) => {
    if (increase) {
      if (activeItem + 1 > data.length - 1) {
        setActiveItem(0);
      } else {
        setActiveItem(activeItem + 1);
      }
    } else if (activeItem === 0) {
      setActiveItem(data.length - 1);
    } else {
      setActiveItem(activeItem - 1);
    }
  };
  const stopAnimate = () => {
    setPlay(false);
    clearTimeout(timer.current);
  };
  const playAnimate = () => {
    setPlay(true);
    handleNextSlide(true);
  };
  const onNavigate = (i: number) => {
    setActiveItem(i);
  };
  useEffect(() => {
    if (play) {
      timer.current = setTimeout(() => {
        handleNextSlide(true);
      }, animationDuration * 1000);
    }
  }, [activeItem]);

  return (
    <div
      id="carouselExampleCaptions"
      className="relative m-auto h-[42.7vw] max-h-[614.88px] w-full max-w-[1440px]"
    >
      <div className="absolute right-0 bottom-0 left-0 z-[2] ml-[60%] -mb-8 flex w-fit list-none justify-center p-0">
        {play ? (
          <button
            type="button"
            className="mx-[5px] box-content w-[30px] flex-initial cursor-pointer bg-clip-padding p-0 -indent-[999px] opacity-100 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Pause"
            data-name="pause"
            onClick={() => {
              stopAnimate();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>pause</title>
              <rect width="6" height="16" x="3" y="2" rx="1" ry="1" />
              <rect width="6" height="16" x="11" y="2" rx="1" ry="1" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            className="mx-[5px] box-content w-[30px] flex-initial cursor-pointer bg-clip-padding p-0 -indent-[999px] opacity-100 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Pause"
            data-name="pause"
            onClick={() => {
              playAnimate();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              height="20px"
              width="20px"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 210 210"
            >
              <path d="M179.07,105L30.93,210V0L179.07,105z" />
            </svg>
          </button>
        )}
        <div
          onMouseEnter={() => {
            stopAnimate();
          }}
          // onMouseLeave={() => {
          //   setPlay(true);
          //   handleNextSlide(true);
          // }}
        >
          {data.map((element, index) => {
            return (
              <button
                type="button"
                className={`${
                  index === activeItem
                    ? activeIndectorClass
                    : noactiveIndectorClass
                } mx-[5px] my-auto box-content h-[10px] w-[10px]  cursor-pointer rounded-lg border-[2px] border-solid border-black  bg-black p-0  transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none`}
                aria-current="true"
                aria-label="Slide 1"
                key={index}
                value={index}
                onClick={() => onNavigate(index)}
              ></button>
            );
          })}
        </div>
      </div>
      <div className="relative h-full w-full  overflow-hidden after:clear-both after:block after:content-['']">
        {data.map((item, index) => (
          <div
            className={`inner ${
              index === activeItem
                ? activeItemClass
                : index === activeItem + 1
                ? rightActiveItemClass
                : index === activeItem - 1 && activeItem !== 0
                ? leftActiveItemClass
                : index === 0 && activeItem === data.length - 1
                ? rightActiveItemClass
                : index === data.length - 1 && activeItem === 0
                ? leftActiveItemClass
                : inactiveItemsClass
            } absolute float-left h-full w-full transition-transform duration-700 ease-in-out`}
            key={index}
            // onDragStart={onDragStarted}
            // onDragEnd={onDragEnded}
          >
            <Image
              src={item.image}
              fill
              alt="test"
              className={`image ${
                size === 'normal' ? 'image-normal' : 'image-large'
              }`}
            />
          </div>
        ))}
      </div>
      {/* <button
        className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={() => handleNextSlide(false)}
        onMouseEnter={() => {
          stopAnimate();
        }}
        // onMouseLeave={() => {
        //   setPlay(true);
        //   handleNextSlide(true);
        // }}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>
      <button
        className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={() => handleNextSlide(true)}
        onMouseEnter={() => {
          stopAnimate();
        }}
        // onMouseLeave={() => {
        //   setPlay(true);
        //   handleNextSlide(true);
        // }}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button> */}
    </div>
  );
};
