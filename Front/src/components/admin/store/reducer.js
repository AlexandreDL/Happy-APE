// == Initial State
const initialState = {
  loading: true,
  drawerOpen: false,
  contactFirstname: '',
  contactName: '',
  contactEmail: '',
  contactMessage: '',
};
// == Types
const GET_LEGAL_MENTIONS = 'GET_LEGAL_MENTIONS';



// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_HOMEPAGE':
      return {
        ...state,
      };
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
