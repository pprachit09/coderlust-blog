import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import Footer from './components/Layout/Footer'

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/register" component={RegistrationForm} />
        </Switch>
        <main><div className="container"></div></main>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
