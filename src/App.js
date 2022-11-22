import logo from './logo.svg';
import './App.css';
import AgeComponent1 from './HOCComponent/AgeComponent';
import './HOCComponent/Component.css'
import DataDisplay from './HOCComponent/DataDisplay';
import { useState } from 'react';
import HairComp from './HOCComponent/HairComponent';
import GenderComp from './HOCComponent/GenderComponent';
function App() {
 
  const [displayData,setDisplayData]=useState(0);
  return (
    <div className="App">
     <h1>Age Component</h1>
     <AgeComponent1 displayData={displayData} setdisplayData={setDisplayData}/>
     <h1>Hair Component</h1>
     <HairComp/>
     <h1>Gender Component</h1>
     <GenderComp/>
    
    </div>
  );
}

export default App;
