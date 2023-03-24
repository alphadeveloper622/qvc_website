import { useMemo } from 'react';

import DataTable from '@/components/DataTable';
import { Section } from '@/layouts/Section';
import { getColumns } from '@/utils/columns';
import { getData } from '@/utils/sampleData';

type ISectionLookUpResultProps = {
  className?: string;
};
const SectionDirectorySearchResult = (props: ISectionLookUpResultProps) => {
  const data = useMemo(() => getData(), []);
  const columns = useMemo(() => getColumns(), []);
  return (
    <Section
      padding={`${props.className} px-[27px] md:pt-[195px] pb-[116px] pt-[48px] md:px-[7%]`}
      bgColor="bg-[#F5F5F5]"
    >
      <div className="m-auto w-full">
        <DataTable columns={columns} data={data} />
      </div>
    </Section>
  );
};
export default SectionDirectorySearchResult;
