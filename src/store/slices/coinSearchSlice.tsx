import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  searchState: false,
};

export const coinSearchSlice = createSlice({
  name: 'coinSearch',
  initialState,
  reducers: {
    setCoinSearchState(state, action) {
      state.searchState = action.payload;
    },

    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.auth,
        };
      },
    },
  },
});

export const { setCoinSearchState } = coinSearchSlice.actions;
export const selectCoinSearchState = (state) => state.coinSearch.searchState;
export default coinSearchSlice.reducer;
