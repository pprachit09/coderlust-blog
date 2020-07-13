import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import FormLayout from './components/RegistrationForm/FormLayout'

function App () {
  return (
    <BrowserRouter>
      <div className="App" data-test="component-app">
        <Header data-test="header-app" />
        <Switch>
          <Route path="/register" component={FormLayout} />
        </Switch>
        <main>
          <div className="container"></div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
