import offers from './mocks/offers.js';

const initialState = {
  offers,
  selectedCity: offers.length === 0 ? null : offers[0].city,
};


const ActionType = {
  SELECT_CITY: `SELECT_CITY`,
};


const ActionCreator = {
  selectCity: ({name, coords}) => ({
    type: ActionType.SELECT_CITY,
    payload: {
      name,
      coords,
    },
  }),
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_CITY:
      return Object.assign({}, state, {
        selectedCity: action.payload
      });
  }

  return state;
};


export {reducer, ActionCreator};
