import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { navigateTo } from '../../actions/navigation'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Click the button below to navigate to another page</p>
    <button onClick={() => props.navigateTo('/about')}>Go to About</button>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  navigateTo
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Home)
