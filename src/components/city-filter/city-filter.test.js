import React from 'react';
import renderer from 'react-test-renderer';
import CityFilter from './city-filter.jsx';


const cities = [
  {
    coords: [52.38333, 4.9],
    name: `Amsterdam`,
    zoom: 12,
  }, {
    coords: [52.38333, 4.9],
    name: `Paris`,
    zoom: 12,
  },
];

const selectedCity = {
  coords: [52.38333, 4.9],
  name: `Paris`,
  zoom: 12,
};


it(`Should match snapshot of CityFilter`, () => {
  const tree = renderer
    .create(<CityFilter
      cities={cities}
      selectedCity={selectedCity}
      onCitySelect={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
