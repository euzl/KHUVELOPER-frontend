import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reducer from './store';

import Typist from 'react-typist';

class Typing extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,   // for test
      word: '',
    }
  }

  componentWillMount() {
    this.getWord();
  }

  componentWillReceiveProps(nextProps) {
    const { typingStatus } = nextProps;
    // console.log(typingStatus);
    if (typingStatus === 'none') {
      return this.getWord();
    }
  }

  // testlist->word 끊어진 단위로 문자열 복사
  getWord = () => {
    const { count } = this.state;
    const { typingIng } = this.props;

    if (!testlist[count]) return;
    this.setState({
      word: testlist[count],
      count: count + 1,
    });

    return typingIng(testlist[count]);
  }

  // 화면에 띄울 글자 넘겨주기
  render() {
    const { word } = this.state;
    const { typingStatus } = this.props;
    const cursor = {show: false}

    if (typingStatus !== 'typing') return <div />
    return (
      <Fragment>
          <Typist
            onTypingDone={this.props.typingDone}
            cursor = {cursor}>
            <Typist.Delay ms={100} />
              <div className="word" style = {{color: 'black'}}>{word}</div>
          </Typist>
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
    typingDone: bindActionCreators(reducer.typingDone, dispatch),
    typingIng: bindActionCreators(reducer.typingIng, dispatch),
  })
)(Typing);


const testlist = '티룸갔다가직원분이랑콩떡이얘기를하는데자기아는분이고양이를"구매"하려고하더라는얘기를하시길래"입양"이라고정정해드렸는데정정에서그치는게아니라사는물건이아니고같이사는가족이라고쏘아붙이고싶었지만소수인원으로운영하는코스중이어서그러고말았음찝찝해'
