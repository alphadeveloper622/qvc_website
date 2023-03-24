import { Section } from '@/layouts/Section';

type ISectionLookUpProps = {
  className?: string;
};
const SectionDirectorySearch = (props: ISectionLookUpProps) => {
  return (
    <Section
      padding={`${props.className} px-[27px] md:pt-[195px] pb-[116px] pt-[48px]`}
      bgColor="bg-[#F5F5F5]"
    >
      <div className={`h-[181px] w-full md:h-[425px]`}></div>
    </Section>
  );
};
export default SectionDirectorySearch;
