import axios from 'axios';
import { getHomepageDatas } from './reducer';

const logMiddleware = store => next => (action) => {

  // POUR EXEMPLE: Requetes avec Axios
  // Je dois réagir uniquement à certains types d'action
  switch (action.type) {
    case 'GET_HOMEPAGE_DATAS':
        axios.get('http://api.happyape.local')
        .then(response => {
          const { data } = response;
          store.dispatch(getHomepageDatas(data));
        });
    default:
       next(action);
  }
};

export default logMiddleware;
