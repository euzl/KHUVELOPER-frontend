import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reducer from './store';

import { color, text } from './color';

class Image extends Component {
  constructor() {
    super();
    this.state = {
      sentence: (Array(6).join(text)),
    }
  }

  componentWillReceiveProps(nextProps) {
    const { typingStatus, word } = nextProps;
    const { typingNone } = this.props;
    console.log(typingStatus);
    if (typingStatus === 'done') {
      this.setState({
        sentence: this.state.sentence.concat(word),
      })
      return typingNone();
    }
  }

  render() {
    const colorList = color.split(':');
    const textList = this.state.sentence.split('');
    return (
      <Fragment>
        {textList.map((item, i) => ( 
          <div className="word" style={{
            color: colorList[i],
            // backgroundColor: 'black',
          }} key={i}>{item}</div>
        ))}
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