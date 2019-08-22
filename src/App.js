import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChessBoard from './chess/ChessBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Play Chess!</div>
        <ChessBoard></ChessBoard>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
