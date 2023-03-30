import Footer from '@/templates/Footer';
import Header from '@/templates/Header';
import { HeroNews } from '@/templates/Hero';
import { BorderDirections } from '@/utils/global';

import SectionStory from './SectionStory';
import SectionStoryList from './SectionStoryList';

const Index = () => {
  return (
    <>
      <Header
        borderColor="border-[#858585]"
        borderDirection={BorderDirections.Bottom}
      />
      <HeroNews />
      <SectionStory className="reveal fade-left hidden md:mt-[35px] lg:block" />
      <SectionStory
        className="reveal fade-right hidden md:mt-[35px] lg:block"
        reverse={true}
      />
      <SectionStoryList className="mt-[35px]" />
      <Footer />
    </>
  );
};
export default Index;
