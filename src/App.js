import React, { Component } from 'react';
import './App.css';

import Image from './Image';
import Typing from './Typing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>C O G A M</h1>
        <div className="text-area">
          <Image />
        </div>
        <input id="file1" clas="ml8" type="file"/>
        <Typing />
      </div>

    );
  }
}

export default App;
