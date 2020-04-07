import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';
import {SortType} from '../../const.js';
import CityFilter from '../city-filter/city-filter.jsx';
import Sorting from '../sorting/sorting.jsx';
import OfferList from '../offer-list/offer-list.jsx';
import Map from '../map/map.jsx';


const Catalog = ({
  cities,
  selectedCity,
  sortTypes,
  selectedSortType,
  offers,
  focusedOfferId,
  onCitySelect,
  onSortTypeSelect,
  onOfferFocus,
  onOfferFocusRemove,
  onOfferTitleClick,
}) => {
  const offerCount = offers.length;
  const selectedCityName = selectedCity.name;
  const sites = offers.map((offer) => ({
    id: offer.id,
    coords: offer.coords,
  }));

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CityFilter
          cities={cities}
          selectedCity={selectedCity}
          onCitySelect={onCitySelect}
        />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offerCount} place{offerCount > 1 ? `s` : ``} to stay in {selectedCityName}</b>
            <Sorting
              sortTypes={sortTypes}
              selectedSortType={selectedSortType}
              onSortTypeSelect={onSortTypeSelect}
            />
            <OfferList
              offers={offers}
              onOfferFocus={onOfferFocus}
              onOfferFocusRemove={onOfferFocusRemove}
              onOfferTitleClick={onOfferTitleClick}
            />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map
                center={selectedCity.coords}
                zoom={selectedCity.zoom}
                sites={sites}
                highlightedSiteId={focusedOfferId}
              />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};


Catalog.propTypes = {
  offers: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  selectedCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coords: PropTypes.array.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
  sortTypes: PropTypes.array.isRequired,
  selectedSortType: PropTypes.string.isRequired,
  focusedOfferId: PropTypes.number,
  onCitySelect: PropTypes.func.isRequired,
  onSortTypeSelect: PropTypes.func.isRequired,
  onOfferFocus: PropTypes.func.isRequired,
  onOfferFocusRemove: PropTypes.func.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
};


const getCitiesFromOffers = (offers) => offers.reduce((cities, offer) => {
  const hasKnownCity = cities.some((city) => city.name === offer.city.name);
  if (!hasKnownCity) {
    cities.push(offer.city);
  }
  return cities;
}, []);

const getOffersForSelectedCity = (offers, selectedCity) => offers.filter((offer) => offer.city.name === selectedCity.name);

const getSortedOffers = (offers, sortType) => {
  switch (sortType) {
    case SortType.POPULAR:
      return offers.slice();
    case SortType.PRICE_LOW_TO_HIGH:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortType.PRICE_HIGH_TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortType.RATING_HIGH_TO_LOW:
      return offers.slice().sort((a, b) => b.rating - a.rating);
  }

  return offers.slice();
};

const mapStateToProps = (state) => ({
  cities: getCitiesFromOffers(state.offers),
  selectedCity: state.selectedCity,
  sortTypes: state.sortTypes,
  selectedSortType: state.selectedSortType,
  offers: getSortedOffers(getOffersForSelectedCity(state.offers, state.selectedCity), state.selectedSortType),
  focusedOfferId: state.focusedOfferId,
});

const mapDispatchToProps = (dispatch) => ({
  onCitySelect(city) {
    dispatch(ActionCreator.selectCity(city));
  },
  onSortTypeSelect(sortType) {
    dispatch(ActionCreator.selectSortType(sortType));
  },
  onOfferFocus(id) {
    dispatch(ActionCreator.setFocusedOfferId(id));
  },
  onOfferFocusRemove() {
    dispatch(ActionCreator.setFocusedOfferId(null));
  },
});


export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(memo(Catalog));
