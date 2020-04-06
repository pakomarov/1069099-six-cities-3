import offers from './mocks/offers.js';

const initialState = {
  offers,
  selectedCity: offers.length === 0 ? null : offers[0].city,
  focusedOfferId: null,
};


const ActionType = {
  SELECT_CITY: `SELECT_CITY`,
  SET_FOCUSED_OFFER_ID: `SET_FOCUSED_OFFER_ID`,
};


const ActionCreator = {
  selectCity: ({name, coords, zoom}) => ({
    type: ActionType.SELECT_CITY,
    payload: {
      name,
      coords,
      zoom,
    },
  }),
  setFocusedOfferId: (id) => ({
    type: ActionType.SET_FOCUSED_OFFER_ID,
    payload: id,
  }),
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_CITY:
      return Object.assign({}, state, {
        selectedCity: action.payload,
      });
    case ActionType.SET_FOCUSED_OFFER_ID:
      return Object.assign({}, state, {
        focusedOfferId: action.payload,
      });
  }

  return state;
};


export {reducer, ActionCreator};
