import { RedFillRoundButton, WhiteFillRoundButton } from '@/components/Button';
import Logo from '@/components/Logo';
import Menu from '@/components/Menu';
import { Section } from '@/layouts/Section';
import { BorderDirections } from '@/utils/global';

type IHeaderProps = {
  borderColor?: string;
  borderDirection?: BorderDirections;
};
export default function Index(props: IHeaderProps) {
  return (
    <Section
      padding="md:py-6 md:px-[45px] md:h-[125px] px-[20px] h-[71px] py-[15px]"
      {...props}
    >
      <div className="flex flex-wrap items-center justify-between">
        <Logo className="w-[136px] md:w-[247px]" />
        <Menu className="hidden 2.5xl:flex" />
        <div className="">
          <WhiteFillRoundButton
            title="request account"
            className="mr-[22px] hidden md:inline-block"
          />
          <RedFillRoundButton title="portal login" />
        </div>
      </div>
    </Section>
  );
}
