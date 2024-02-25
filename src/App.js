import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import React from 'react'
import {Component} from 'react'

class App extends Component 
{
  render()
  {
    return(
      <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
    )
  }
}
export default App
