import React from 'react'
import _ from 'lodash'

import { JobTitle, JobCompany } from './styles'

const JobsList = props => _.map(props.items, job => (
  <div>
    <JobTitle>{job.title} <span>({job.type})</span></JobTitle>
    <JobCompany>@ {job.company} - <span>{job.location}</span></JobCompany>
  </div>
))

export default JobsList
