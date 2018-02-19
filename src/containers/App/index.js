import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading-bar'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Typography from 'material-ui/Typography'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'


import Home from '../Home'
import Details from '../Details'

const NoMatch = ({location}) => (
  <div>
    <h1>404. Page not found.</h1>
  </div>
)

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
})

class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <LoadingBar />
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Reddit React App
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Grid container>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Switch>
                  <Route exact path='/' component={Home}></Route>
                  <Route exact path='/details/:slug' component={Details}></Route>
                  <Route component={NoMatch} />
                </Switch>
              </Paper>
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(App);
