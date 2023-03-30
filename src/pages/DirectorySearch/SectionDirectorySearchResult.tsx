import { useMemo } from 'react';

import {
  DicSearchDataTable,
  MDicSearchDataTable,
} from '@/components/DataTable';
import { getColumns } from '@/components/DataTable/DicSearchDataTable/columns';
import { getData } from '@/components/DataTable/DicSearchDataTable/sampleData';
import { Section } from '@/layouts/Section';

type ISectionLookUpResultProps = {
  className?: string;
};
const SectionDirectorySearchResult = (props: ISectionLookUpResultProps) => {
  const data = useMemo(() => getData(), []);
  const columns = useMemo(() => getColumns(), []);
  return (
    <Section
      padding={`${props.className} px-[0px] md:pt-[195px] pb-[116px] pt-[48px] md:px-[7%]`}
      bgColor="bg-[#F5F5F5]"
    >
      <div className="m-auto w-full">
        <div className={`hidden md:block`}>
          <DicSearchDataTable columns={columns} data={data} className={``} />
        </div>
        <div className={`block md:hidden`}>
          <MDicSearchDataTable columns={columns} data={data} className={``} />
        </div>
      </div>
    </Section>
  );
};
export default SectionDirectorySearchResult;
