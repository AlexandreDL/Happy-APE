// == Initial State
const initialState = {
  homepageData: null,
};

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_HOMEPAGE':
      break;
    case 'GET_HOMEPAGE_SUCCESS':
      return {
        ...state,
        homepageData: action.payload.data,
      };
    case 'GET_HOMEPAGE_FAILURE':
      console.log('oooooooohhhh that\'s too baaaad!');
      break;
    default:
      return state;
  }
};

// == Action Creators
export function getHomepageData() {
  return {
    type: 'GET_HOMEPAGE',
    payload: {
      request: {
        url: '/',
      },
    },
  };
}


// == Selectors


// == Export
export default reducer;
