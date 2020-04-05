import React from 'react';
import PropTypes from 'prop-types';


const areCitiesEqual = (a, b) => a.name === b.name;


const CityFilter = ({
  cities,
  selectedCity,
  onCitySelect,
}) => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li key={city.name} className="locations__item">
            <a
              className={`locations__item-link tabs__item${areCitiesEqual(city, selectedCity) ? ` tabs__item--active` : ``}`}
              href="#"
              onClick={() => onCitySelect(city)}
            >
              <span>{city.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};


CityFilter.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  selectedCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onCitySelect: PropTypes.func.isRequired,
};


export default CityFilter;
