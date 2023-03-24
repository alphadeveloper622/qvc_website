import Link from 'next/link';

import { ButtonTypes } from '@/utils/global';

import { buttonClass } from './style';

type IButtonProps = {
  title: string;
  className?: string;
  bType?: ButtonTypes;
  link?: string;
};
export default function Index(props: IButtonProps) {
  const { title = 'button', bType = ButtonTypes.Button, link = '/' } = props;
  return (
    <button
      type={bType}
      className={`${buttonClass} ${props.className ? props.className : ''} `}
    >
      {bType === ButtonTypes.Button ? <Link href={link}>{title}</Link> : title}
    </button>
  );
}
