// == Initial State
const initialState = {
  homepageData: {},
  loading: true,
<<<<<<< HEAD
  events: {},
=======
>>>>>>> 6d2d6ae2749b6e16dbca8d6b2c638e08f978ac90
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
<<<<<<< HEAD
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
=======
>>>>>>> 6d2d6ae2749b6e16dbca8d6b2c638e08f978ac90
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
