import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';
import CityFilter from '../city-filter/city-filter.jsx';
import OfferList from '../offer-list/offer-list.jsx';
import Map from '../map/map.jsx';


const Catalog = ({
  cities,
  selectedCity,
  offers,
  focusedOfferId,
  onCitySelect,
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
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>
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
  focusedOfferId: PropTypes.number,
  onCitySelect: PropTypes.func.isRequired,
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

const mapStateToProps = (state) => ({
  cities: getCitiesFromOffers(state.offers),
  selectedCity: state.selectedCity,
  offers: getOffersForSelectedCity(state.offers, state.selectedCity),
  focusedOfferId: state.focusedOfferId,
});

const mapDispatchToProps = (dispatch) => ({
  onCitySelect(city) {
    dispatch(ActionCreator.selectCity(city));
  },
  onOfferFocus(id) {
    dispatch(ActionCreator.setFocusedOfferId(id));
  },
  onOfferFocusRemove() {
    dispatch(ActionCreator.setFocusedOfferId(null));
  },
});


export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
