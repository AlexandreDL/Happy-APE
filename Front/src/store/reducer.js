// == Initial State
const initialState = {
  homepageData: {},
  loading: true,
  events: {},
};

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
