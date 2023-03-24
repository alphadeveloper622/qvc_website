import Image from 'next/image';

import { Section } from '@/layouts/Section';
import liquidityPic from '@@/images/liquidity.png';
import verifiedPic from '@@/images/verified.png';

export default function SectionIntro() {
  return (
    <Section>
      <div className="hidden pb-[118px]  md:flex md:pt-[139px]">
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
      <div className="pt-[27px]  md:hidden">
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
            <Image
              src={verifiedPic}
              alt="StacksBowers"
              height={66.01}
              width={57.57}
              className="mx-auto mb-[14px]"
            />
            <p className="mb-[4px] text-[20px]">Verified</p>
            <p className="px-[98px] text-[12px] text-[#52565E]">
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
