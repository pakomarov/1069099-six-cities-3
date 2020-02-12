import React from 'react';
import Main from '../main/main.jsx';


const App = (props) => {
  const {places} = props;

  return (
    <Main
      places={places}
    />
  );
};


export default App;
