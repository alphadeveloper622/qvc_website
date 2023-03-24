import Link from 'next/link';

import {
  navbarDeskClass,
  navbarMobileClassFunc,
  liDeskClass,
  liMobileClassFunc,
} from './style';

type IMenuProps = {
  className?: string;
  screen?: string;
};
const Index = (props: IMenuProps) => {
  // const ulClass = className(navbarDeskClass, [
  //   navbarMobileClassFunc(props.screen ? props.screen : 'md'),
  // ]);
  // const liClass = className(liDeskClass, [
  //   liMobileClassFunc(props.screen ? props.screen : 'md'),
  // ]);
  return (
    <>
      <ul
        className={`${navbarDeskClass}  ${navbarMobileClassFunc} ${
          props.className ? props.className : ''
        }`}
      >
        <li className={`${liDeskClass} ${liMobileClassFunc}`}>
          <Link href="/News">NEWS</Link>
        </li>
        <li className={`${liDeskClass} ${liMobileClassFunc}`}>
          <Link href="/Portal">PORTAL</Link>
        </li>
        <li className={`${liDeskClass} ${liMobileClassFunc}`}>
          <Link href="/DirectorySearch">DIRECTORY</Link>
        </li>
        <li className={`${liDeskClass} ${liMobileClassFunc}`}>
          <Link href="/CoinLookUp">COIN LOOK-UP</Link>
        </li>
      </ul>
    </>
  );
};

export default Index;
