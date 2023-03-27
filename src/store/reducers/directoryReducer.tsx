export default (state, action) => {
  switch (action.type) {
    case 'directorySearch':
      return {
        bDirectorySearch: action.payload,
      };
    default:
      return state;
  }
};
