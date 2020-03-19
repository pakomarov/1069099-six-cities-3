import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';


it(`Should match snapshot of Map`, () => {
  const tree = renderer
    .create(<Map
      area={[1, 2]}
      markers={[[1, 2]]}
    />, {
      createNodeMock: () => {
        return document.createElement(`div`);
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
