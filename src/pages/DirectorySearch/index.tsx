import { connect, useSelector } from 'react-redux';

import { selectDirectorySearchState } from '@/store/slices/directorySearchSlice';
import Footer from '@/templates/Footer';
import Header from '@/templates/Header/CommonHeader';
import { HeroDirectorySearch } from '@/templates/Hero';

import SectionDirectorySearch from './SectionDirectorySearch';
import SectionDirectorySearchResult from './SectionDirectorySearchResult';

const Index = () => {
  const directorySearchState = useSelector(selectDirectorySearchState);
  return (
    <>
      <Header />
      <HeroDirectorySearch className="z-[1]" />
      {!directorySearchState ? (
        <SectionDirectorySearchResult className="z-0 " />
      ) : (
        <SectionDirectorySearch className="z-0" />
      )}

      <Footer className={``} />
    </>
  );
};
const mapStateToProps = (state) => ({
  ...state,
});
export default connect(mapStateToProps)(Index);
