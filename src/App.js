import React, { Component } from 'react';
import './App.css';

import Image from './Image';
import Typing from './Typing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>KHUVELOPER PROJECT</h1>
        <Image />
        <Typing />
      </div>
    );
  }
}

export default App;
