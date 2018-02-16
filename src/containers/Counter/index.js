import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { countUp, countDown } from '../../actions/count'

const Counter = props => (
  <div>
    <h1>Counter</h1>
    <p>Let's use the counter</p>
    <p>Current count: {props.count}</p>
    <button onClick={() => props.countUp()}>Count Up</button>
    <button onClick={() => props.countDown()} disabled={props.count < 1}>Count Down</button>
    {props.result && !props.isCounting &&
      <p>Counter {props.result}</p>
    }
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isCounting: state.counter.isCounting,
  result: state.counter.result
})

const mapDispatchToProps = dispatch => bindActionCreators({
  countUp,
  countDown
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
