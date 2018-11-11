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
          onTypingDone={this.props.typingDone} // typing done
          cursor = {cursor}>
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

// const testlist = ['떠','나','자','모','험','을','찾','아','선','택','받','은','일','곱','친','구','들','눈','앞','에','펼','쳐','진','세','상','신','기','한','디','지','털','세','상','외','치','자','세','상','을','향','해','구','하','자','디','지','털','세','상','우','리','들','지','혜','를','모','아','빛','을','찾','아','나','가','자','아','직','은','힘','이','벅','차','보','일','지','라','도','힘','들','고','어','려','운','일','생','길','지','라','도','진','화','를','위','한','힘','찬','발','걸','음','수','없','이','많','은','모','험','헤','친','다','떠','나','자','모','험','을','찾','아','선','택','받','은','일','곱','친','구','들','눈','앞','에','펼','쳐','진','세','상','신','기','한','디','지','털','세','상','외','치','자','세','상','을','향','해','구','하','자','디','지','털','세','상','우','리','들','지','혜','를','모','아','빛','을','찾','아','나','가','자','아','직','은','힘','이','벅','차','보','일','지','라','도','힘','들','고','어','려','운','일','생','길','지','라','도','진','화','를','위','한','힘','찬','발','걸','음','수','없','이','많','은','모','험','헤','친','다','떠','나','자','모','험','을','찾','아','선','택','받','은','일','곱','친','구','들','눈','앞','에','펼','쳐','진','세','상','신','기','한','디','지','털','세','상','외','치','자','세','상','을','향','해','구','하','자','디','지','털','세','상','우','리','들','지','혜','를','모','아','빛','을','찾','아','나','가','자','아','직','은','힘','이','벅','차','보','일','지','라','도','힘','들','고','어','려','운','일','생','길','지','라','도','진','화','를','위','한','힘','찬','발','걸','음','수','없','이','많','은','모','험','헤','친','다','떠','나','자','모','험','을','찾','아','선','택','받','은','일','곱','친','구','들','눈','앞','에','펼','쳐','진','세','상','신','기','한','디','지','털','세','상','외','치','자','세','상','을','향','해','구','하','자','디','지','털','세','상','우','리','들','지','혜','를','모','아','빛','을','찾','아','나','가','자','아','직','은','힘','이','벅','차','보','일','지','라','도','힘','들','고','어','려','운','일','생','길','지','라','도','진','화','를','위','한','힘','찬','발','걸','음','수','없','이','많','은','모','험','헤','친','다',]

//const testlist = '떠나자모험을찾아선택받은일곱친구들'
