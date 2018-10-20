import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reducer from './store';

const sampleText = " printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'"
const text = sampleText.split('');

class Image extends Component {
  render() {
    return (
      <Fragment>
        <div>이미지로 글자들이 보여지는 부분입니다.</div>
         <div className="text-area">
          {text.map((item, i) => (
            <span style={{
              color: `rgb(${i/2},${i/2},${i/2})`
            }} key={i}>{item}</span>
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