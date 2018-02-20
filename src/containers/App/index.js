import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading-bar'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Typography from 'material-ui/Typography'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import Grid from 'material-ui/Grid'


import Home from '../Home'
import Details from '../Details'

import logo from './Reddit_icon.svg'
import { AppContainer } from './styles'

const NoMatch = ({ location }) => (
  <div>
    <h1>404. Page not found.</h1>
  </div>
)

export class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <AppContainer>
        <LoadingBar />
        <AppBar position='sticky' color='default'>
          <Toolbar>
            <img src={logo} alt='logo' width='36' height='36' />
            <Typography variant='title' color='inherit'>
              Reddit React App
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Grid container className='paper'>
            <Grid item xs={12}>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/details/:slug' component={Details} />
                <Route component={NoMatch} />
              </Switch>
            </Grid>
          </Grid>
        </main>
      </AppContainer>
    );
  }
}

export default withStyles()(App);
