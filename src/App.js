import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header.react';
import Search from './Search/Search.react'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
    </div>
  );
}

export default App;
