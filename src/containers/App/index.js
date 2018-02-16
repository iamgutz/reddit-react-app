import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading-bar'
import logo from './logo.svg'
import './App.css'
import Home from '../Home'
import Counter from '../Counter'
import Jobs from '../Jobs'
import Menu from '../../components/Menu'

const NoMatch = ({location}) => (
  <div>
    <h1>404. Page not found.</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoadingBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Menu />
        </header>
        <main>
          <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/counter' component={Counter}></Route>
          <Route exact path='/jobs' component={Jobs}></Route>
          <Route component={NoMatch} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
