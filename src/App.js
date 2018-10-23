import React, { Component } from 'react';
import './App.css';

import Image from './Image';
import Typing from './Typing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>KHUVELOPER PROJECT</h1>
        <div className="text-area">
          <Image />
          <Typing />
        </div>
      </div>
    );
  }
}

export default App;
