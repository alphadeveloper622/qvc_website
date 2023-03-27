import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';

import {
  navbarDeskClass,
  navbarMobileClassFunc,
  liDeskClass,
  liMobileClassFunc,
  mobileToggle,
  mobileNav,
  isMenu,
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 1184 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  return (
    <>
      <nav
        className={`${mobileNav} 
          ${menuOpen && size.width < 1184 ? `${isMenu}` : ''}`}
      >
        <ul className={`${navbarDeskClass}  ${navbarMobileClassFunc}`}>
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
      </nav>
      <div className={`${mobileToggle} ${props.className}`}>
        {!menuOpen ? (
          <BiMenuAltRight onClick={menuToggleHandler} />
        ) : (
          <AiOutlineClose className="text-white" onClick={menuToggleHandler} />
        )}
      </div>
    </>
  );
};

export default Index;
