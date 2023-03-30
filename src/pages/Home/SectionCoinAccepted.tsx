import { Section } from '@/layouts/Section';

type IParagraphProps = {
  name?: string;
  value?: string;
  className?: string;
  flag?: boolean;
};
const Paragraph = (props: IParagraphProps) => {
  return (
    <div
      className={`border-solid border-white border-opacity-30 py-[10px] ${
        props.className ? props.className : ''
      }`}
    >
      <span
        className={`${props.flag ? 'poppins600' : ''} inline-block w-[50%]`}
      >
        {props.name}
      </span>
      <span className="inline-block w-[50%]">{props.value}</span>
    </div>
  );
};

// export default function SectionCoinAccepted() {
//   return (
//     <Section
//       bgColor="bg-[#11253C]"
//       mark={true}
//       title="Coins Accepted"
//       padding="md:pt-[65px] pt-[38px] md:pb-[42px]  pb-[10px] px-[20px] md:px-[100px]"
//       className="text-white"
//     >
//       <div className="md:flex">
//         <div className="w-full md:w-[50%] md:pr-[100px]">
//           {Array.apply(0, Array(10)).map(function (x, i) {
//             return (
//               <Paragraph
//                 key={i}
//                 name={`All Half Cents${x}`}
//                 value="1793-1857"
//               />
//             );
//           })}
//         </div>
//         <div className="w-full md:w-[50%]">
//           {Array.apply(0, Array(10)).map(function (x, i) {
//             return (
//               <Paragraph
//                 key={i}
//                 name={`All Half Cents${x}`}
//                 value="1793-1857"
//               />
//             );
//           })}
//         </div>
//       </div>
//     </Section>
//   );
// }

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
          <Paragraph
            name={`All Half Cents`}
            value="1793-1857"
            className="reveal fade-bottom border-b"
            flag={true}
          />
          <Paragraph
            name={`All Large Cents`}
            value="1793-1857"
            className="reveal fade-bottom border-b"
            flag={true}
          />
          <Paragraph
            name={`Small Cents`}
            className="reveal  fade-bottom border-b-0"
            flag={true}
          />
          <Paragraph
            name={`Flying Eagle`}
            value={`1856-1858`}
            className="reveal  fade-bottom border-b-0"
          />
          <Paragraph
            name={`Indian Head`}
            value={`1859-1909`}
            className="reveal  fade-bottom border-b-0"
          />
          <Paragraph
            name={`Lincoln`}
            value={`1909-1942 (PR)`}
            className="reveal  fade-bottom border-b-0"
          />
          <Paragraph
            value={`1909-1958 (MS)`}
            className="reveal  fade-bottom border-b"
          />
          <p className="reveal fade-bottom border-solid border-white  border-opacity-30 py-[10px]">
            <span className="block">
              Will accept the following Doubled Dies:{' '}
            </span>
            <span>1955, 1969-S, 1970-S, 1971-S, 1972, 1983, 1984 and 1995</span>
          </p>
          <p className="reveal fade-bottom border-b border-solid border-white  border-opacity-30 py-[10px]">
            <span className="block">
              We do not recognize 1936 Type 3 or 1972 Type 2{' '}
            </span>
            <span>doubled die cents</span>
          </p>
          <Paragraph
            name={`All Two Cents`}
            value={`1864-1873`}
            className="reveal  fade-bottom border-b"
            flag={true}
          />
          <Paragraph
            name={`Three Cents`}
            className="reveal fade-bottom border-b-0"
            flag={true}
          />
          <Paragraph
            name={`Silver`}
            value={`1851-1873`}
            className="reveal fade-bottom border-b-0"
          />
          <Paragraph
            name={`Nickel`}
            value={`1865-1889`}
            className="reveal fade-bottom border-b"
          />
          <Paragraph
            name={`Half Dimes`}
            value={`1792-1873`}
            className="reveal fade-bottom border-b"
            flag={true}
          />
          <Paragraph
            name={`Five Cents (Nickels)`}
            className="reveal fade-bottom border-b-0"
            flag={true}
          />
          <Paragraph
            name={`Shield`}
            value={'1866-1883'}
            className="reveal fade-bottom border-b-0"
          />
          <Paragraph
            name={`Liberty Head`}
            value={'1883-1913'}
            className="reveal fade-bottom border-b-0"
          />
          <Paragraph
            name={`Buffalo`}
            value={'1913-1938'}
            className="reveal fade-bottom border-b-0"
          />
          <Paragraph
            name={`Jefferson`}
            value={'1938-1942 (PR)'}
            className="reveal fade-bottom border-b-0"
          />
          <Paragraph
            value={'1939 Dbl Monticello & '}
            className="reveal fade-bottom border-b-0"
          />
          <Paragraph
            value={'Five Cents'}
            className="reveal fade-bottom border-b-0"
          />
          <Paragraph
            value={'1943/2-P'}
            className="reveal fade-bottom border-b-0"
          />
          <Paragraph
            value={'1949-D/S'}
            className="reveal fade-bottom border-b-0"
          />
        </div>
        <div className="w-full md:w-[50%]">
          <Paragraph
            name={`Ten Cents (Dimes)`}
            value={'1793-1964'}
            className="reveal fade-bottom border-b"
            flag={true}
          />
          <Paragraph
            name={`All Twenty Cents`}
            value={'1875-1878'}
            className="reveal fade-bottom border-b"
            flag={true}
          />
          <Paragraph
            name={`Quarter Dollars`}
            value={'1796-1930'}
            className="reveal fade-bottom border-b-0"
            flag={true}
          />
          <Paragraph
            name={`Washington`}
            value={'1932–1964 (MS)'}
            className="reveal fade-bottom border-b-0"
          />
          <Paragraph
            value={'1936–1964 (PR) '}
            className="reveal fade-bottom border-b"
          />
          <Paragraph
            name={`Half Dollars`}
            value={'1794-1947'}
            className="reveal fade-bottom border-b-0"
            flag={true}
          />
          <Paragraph
            name={`Franklin Halves`}
            value={'1948–1963'}
            className="reveal fade-bottom border-b-0"
          />
          <Paragraph
            value={'All Mint State and Proof '}
            className="reveal fade-bottom border-b-0"
          />
          <Paragraph
            value={'coins accepted'}
            className="reveal fade-bottom border-b"
          />
          <Paragraph
            name={`All Silver Dollars`}
            value={'1794-1935'}
            className="reveal fade-bottom border-b-0"
            flag={true}
          />
          <Paragraph
            name={`Eisenhower Dollars`}
            value={'1971–1978 (MS)'}
            className="reveal fade-bottom border-b-0"
            flag={true}
          />
          <Paragraph
            name={`One Dollar (Gold)`}
            value={'1849–1889'}
            className="reveal fade-bottom border-b-0"
            flag={true}
          />
          <Paragraph
            name={`$2.50 Gold`}
            value={'1796–1929'}
            className="reveal fade-bottom border-b-0"
            flag={true}
          />
          <Paragraph
            name={`$3 Gold`}
            value={'1854–1889'}
            className="reveal fade-bottom border-b-0"
            flag={true}
          />
          <Paragraph
            name={`$4 Gold`}
            value={'1879-1880'}
            className="reveal fade-bottom border-b-0"
            flag={true}
          />
          <Paragraph
            name={`$5 Gold`}
            value={'1795–1929'}
            className="reveal fade-bottom border-b-0"
            flag={true}
          />
          <Paragraph
            name={`$10 Gold`}
            value={'1795–1933'}
            className="reveal fade-bottom border-b-0"
            flag={true}
          />
          <Paragraph
            name={`$20 Gold`}
            value={'1850–1933'}
            className="reveal fade-bottom border-b-0"
            flag={true}
          />
          <Paragraph
            name={`Classic Silver Commemoratives`}
            value={'1893–1954'}
            className="reveal fade-bottom border-b-0"
            flag={true}
          />
          <Paragraph
            name={`Classic Gold Commemoratives`}
            value={'1903–1926'}
            className="reveal fade-bottom border-b-0"
            flag={true}
          />
          <Paragraph
            name={`All Territorial Gold`}
            value={'(Except Calif Fractional)'}
            className="reveal fade-bottom border-b-0"
            flag={true}
          />
          <Paragraph
            name={`All Patterns`}
            className="reveal fade-bottom border-b-0"
            flag={true}
          />
          <Paragraph
            name={`All Hawaiian`}
            className="reveal fade-bottom border-b-0"
            flag={true}
          />
          <Paragraph
            name={`All Confederate`}
            className="reveal fade-bottom border-b-0"
            flag={true}
          />
        </div>
      </div>
    </Section>
  );
}
