import Footer from '@/templates/Footer';
import Header from '@/templates/Header/CommonHeader';
import { HeroCarousel } from '@/templates/Hero';

import SectionCoinAccepted from './SectionCoinAccepted';
import SectionCoupon from './SectionCoupon';
import SectionIntro from './SectionIntro';
import SectionNewsEvents from './SectionNewsEvents';

export default function index() {
  return (
    <>
      <Header />
      {/* <main className="">
        <Hero />
        <SectionIntro />
      </main> */}
      <HeroCarousel />
      <SectionIntro />
      <SectionCoinAccepted />
      <SectionCoupon />
      <SectionNewsEvents />
      <Footer />
    </>
  );
}
