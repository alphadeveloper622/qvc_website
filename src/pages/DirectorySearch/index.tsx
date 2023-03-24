import { useState } from 'react';

import Footer from '@/templates/Footer';
import Header from '@/templates/Header';
import { HeroDirectorySearch } from '@/templates/Hero';

import SectionDirectorySearch from './SectionDirectorySearch';
import SectionDirectorySearchResult from './SectionDirectorySearchResult';

const Index = () => {
  const [bSearch, setbSearch] = useState(true);

  const search = () => {
    setbSearch(!bSearch);
  };
  return (
    <>
      <Header />
      <HeroDirectorySearch className="z-[1]" />
      {!bSearch ? (
        <SectionDirectorySearch className="z-0" />
      ) : (
        <SectionDirectorySearchResult className="z-0" />
      )}
      <Footer />
    </>
  );
};
export default Index;
