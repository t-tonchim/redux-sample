import React from 'react';
import { connect } from 'react-redux';
import { countupAction, countdownAction } from '../actions/countAction.js';

// stateless funcional componentの場合はpropsを引数にとる
const App = props =>
  <div>
    <button className="btn btn-info" onClick={props.countup}>
      +
    </button>
    <button className="btn btn-danger" onClick={props.countdown}>
      -
    </button>
    <p>counter: {props.count}</p>
  </div>;

// store 全体から必要なstateを取得して、
// propsにマッピングして参照できるようにする
const mapStateToProps = state =>
 ({ count: state.count });

// actionをpropsにマッピングして
// コンポーネント側で使用できるようにする
const mapDispatchToProps = dispatch =>
  ({
    countup: count => dispatch(countupAction(count)),
    countdown: count => dispatch(countdownAction(count)),
  });

// マッピングする関数を適用したAppをexport
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
