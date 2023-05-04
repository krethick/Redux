import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useSelector } from "react-redux"


function App() {

   const account = useSelector((state) => state.account);

  console.log(account)

  return (
    <div className="App">

    </div>
  );
}

export default App;
