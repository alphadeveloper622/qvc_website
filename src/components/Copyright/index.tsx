import { AppConfig } from '@/utils/AppConfig';

import { copyrightClass, lineClass } from './style';

type IFooterProps = {
  className?: string;
};
export default function Index(props: IFooterProps) {
  return (
    <div
      className={`${copyrightClass} ${props.className ? props.className : ''}`}
    >
      <p className={`${lineClass}`}>
        © {new Date().getFullYear()} {AppConfig.corporation}, All rights
        reserved.
      </p>
      <p className={`${lineClass}`}>
        Stacks Bowers Coin Certification is an independent numismatic coin
        authentication service and is not connected or affiliated with any other
        numismatic coin encapsulating and/or grading service.
      </p>
    </div>
  );
}
