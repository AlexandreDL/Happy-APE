// == Initial State
const initialState = {
  homepageData: {},
  legalMentionsData: [],
  CGUData: [],
  CGVData: [],
  loading: true,
  events: {},
  whoAreWeData: [],
};
// == Types
const GET_LEGAL_MENTIONS = 'GET_LEGAL_MENTIONS';
const GET_LEGAL_MENTIONS_SUCCESS = 'GET_LEGAL_MENTIONS_SUCCESS';
const GET_LEGAL_MENTIONS_FAILURE = 'GET_LEGAL_MENTIONS_FAILURE';
const GET_CGUDATA = 'GET_CGUDATA';
const GET_CGUDATA_SUCCESS = 'GET_CGUDATA_SUCCESS';
const GET_CGUDATA_FAILURE = 'GET_CGUDATA_FAILURE';
const GET_CGVDATA = 'GET_CGVDATA';
const GET_CGVDATA_SUCCESS = 'GET_CGVDATA_SUCCESS';
const GET_CGVDATA_FAILURE = 'GET_CGVDATA_FAILURE';
const GET_WHOAREWEDATA = 'GET_WHOAREWEDATA';
const GET_WHOAREWEDATA_SUCCESS = 'GET_WHOAREWEDATA_SUCCESS';
const GET_WHOAREWEDATA_FAILURE = 'GET_WHOAREWEDATA_FAILURE';


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
    case GET_LEGAL_MENTIONS:
      return {
        ...state,
      };
    case GET_LEGAL_MENTIONS_SUCCESS:
      return {
        ...state,
        legalMentionsData: action.payload.data,
        loading: false,
      };
    case GET_LEGAL_MENTIONS_FAILURE:
      return {
        ...state,
      };
    case GET_CGUDATA:
      return {
        ...state,
      };
    case GET_CGUDATA_SUCCESS:
      return {
        ...state,
        CGUData: action.payload.data,
        loading: false,
      };
    case GET_CGUDATA_FAILURE:
      return {
        ...state,
      };
    case GET_WHOAREWEDATA:
      return {
        ...state,
      };
    case GET_WHOAREWEDATA_SUCCESS:
      return {
        ...state,
        whoAreWeData: action.payload.data,
        loading: false,
      };
    case GET_WHOAREWEDATA_FAILURE:
      return {
        ...state,
      };
    case GET_CGVDATA:
      return {
        ...state,
      };
    case GET_CGVDATA_SUCCESS:
      return {
        ...state,
        CGVData: action.payload.data,
        loading: false,
      };
    case GET_CGVDATA_FAILURE:
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
    type: GET_LEGAL_MENTIONS,
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

export function getCGUData() {
  return {
    type: GET_CGUDATA,
    payload: {
      request: {
        url: '/api/conditions-utilisation',
      },
    },
  };
}

export function getCGVData() {
  return {
    type: GET_CGVDATA,
    payload: {
      request: {
        url: '/api/conditions-vente',
      },
    },
  };
}

export function getWhoAreWeData() {
  return {
    type: GET_WHOAREWEDATA,
    payload: {
      request: {
        url: '/api/qui-sommes-nous',
      },
    },
  };
}


// == Selectors


// == Export
export default reducer;
