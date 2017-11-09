import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'

class App extends Component {
  handleIncriment() {
    this.props.dispatch(actions.incriment())
  }

  handleDecriment() {
    this.props.dispatch(actions.decriment())
  }

  handleIncrimentAsync() {
    this.props.dispatch(actions.incrimentAsync())
  }

  handleDecrimentAsync() {
    this.props.dispatch(actions.decrimentAsync())
  }

  render() {
    return (
      <div>
        <h1>Counter example</h1>
        <p>
          Clicked: {this.props.count} times{' '}
          <button
            className="increment"
            onClick={this.handleIncriment.bind(this)}
          >
            +
          </button>{' '}
          <button
            className="decrement"
            onClick={this.handleDecriment.bind(this)}
          >
            -
          </button>{' '}
          <button
            className="incrementAsync"
            onClick={this.handleIncrimentAsync.bind(this)}
          >
            Increment async
          </button>{' '}
          <button
            className="decrimentAsync"
            onClick={this.handleDecrimentAsync.bind(this)}
          >
            Decribent async
          </button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.counter.count
})

export default connect(mapStateToProps)(App)
