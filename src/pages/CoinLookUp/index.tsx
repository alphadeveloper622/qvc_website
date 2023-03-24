import { connect, useSelector } from 'react-redux';

import { selectCoinSearchState } from '@/store/slices/coinSearchSlice';
import Footer from '@/templates/Footer';
import Header from '@/templates/Header';
import { HeroCoinLookUp } from '@/templates/Hero';

import SectionLookUp from './SectionLookUp';
import SectionLookUpResult from './SectionLookUpResult';

const Index = () => {
  const coinSearchState = useSelector(selectCoinSearchState);
  return (
    <>
      <Header />
      <HeroCoinLookUp className="z-0" />
      {!coinSearchState ? (
        <SectionLookUp className="-z-10" />
      ) : (
        <SectionLookUpResult className="-z-10" />
      )}
      <Footer className={``} />
    </>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});
export default connect(mapStateToProps)(Index);
