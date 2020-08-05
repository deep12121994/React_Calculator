import React from 'react';
import './App.css';
import _ from 'lodash';
import HelloWorld from "./HelloWorld";

function getRandomIntegers(){
  console.log(Math.round(Math.random()*100));
  return Math.round(Math.random()*100);
}

function App() {
  _.times(5,getRandomIntegers); 
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld/>
        <HelloWorld/>
        <HelloWorld/>
        <HelloWorld/>
      </header>
    </div>
  );
}

export default App;
