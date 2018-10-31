import React, { Component } from 'react';
import './App.css';

import Image from './Image';
import Typing from './Typing';

class App extends Component {
  // 여기에 비동기 함수 만들어서 노드랑 연결하고, 파일에서 단어 가져오고
  // state 계속 바꾸기

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
