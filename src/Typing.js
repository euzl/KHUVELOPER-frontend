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



  render() {
    const { word } = this.state;
    const { typingStatus } = this.props;

    if (typingStatus !== 'typing') return <div />
    return (
      <Fragment>
          <Typist onTypingDone={this.props.typingDone}>
            <Typist.Delay ms={100} />
              <div className="word" style = {{
                width: '800px', // text area 사이즈
                textAlign: 'left',
              }}>{word}</div>
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

const testlist = ['테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트', '테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트', '테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트', '단어단어단어단어', '입니다입니다입니다.']
