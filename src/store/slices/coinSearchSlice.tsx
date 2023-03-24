import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchState: false,
};

export const coinSearchSlice = createSlice({
  name: 'coinSearch',
  initialState,
  reducers: {
    setCoinSearchState(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.searchState = action.payload;
    },

    // extraReducers: {
    //   [HYDRATE]: (state, action) => {
    //     return {
    //       ...state,
    //       ...action.payload.coinSearch,
    //     };
    //   },
    // },
  },
});

export const { setCoinSearchState } = coinSearchSlice.actions;
export const selectCoinSearchState = (state) => state.coinSearch.searchState;
export default coinSearchSlice.reducer;
