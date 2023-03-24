import Image from 'next/image';
import Link from 'next/link';

import logoPic from '@@/images/logo.png';

type ILogoProps = {
  className?: string;
};
export default function Index(props: ILogoProps) {
  return (
    <div className="relative ">
      <Link href="/">
        <Image
          src={logoPic}
          alt="logo"
          className={`${props.className ? props.className : ''} h-auto`}
        />
      </Link>
    </div>
  );
}
