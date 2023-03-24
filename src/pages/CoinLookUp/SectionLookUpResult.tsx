import { Section } from '@/layouts/Section';

type ISectionLookUpResultProps = {
  className?: string;
  serialNumber?: string;
  gradingService?: string;
  description?: string;
  status?: string;
};
const SectionLookUpResult = (props: ISectionLookUpResultProps) => {
  const {
    serialNumber = '147426003',
    gradingService = 'NGC',
    description = '1880-o Dollars Morgan MS65',
    status = 'CAC',
  } = props;
  return (
    <Section
      padding={`${props.className} px-[27px] md:pt-[195px] pb-[116px] pt-[48px]`}
      bgColor="bg-[#F5F5F5]"
    >
      <div className="m-auto w-fit">
        <h3 className={`poppins400 mb-[15px] w-fit text-[26px] md:text-[28px]`}>
          Coin Verification Results
        </h3>
        <table className="m-auto table-auto text-[#2D3546] ">
          <tbody>
            <tr>
              <td className={`poppins700 text-[13px]`}>Serial Number:</td>
              <td className={`poppins400 pl-[12px] text-[13px]`}>
                {serialNumber}
              </td>
            </tr>
            <tr>
              <td className={`poppins700 text-[13px]`}>Grading Service:</td>
              <td className={`poppins400 pl-[12px] text-[13px]`}>
                {gradingService}
              </td>
            </tr>
            <tr>
              <td className={`poppins700 text-[13px]`}>Description:</td>
              <td className={`poppins400 pl-[12px] text-[13px]`}>
                {description}
              </td>
            </tr>
            <tr>
              <td className={`poppins700 text-[13px]`}>Status:</td>
              <td className={`poppins400 pl-[12px] text-[13px]`}>{status}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
};
export default SectionLookUpResult;
