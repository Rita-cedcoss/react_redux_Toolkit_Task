
import './App.css';
import CouterComp from './HOCcomponent.js/CounterComponent';
import IncrementBy2Component from './HOCcomponent.js/IncrementBy2';
import IncrementBy10Copmonent from './HOCcomponent.js/IncrementBy10';

function App() {
  return (
    <>
    <div className='App'>
    <h1>Increment By 2</h1>
     <IncrementBy2Component/>
     <h1>Increment By 5</h1>
    <CouterComp/>
   <h1>Increment By 10</h1>
    <IncrementBy10Copmonent/>
    </div>
    </>
  );
}

export default App;
