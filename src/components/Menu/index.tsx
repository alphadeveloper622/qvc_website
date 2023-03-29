// import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectMenuActiveState,
  setMenuActiveState,
} from '@/store/slices/menuActiveSlice';
import { EMenuState } from '@/types/global';

import {
  navbarDeskClass,
  navbarMobileClassFunc,
  liDeskClass,
  liMobileClassFunc,
  liActiveClassFunc,
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
  const menuActive = useSelector(selectMenuActiveState);
  const dispatch = useDispatch();
  const onClickHandle = (val: EMenuState) => {
    dispatch(setMenuActiveState(val));
  };
  return (
    <>
      <ul
        className={`${navbarDeskClass}  ${navbarMobileClassFunc} ${
          props.className ? props.className : ''
        }`}
      >
        <li
          className={`${liDeskClass} ${liMobileClassFunc} ${
            menuActive === EMenuState.HOME ? liActiveClassFunc : ''
          }`}
          onClick={() => {
            onClickHandle(EMenuState.HOME);
          }}
        >
          <Link href="/News">NEWS</Link>
        </li>
        <li
          className={`${liDeskClass} ${liMobileClassFunc} ${
            menuActive === EMenuState.PORTAL ? liActiveClassFunc : ''
          }`}
          onClick={() => {
            onClickHandle(EMenuState.PORTAL);
          }}
        >
          <Link href="/Portal">PORTAL</Link>
        </li>
        <li
          className={`${liDeskClass} ${liMobileClassFunc} ${
            menuActive === EMenuState.DIRECTORYSEARCH ? liActiveClassFunc : ''
          }`}
          onClick={() => {
            onClickHandle(EMenuState.DIRECTORYSEARCH);
          }}
        >
          <Link href="/DirectorySearch">DIRECTORY</Link>
        </li>
        <li
          className={`${liDeskClass} ${liMobileClassFunc} ${
            menuActive === EMenuState.COINLOOKUP ? liActiveClassFunc : ''
          }`}
          onClick={() => {
            onClickHandle(EMenuState.COINLOOKUP);
          }}
        >
          <Link href="/CoinLookUp">COIN LOOK-UP</Link>
        </li>
      </ul>
    </>
  );
};

export default Index;
