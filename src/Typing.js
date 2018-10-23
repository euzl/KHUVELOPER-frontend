import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reducer from './store';
import Typist from 'react-typist';
class Typing extends Component {
  render() {
    return (
      <Fragment>
          <Typist>
        타이핑 애니메이션이 실행되는 부분입니다.
          </Typist>
      </Fragment>
    );
  }
}

export default Typing;
