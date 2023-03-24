import { Section } from '@/layouts/Section';

import MainBoard from './MainBoard';
import SideBar from './SideBar';

const SectionPortal = () => {
  return (
    <Section padding="px-0">
      <SideBar className="w-2/12 bg-[#11253C]" />
      <MainBoard className="w-10/12" title="Open Submissions" />
    </Section>
  );
};
export default SectionPortal;
