import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import ActivityContainer from './ActivityContainer.jsx';

const App = () => {
  const [selectedButton, setSelectedButton] = useState('inbox');
  const [data, setData] = useState([]);

  useEffect(()=> {
    axios.get('https://cerulean-marlin-wig.cyclic.app/activities')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  },[])


  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className='container'>
      <Header onButtonClick={handleButtonClick} selectedButton={selectedButton}/>
      <div className="container-view">
      <ActivityContainer
        activities={data}
        selectedButton = {selectedButton}
      />
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
