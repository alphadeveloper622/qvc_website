export default (state, action) => {
  switch (action.type) {
    case 'coinSearch':
      return {
        bCoinSearch: action.payload,
      };
    default:
      return state;
  }
};
