import Footer from '@/templates/Footer';
import Header from '@/templates/Header';
import { HeroDirectorySearch } from '@/templates/Hero';

import SectionDirectorySearchResult from './SectionDirectorySearchResult';

const Index = () => {
  return (
    <>
      <Header />
      <HeroDirectorySearch className="z-[1]" />

      {/* <SectionDirectorySearch className="z-0" /> */}

      <SectionDirectorySearchResult className="z-0" />

      <Footer className={``} />
    </>
  );
};
export default Index;
