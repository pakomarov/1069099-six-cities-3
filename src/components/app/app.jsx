import React from 'react';
import Main from '../main/main.jsx';


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {places} = props;

  return (
    <Main
      places={places}
    />
  );
};


export default App;
