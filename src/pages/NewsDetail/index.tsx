import Footer from '@/templates/Footer';
import Header from '@/templates/Header/CommonHeader';
import { HeroNewsDetail } from '@/templates/Hero';

import SectionNewsDetail from './SectionNewsDetail';

const Index = () => {
  return (
    <>
      <Header />
      <HeroNewsDetail />
      <SectionNewsDetail />
      <Footer />
    </>
  );
};
export default Index;
