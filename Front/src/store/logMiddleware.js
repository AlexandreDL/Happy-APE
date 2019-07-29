const logMiddleware = store => next => (action) => {

  // POUR EXEMPLE: Requetes avec Axios
  // Je dois réagir uniquement à certains types d'action
  switch (action.type) {
    default:
      next(action);
  }
};

export default logMiddleware;
