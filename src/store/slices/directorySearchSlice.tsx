import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchState: false,
};

export const directorySearchSlice = createSlice({
  name: 'directorySearch',
  initialState,
  reducers: {
    setDirectorySearchState(state, action) {
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

export const { setDirectorySearchState } = directorySearchSlice.actions;
export const selectDirectorySearchState = (state) =>
  state.directorySearch.searchState;
export default directorySearchSlice.reducer;
