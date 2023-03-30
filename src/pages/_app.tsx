/* eslint-disable import/order */
import 'regenerator-runtime/runtime';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { wrapper } from '@/store';

import '@/styles/globals.css';

import { poppins } from '@/styles/font/GoogleFont';
import { useEffect } from 'react';

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const revealHandle = () => {
    const reveals = document.querySelectorAll('.reveal');
    // eslint-disable-next-line no-debugger
    // debugger;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('reveal-active');
      } else {
        reveals[i].classList.remove('reveal-active');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', revealHandle);

    // unmount
    return () => {
      window.removeEventListener('scroll', revealHandle);
    };
  }, []);
  return (
    <>
      <Provider store={store}>
        <style jsx global>
          {`
            :root {
              --font-poppins: ${poppins.style.fontFamily};
            }
          `}
        </style>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
