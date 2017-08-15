import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHello } from '../actions/helloAction'

class App extends Component {
  render(){
    return (
      <div>
        <button type="button" onClick={this.props.getHello}>
          success!
        </button>
        <button type="button" onClick={this.props.failHello}>
          failure...
        </button>
        {this.props.greet}
        {this.props.error}
      </div>
    )
  }
}

const mapStateToProps = state =>
  ({
    greet: state.greet,
    isFetching: state.isFetching,
    error: state.error
  })

const mapDispathToProps = dispatch =>
  ({
    /*
     * 通常はdispatchの引数に関数を渡すことはできませんが、
     * ミドルウェアにredux-thunkを使用しているので可能になります。
     */
    getHello: () => dispatch(fetchHello('/greet.json')),
    failHello: () => dispatch(fetchHello('/aaa.json'))
  })

export default connect(
  mapStateToProps,
  mapDispathToProps
)(App)
