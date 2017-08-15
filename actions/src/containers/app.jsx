import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../actions/fizzBuzzAction'
import { bindActionCreators } from 'redux'

class App extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    const num = parseInt(e.target.num.value)
    if(Number.isNaN(num)){
      this.props.fizzBuzzJudgement(new Error())
    } else {
      this.props.fizzBuzzJudgement(num)
    }
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="num" />
          <button>FizzBuzz Judge</button>
        </form>
        {this.props.result}
      </div>
    )
  }
}

const mapStateToProps = state =>
  ({
    result: state.result
  })

// bindActionCreatorsはactiionCreatorを丸ごと全部bindしてくれる
const mapDispatchToProps = dispatch =>
 ({...bindActionCreators(actions, dispatch)})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
