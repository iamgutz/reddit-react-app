import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import { fetchJobs } from '../../actions/jobs'
import JobsList from '../../components/JobsList'

const Home = props => (
  <div>
    <h1>Jobs available in California</h1>
    {_.isEmpty(props.jobs) && !props.fetched &&
      <button onClick={() => props.fetchJobs()}>Load Posts</button>
    }

    {_.isEmpty(props.jobs) && props.fetched &&
      <p>Results not found.</p>
    }

    {!_.isEmpty(props.jobs) &&
      <JobsList items={props.jobs} />
    }
  </div>
)

const mapStateToProps = state => ({
  jobs: state.jobs.list,
  fetched: state.jobs.fetched
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchJobs
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
