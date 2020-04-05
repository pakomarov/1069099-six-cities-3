import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CityFilter from './city-filter.jsx';


Enzyme.configure({
  adapter: new Adapter(),
});


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


it(`Should call onCitySelect and pass city`, () => {
  const onCitySelect = jest.fn();

  const cityFilter = shallow(
      <CityFilter
        cities={cities}
        selectedCity={selectedCity}
        onCitySelect={onCitySelect}
      />
  );

  const cityElement = cityFilter.find(`.locations__item-link`).at(0);

  cityElement.simulate(`click`);

  expect(onCitySelect).toHaveBeenCalledWith(cities[0]);
});
