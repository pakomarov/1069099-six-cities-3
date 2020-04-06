import React from 'react';
import renderer from 'react-test-renderer';
import Review from './review.jsx';


const review = {
  id: 1,
  text: `Very nice place`,
  rating: 5,
  user: {
    name: `Ivan`,
    avatar: `img/avatar-angelina.jpg`,
  },
  date: new Date(`2019-05-08T14:13:56.569Z`),
};


it(`Should match snapshot of Review`, () => {
  const tree = renderer
    .create(<Review
      review={review}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
