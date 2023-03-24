import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { coinSearchSlice } from './slices/coinSearchSlice';

const makeStore = () =>
  configureStore({
    reducer: { [coinSearchSlice.name]: coinSearchSlice.reducer },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
