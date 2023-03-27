import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { coinSearchSlice } from './slices/coinSearchSlice';
import { directorySearchSlice } from './slices/directorySearchSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      [coinSearchSlice.name]: coinSearchSlice.reducer,
      [directorySearchSlice.name]: directorySearchSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
