import Copyright from '@/components/Copyright';
import Logo from '@/components/Logo';
import Menu from '@/components/Menu';
import { Section } from '@/layouts/Section';
import { BorderDirections } from '@/utils/global';

export default function Index({ className }) {
  return (
    <Section
      padding="py-[33px] md:px-[min(7vw,100px)] px-[5vw] pt-[18px] md:pt-[32px] "
      borderColor="border-[#DADEE3]"
      borderDirection={BorderDirections.Top}
      className={`${className}`}
    >
      <div className="lg:relative">
        <Logo className="w-[193px]" />
        <Menu
          className=" static mt-[25px] lg:absolute lg:left-[50%] lg:top-[50%] lg:mt-0 lg:translate-x-[-50%] lg:translate-y-[-50%]"
          screen="lg"
        />
      </div>
      <Copyright className="mt-[30px] md:mt-[39px]" />
    </Section>
  );
}
