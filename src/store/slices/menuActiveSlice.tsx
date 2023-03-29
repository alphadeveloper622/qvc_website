import { createSlice } from '@reduxjs/toolkit';

import { EMenuState } from '@/types/global';

const initialState: DMenuState = {
  menuActiveState: EMenuState.HOME,
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
  state.menuActive.menuActiveState;
export default menuActiveSlice.reducer;
