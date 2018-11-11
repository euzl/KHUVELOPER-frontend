import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reducer from './store';

import { color, text } from './color';

class Image extends Component {
  constructor() {
    super();
    this.state = {
      sentence: (Array(30).join(text)).substr(0, 7000), // substr(arg1,arg2) -> arg2에 기본으로 출력될 문자 수 입력
    }
  }

  componentWillReceiveProps(nextProps) {
    const { typingStatus, word } = nextProps;
    const { typingNone } = this.props;
    let { sentence } = this.state;

    // typing이 끝났을 때
    if (typingStatus === 'done') {
      // 최대 길이를 초과했을 때, 앞의 한 글자 삭제
      if(sentence.length >= 7000) sentence = sentence.substr(1,7001) // 1 ~ arg2 까지만 출력. (arg2=7001)
      // state의 sentence에 새 단어 추가
      this.setState({
       sentence: sentence + word,
      })

      // store의 typing 상태 변경
      return typingNone();
    }
  }

  render() {
    const colorList = color.split(':'); // ':'로 rgb 나눈다.
    const textList = this.state.sentence.split('');
    return (
      <Fragment>
        <div style={{ textAlign: 'left', }}>
          {textList.map((item, i) => (
            <div className="word" style={{
              color: colorList[i], // word글자에 색 넣기
              // backgroundColor: colorList[i],
            }} key={i}>{item}</div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    typingStatus: state.typingStatus,
    word: state.word,
  }),
  dispatch => ({
    typingNone: bindActionCreators(reducer.typingNone, dispatch)
  })
)(Image);
