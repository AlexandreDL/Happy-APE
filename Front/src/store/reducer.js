// == Initial State
const initialState = {
  loading: true,
  drawerOpen: false,
  contactFirstname: '',
  contactName: '',
  contactEmail: '',
  contactMessage: '',
  CGVData: [],
  CGUData: [],
  legalMentionsData: [],
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
const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
const CONTACT_INPUT_VALUE = 'CONTACT_INPUT_VALUE';
const SEND_CONTACTFORM = 'SEND_CONTACTFORM';


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
    case CONTACT_INPUT_VALUE:
      return {
        ...state,
        contactName: (action.contact_name === undefined) ? state.contactName : action.contact_name,
        contactFirstname: (action.contact_firstname === undefined) ? state.contactFirstname : action.contact_firstname,
        contactEmail: (action.contact_email === undefined) ? state.contactEmail : action.contact_email,
        contactMessage: (action.contact_message === undefined) ? state.contactMessage : action.contact_message,
        
      };
    case TOGGLE_DRAWER:
      return {
        ...state,
        drawerOpen: !state.drawerOpen,
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
        url: '/mentions-legales',
      },
    },
  };
}

export function getEvents() {
  return {
    type: 'GET_EVENTS',
    payload: {
      request: {
        url: '/api/events/',
      },
    },
  };
}

export function getCGUData() {
  return {
    type: GET_CGUDATA,
    payload: {
      request: {
        url: '/conditions-utilisation',
      },
    },
  };
}

export function getCGVData() {
  return {
    type: GET_CGVDATA,
    payload: {
      request: {
        url: '/conditions-vente',
      },
    },
  };
}

export function getWhoAreWeData() {
  return {
    type: GET_WHOAREWEDATA,
    payload: {
      request: {
        url: '/qui-sommes-nous',
      },
    },
  };
}
export function sendContactForm(contactData) {
  return {
    type: SEND_CONTACTFORM,
    payload: {
      request: {
        url: '/api/contacts',
        body: contactData,
        method: 'POST',
      },
    },
  };
}

export const toggleDrawer = () => ({
  type: TOGGLE_DRAWER,
});

export const changeContactInput = (name, value) => ({
  type: CONTACT_INPUT_VALUE,
  [name]: value,
});


// == Selectors


// == Export
export default reducer;
