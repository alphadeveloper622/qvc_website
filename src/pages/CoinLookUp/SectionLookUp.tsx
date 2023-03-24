import Image from 'next/image';

import { Section } from '@/layouts/Section';
import coinPic from '@@/images/coin-lookup/coin-case.jpg';

type ISectionLookUpProps = {
  className?: string;
};
const SectionLookUp = (props: ISectionLookUpProps) => {
  return (
    <Section
      padding={`${props.className} px-[27px] md:pt-[195px] pb-[116px] pt-[48px]`}
      bgColor="bg-[#F5F5F5]"
    >
      <Image src={coinPic} alt="StacksBowers" className="m-auto" />
    </Section>
  );
};
export default SectionLookUp;
