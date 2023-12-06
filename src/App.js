import './App.css';

import { useState } from 'react';

import UnitControl from './components/UnitControl';
import CardFooter from './components/CardFooter';
import UnitConverter from './components/UnitConverter';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far);

function App() {
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl />
        <UnitConverter
          handleInputChange={handleInputChange}
          inputValue={inputValue}
        />
      </div>
      <CardFooter inputValue={inputValue} />
    </div>
  );
}

export default App;
