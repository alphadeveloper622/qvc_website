import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { coinSearchSlice } from './slices/coinSearchSlice';
import { directorySearchSlice } from './slices/directorySearchSlice';
import { menuActiveSlice } from './slices/menuActiveSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      [coinSearchSlice.name]: coinSearchSlice.reducer,
      [directorySearchSlice.name]: directorySearchSlice.reducer,
      [menuActiveSlice.name]: menuActiveSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
