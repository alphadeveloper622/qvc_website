/* eslint-disable import/order */
import 'regenerator-runtime/runtime';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { wrapper } from '@/store';

import '@/styles/globals.css';

import { poppins } from '@/styles/font/GoogleFont';

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
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
