import React, { Component } from 'react';
import './App.css';

import Image from './Image';
import Typing from './Typing';

const buffer = ['출력할문장1', '출력할문장2', '출력할문장3'];

class App extends Component {
  // 여기에 비동기 함수 만들어서 노드랑 연결하고, 파일에서 단어 가져오고
  // state 계속 바꾸기
  constructor() {
    super();
    this.state = {
      // buffer: buffer,   // 출력할 문장 목록
      // totalSentence: '',    // 전체 문장(이미지 적용되는?)
      // sentence: '',     // 현재 출력중인 문장
      // word: '',         // 현재 출력할 글자(한 글자)
      // status: ''        // 출력중인지, 아닌지

      currentCount: 10
    }
  }

  componentDidMount() {
    let intervalId = setInterval(this.timer, 5000);
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  // 매 5초(5000)마다 실행할 함수
  // 함수 명 바꿔서 componentDidMount()의 setInterval 수정해주세요.
  timer = () => {
    // 요청해서 새 단어 받아오기
    // 새 단어가 있는 경우 store의 buffer에 추가하기
    this.setState({
      currentCount: this.state.currentCount - 1
    })
  }

  render() {
    const displayCount = this.state.currentCount;
    return (
      <div className="App">
        <h1 className="title">KHUVELOPER PROJECT {displayCount}</h1>
        <div className="text-area">
          <Image />
          <Typing />
        </div>
      </div>
    );
  }
}

export default App;
