export default (state, action) => {
  switch (action.type) {
    case 'menuActive':
      return {
        menuActive: action.payload,
      };
    default:
      return state;
  }
};
