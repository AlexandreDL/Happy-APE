// == Initial State
const initialState = {
  homepageData: {},
  legalMentionsData : [],
  loading: true,
  events: {},
};
// == Types
const GET_LEGAL_MENTIONS = 'GET_LEGAL_MENTIONS';
const GET_LEGAL_MENTIONS_SUCCESS = 'GET_LEGAL_MENTIONS_SUCCESS';
const GET_LEGAL_MENTIONS_FAILURE = 'GET_LEGAL_MENTIONS_FAILURE';


// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_HOMEPAGE':
      return {
        ...state,
      };
    case 'GET_HOMEPAGE_SUCCESS':
      return {
        ...state,
        homepageData: action.payload.data,
        loading: false,
      };
    case 'GET_HOMEPAGE_FAILURE':
      return {
        ...state,
      };
    case 'GET_LEGAL_MENTIONS':
      return {
        ...state,
      };
    case 'GET_LEGAL_MENTIONS_SUCCESS':
      return {
        ...state,
        legalMentionsData: action.payload.data,
        loading: false,
      };
    case 'GET_LEGAL_MENTIONS_FAILURE':
      return {
        ...state,
      };
    case 'GET_EVENTS':
      return {
        ...state,
        loading: true,
      };
    case 'GET_EVENTS_SUCCESS':
      return {
        ...state,
        events: action.payload.data,
        loading: false,
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
export function getLegalMentionsData() {
  return {
    type: 'GET_LEGAL_MENTIONS',
    payload: {
      request: {
        url: '/api/mentions-legales',
      },
    },
  };
}

export function getEvents() {
  return {
    type: 'GET_EVENTS',
    payload: {
      request: {
        url: '/events/',
     },
    },
  };
}


// == Selectors


// == Export
export default reducer;
