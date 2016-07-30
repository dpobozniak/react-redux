import { CREATE_GAME } from './actions';

export const games = (state = {
  isFetching: false,
  didInvalidate: false,
  items: [],
}, action) => {
  switch (action.type) {
    case CREATE_GAME:
      return Object.assign({}, state, {
        items: [
          ...state.items,
          action.data,
        ]
      });
    default:
      return state;
  }
};
