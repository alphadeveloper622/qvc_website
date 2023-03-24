import { RedFillButton } from '@/components/Button';
import { CouponCard } from '@/components/Card';
import { Section } from '@/layouts/Section';
import couponDeskPic from '@@/images/home/coupon_back_d.jpg';
import couponMobilePic from '@@/images/home/coupon_back_m.jpg';

export default function SectionCoupon() {
  return (
    <Section
      title="Submission Pricing"
      bgDesktopImage={couponDeskPic}
      bgMobileImage={couponMobilePic}
      padding="px-0"
      className="h-[calc(798px+100px)] pt-[40px] text-white md:h-[625px] md:pt-[65px]"
    >
      <div className="mt-[32px] text-center md:mt-[45px] md:flex md:justify-evenly md:px-[100px]">
        <CouponCard className="mx-auto mt-[15px] md:m-[5px] " />
        <CouponCard className="mx-auto mt-[15px] md:m-[5px] " />
        <CouponCard className="mx-auto mt-[15px] md:m-[5px] " />
      </div>
      <RedFillButton
        title="Do your coins qualify?"
        subtitle="Request an account."
        className="absolute bottom-0  m-auto translate-y-0 md:translate-y-[50%]"
      />
    </Section>
  );
}
