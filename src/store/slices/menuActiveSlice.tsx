import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuActiveState: false,
};

export const menuActiveSlice = createSlice({
  name: 'menuActive',
  initialState,
  reducers: {
    setMenuActiveState(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.menuActiveState = action.payload;
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

export const { setMenuActiveState } = menuActiveSlice.actions;
export const selectMenuActiveState = (state) =>
  state.menuActiveSlice.menuActiveState;
export default menuActiveSlice.reducer;
