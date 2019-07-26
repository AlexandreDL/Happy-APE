// == Initial State
const initialState = {
  homepageData: null,
};

// == Types
const GET_HOMEPAGE_DATAS = 'GET_HOMEPAGE_DATAS';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_HOMEPAGE_DATAS:
      return {
        ...state,
        homepageData: action.homepageData,
      };

    default:
      return state;
  }
};

// == Action Creators
export const getHomepageDatas = data => ({
  type: GET_HOMEPAGE_DATAS,
  homepageData: data,
});


// == Selectors


// == Export
export default reducer;
