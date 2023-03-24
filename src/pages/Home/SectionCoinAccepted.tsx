import { Section } from '@/layouts/Section';

type IParagraphProps = {
  name: string;
  value: string;
};
const Paragraph = (props: IParagraphProps) => {
  return (
    <div className="border-b border-solid border-white border-opacity-30 py-[10px]">
      <span className="poppins600 inline-block w-[50%]">{props.name}</span>
      <span className="inline-block w-[50%]">{props.value}</span>
    </div>
  );
};

export default function SectionCoinAccepted() {
  return (
    <Section
      bgColor="bg-[#11253C]"
      mark={true}
      title="Coins Accepted"
      padding="md:pt-[65px] pt-[38px] md:pb-[42px]  pb-[10px] px-[20px] md:px-[100px]"
      className="text-white"
    >
      <div className="md:flex">
        <div className="w-full md:w-[50%] md:pr-[100px]">
          {Array.apply(0, Array(10)).map(function (x, i) {
            return (
              <Paragraph
                key={i}
                name={`All Half Cents${x}`}
                value="1793-1857"
              />
            );
          })}
        </div>
        <div className="w-full md:w-[50%]">
          {Array.apply(0, Array(10)).map(function (x, i) {
            return (
              <Paragraph
                key={i}
                name={`All Half Cents${x}`}
                value="1793-1857"
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
}
