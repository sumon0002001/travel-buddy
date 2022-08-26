import React, {useState} from 'react';
import './App.css';
import Dropdown from './dropdown/Dropdown';


function App() {
  const [selected, setSelected] = useState('')
  return (
    <div className="App">
     <Dropdown selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
