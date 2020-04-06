import offers from './mocks/offers.js';
import {SORT_TYPES, DEFAULT_SORT_TYPE} from './const.js';


const initialState = {
  offers,
  selectedCity: offers.length === 0 ? null : offers[0].city,
  focusedOfferId: null,
  sortTypes: SORT_TYPES,
  selectedSortType: DEFAULT_SORT_TYPE,
};


const ActionType = {
  SELECT_CITY: `SELECT_CITY`,
  SET_FOCUSED_OFFER_ID: `SET_FOCUSED_OFFER_ID`,
  SELECT_SORT_TYPE: `SELECT_SORT_TYPE`,
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
  selectSortType: (sortType) => ({
    type: ActionType.SELECT_SORT_TYPE,
    payload: sortType,
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
    case ActionType.SELECT_SORT_TYPE:
      return Object.assign({}, state, {
        selectedSortType: action.payload,
      });
  }

  return state;
};


export {reducer, ActionCreator};
