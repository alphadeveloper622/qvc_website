import Image from 'next/image';

import { Section } from '@/layouts/Section';
import liquidityPic from '@@/images/liquidity.png';
import verifiedPic from '@@/images/verified.png';

export function VerifiedSVG({ className }) {
  return (
    <svg
      className={className}
      width="58"
      height="66"
      viewBox="0 0 58 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3_219)">
        <path
          d="M28.7898 66C28.4698 66 28.1498 65.95 27.8398 65.86C-0.320156 57.34 -0.480156 21.93 0.139844 11.28C0.239844 9.48001 1.72984 8.07001 3.51984 8.07001C3.56984 8.07001 3.61984 8.07001 3.66984 8.07001C4.25984 8.10001 4.84984 8.12001 5.43984 8.12001C16.1698 8.12001 23.8998 2.94001 26.7298 0.710005C27.3198 0.240005 28.0298 -0.00999451 28.7798 -0.00999451C29.5298 -0.00999451 30.2398 0.240005 30.8298 0.700005C33.6598 2.93001 41.3898 8.11001 52.0998 8.11001C52.6998 8.11001 53.2998 8.09001 53.8998 8.06001C55.7998 8.06001 57.3098 9.44001 57.4198 11.26C58.0398 21.91 57.8898 57.33 29.7198 65.84C29.4098 65.93 29.0898 65.98 28.7698 65.98L28.7898 66ZM3.48984 10.9C3.31984 10.9 3.14984 10.96 3.01984 11.08C2.87984 11.2 2.79984 11.38 2.79984 11.56C2.24984 24.55 3.66984 55.59 28.6598 63.15C28.7298 63.17 28.7898 63.18 28.8598 63.18C28.9298 63.18 28.9998 63.17 29.0598 63.15C55.0598 55.25 55.2098 21.66 54.6298 11.56C54.6098 11.19 54.2998 10.91 53.9398 10.91H53.8998C53.2998 10.94 52.6898 10.96 52.0898 10.96C40.6098 10.96 32.2698 5.42001 29.2098 3.04001C29.0898 2.94001 28.9398 2.89001 28.7898 2.89001C28.6398 2.89001 28.4898 2.94001 28.3698 3.04001C25.3198 5.42001 16.9598 10.95 5.40984 10.95C4.78984 10.95 4.15984 10.93 3.52984 10.9H3.48984Z"
          fill="#1E1E1E"
        />
        <path
          d="M26.6899 38.63C26.3099 38.63 25.9599 38.48 25.6899 38.22L21.4799 34.01C20.9299 33.46 20.9299 32.56 21.4799 32.01C21.7499 31.74 22.0999 31.6 22.4799 31.6C22.8599 31.6 23.2099 31.75 23.4799 32.01L26.1999 34.73C26.3299 34.86 26.5099 34.93 26.6899 34.93C26.8699 34.93 27.0399 34.86 27.1799 34.73L34.1099 27.8C34.3799 27.53 34.7299 27.39 35.1099 27.39C35.4899 27.39 35.8399 27.54 36.1099 27.8C36.3799 28.07 36.5199 28.42 36.5199 28.8C36.5199 29.18 36.3699 29.53 36.1099 29.8L27.6899 38.22C27.4199 38.49 27.0699 38.63 26.6899 38.63Z"
          fill="#1E1E1E"
        />
        <path
          d="M28.7999 49.15C19.8899 49.15 12.6499 41.9 12.6499 33C12.6499 24.1 19.8999 16.85 28.7999 16.85C37.6999 16.85 44.9499 24.1 44.9499 33C44.9499 41.9 37.6999 49.15 28.7999 49.15ZM28.7999 19.67C21.4499 19.67 15.4799 25.65 15.4799 32.99C15.4799 40.33 21.4599 46.31 28.7999 46.31C36.1399 46.31 42.1199 40.33 42.1199 32.99C42.1199 25.65 36.1399 19.67 28.7999 19.67Z"
          fill="#1E1E1E"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_219">
          <rect width="57.59" height="66" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function LiquiditySVG({ className }) {
  return (
    <svg
      className={className}
      width="66"
      height="60"
      viewBox="0 0 66 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3_211)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.9153 16.9213C20.2004 13.6473 24.7338 11.61 29.7501 11.61C39.7714 11.61 47.9001 19.7387 47.9001 29.76C47.9001 39.7813 39.7714 47.91 29.7501 47.91C19.7288 47.91 11.6001 39.7813 11.6001 29.76C11.6001 29.2535 11.6333 28.7661 11.6624 28.3398L11.6639 28.3178C11.7259 27.4086 12.5132 26.7218 13.4223 26.7838C14.3315 26.8458 15.0183 27.6331 14.9563 28.5422C14.9257 28.9908 14.9001 29.3753 14.9001 29.76C14.9001 37.9587 21.5514 44.61 29.7501 44.61C37.9488 44.61 44.6001 37.9587 44.6001 29.76C44.6001 21.5613 37.9488 14.91 29.7501 14.91C25.6464 14.91 21.9398 16.5727 19.2449 19.2587C18.5994 19.902 17.5547 19.9002 16.9114 19.2548C16.2681 18.6093 16.2699 17.5646 16.9153 16.9213Z"
          fill="#313131"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50.7159 23.8976C51.4076 23.3043 52.4493 23.3841 53.0426 24.0757L57.7602 29.5757L62.4778 24.0757C63.0711 23.3841 64.1127 23.3043 64.8044 23.8976C65.4961 24.4909 65.5758 25.5326 64.9826 26.2242L59.0126 33.1842C58.6991 33.5497 58.2416 33.76 57.7602 33.76C57.2787 33.76 56.8212 33.5497 56.5078 33.1842L50.5378 26.2242C49.9445 25.5326 50.0242 24.4909 50.7159 23.8976Z"
          fill="#313131"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 29.76C0 13.3183 13.3291 0 29.76 0C46.1917 0 59.51 13.3191 59.51 29.76C59.51 30.5772 59.467 31.3734 59.4047 32.1516C59.3321 33.0599 58.5368 33.7374 57.6284 33.6647C56.7201 33.5921 56.0426 32.7968 56.1153 31.8884C56.173 31.1666 56.21 30.4628 56.21 29.76C56.21 15.1409 44.3683 3.3 29.76 3.3C15.1509 3.3 3.3 15.1417 3.3 29.76C3.3 44.3787 15.1413 56.22 29.76 56.22C37.0647 56.22 43.6799 53.2566 48.4633 48.4733C49.1076 47.8289 50.1524 47.8289 50.7967 48.4733C51.4411 49.1176 51.4411 50.1624 50.7967 50.8067C45.4201 56.1834 37.9753 59.52 29.76 59.52C13.3187 59.52 0 46.2013 0 29.76Z"
          fill="#313131"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.812 26.8503C13.2882 26.7749 13.7734 26.9116 14.1403 27.2243L21.1203 33.1743C21.8138 33.7655 21.8967 34.8069 21.3055 35.5004C20.7144 36.1939 19.673 36.2769 18.9795 35.6857L13.4663 30.9861L9.67559 37.154C9.19844 37.9303 8.18227 38.1729 7.4059 37.6957C6.62954 37.2186 6.38698 36.2024 6.86413 35.426L11.6641 27.616C11.9165 27.2054 12.3359 26.9256 12.812 26.8503Z"
          fill="#313131"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_211">
          <rect width="65.38" height="59.51" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default function SectionIntro() {
  return (
    <Section className="z-0">
      <div className="hidden pb-[118px]  header:flex header:pt-[139px]">
        <div className="poppins400 w-[59.79%] border-r border-solid border-[#979797] pr-[70px]">
          <div className="mb-[30px]">
            <p className="mb-[18px] text-[40px]">
              Our Rigorous Market Standards
            </p>
            <p className="text-[20px] text-[#52565E]">
              CMQ was founded by Hall of Fame numismatists David Hall and Greg
              Roberts. A CMQ sticker indicates that a coin meets our market
              standards and can be confidently traded sight unseen. No
              marginally graded or negative eye appeal coins will ever exhibit a
              CMQ sticker.
            </p>
          </div>
          <div>
            <p className="mb-[10px] text-[28px]">
              A CMQ Sticker Elevates Your Coin From the Rest
            </p>
            <p className="mb-[20px] text-[20px] text-[#52565E]">
              Within every grade is a spread of quality from the top to the
              bottom of the technical grading criteria.
            </p>
            <p className="text-[20px] text-[#52565E]">
              Furthermore, each of the major grading companies have their own
              definition of the technical grading criteria within each numerical
              grade. This is why some coins bring more money than others. We
              verify coins graded by the three major grading services, awarding
              our stickers to only the coins that meet our rigorous standards
              for technical grade and eye appeal.
            </p>
          </div>
        </div>
        <div className="poppins400 flex w-[40.21%] pl-[5px]">
          <div className="text-center">
            <Image
              src={verifiedPic}
              alt="StacksBowers"
              height={66.01}
              width={57.57}
              className="mx-auto mb-[22px]"
            />
            <p className="mb-[9px] text-[24px]">Verified</p>
            <p className="text-[14px] text-[#52565E]">
              Your coin has been verified as meeting the standard for strict
              quality within its grade.
            </p>
          </div>
          <div className="text-center">
            <Image
              src={liquidityPic}
              alt="StacksBowers"
              height={70}
              width={70}
              className="mx-auto mb-[22px]"
            />
            <p className="mb-[9px] text-[24px]">Added Liquidity</p>
            <p className="text-[14px] text-[#52565E]">
              Stacks Bowers stands behind our verification, facilitating active
              trading.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-[27px] md:pt-[139px] header:hidden">
        <div className="poppins400 w-[100%] px-[20px]">
          <div className="mb-[25px]">
            <p className="mb-[11px] text-[26px]">Coin Certification Services</p>
            <p className="text-[13px] text-[#52565E]">
              Lorem ipsum dolor sit amet consectetur. Pharetra et feugiat
              maecenas lectus iaculis congue lobortis in condimentum. Bibendum
              lobortis dignissim eu iaculis arcu lectus venenatis.
            </p>
          </div>
          <div>
            <p className="mb-[11px] text-[18px]">
              What does the Stacks Bowers sticker mean?
            </p>
            <p className="border-b border-solid border-[#979797] pb-[28px] text-[13px] text-[#52565E] ">
              Tellus adipiscing morbi placerat laoreet morbi interdum gravida
              tristique. Aliquam ac proin volutpat ornare. Sodales quis odio
              erat non arcu ultrices in et. Vel leo arcu amet eu suspendisse.
            </p>
          </div>
        </div>
        <div className="poppins400 w-[100%]">
          <div className="mt-[33px] mb-[33px] text-center">
            <VerifiedSVG className="mx-auto mb-[14px]" />
            <p className="mb-[4px] text-[20px]">Verified</p>
            <p className="px-[98px] text-[12px] text-[#52565E]">
              Your coin has been verified as meeting the standard for strict
              quality within its grade.
            </p>
          </div>
          <div className="text-center">
            <LiquiditySVG className="mx-auto mb-[22px]" />
            <p className="mb-[4px] text-[20px]">Added Liquidity</p>
            <p className="px-[98px] pb-[86px] text-[12px]  text-[#52565E]">
              Stacks Bowers stands behind our verification, facilitating active
              trading.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
