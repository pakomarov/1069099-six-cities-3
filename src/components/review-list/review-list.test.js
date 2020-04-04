import React from 'react';
import renderer from 'react-test-renderer';
import ReviewList from './review-list.jsx';


const reviews = [
  {
    id: 1,
    text: `Very nice place`,
    rating: 5,
    user: {
      name: `Ivan`,
      avatar: `img/avatar-angelina.jpg`,
    },
    date: new Date(`2019-05-08T14:13:56.569Z`),
  },
  {
    id: 2,
    text: `Bad bad bad`,
    rating: 1,
    user: {
      name: `John Doe`,
      avatar: `img/avatar-angelina.jpg`,
    },
    date: new Date(`2016-04-06T14:13:56.569Z`),
  },
  {
    id: 3,
    text: `Good enough`,
    rating: 4,
    user: {
      name: `Marina`,
      avatar: `img/avatar-angelina.jpg`,
    },
    date: new Date(`1917-06-26T14:13:56.569Z`),
  },
];


it(`Should match snapshot of ReviewList`, () => {
  const tree = renderer
    .create(<ReviewList
      reviews={reviews}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
