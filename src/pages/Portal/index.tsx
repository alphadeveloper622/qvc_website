import Footer from '@/templates/Footer';
import { PortalHeader } from '@/templates/Header';

import MainBoard from './MainBoard';
import SideBar from './SideBar';

const Index = () => {
  return (
    <>
      <div className="fixed z-30 w-full bg-white">
        <PortalHeader />
      </div>
      <div className="relative m-auto block max-w-full overflow-hidden bg-gray-50 pt-[90px]  dark:bg-gray-900 md:pt-[125px] lg:flex">
        <SideBar className={`lg:pt-[125px]`} />
        <MainBoard className={``} title="Open Submissions" />
      </div>
      <Footer className={`not-sr-only lg:sr-only`} />
    </>
  );
};
export default Index;
