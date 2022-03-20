import './App.css';
import React, {useState} from 'react'

import HomePage from '../src/components/HomePage'
import Header from './components/Header';

function App() {

  return <div className='App'>
    <Header />
    <HomePage />
  </div>

};

export default App;
