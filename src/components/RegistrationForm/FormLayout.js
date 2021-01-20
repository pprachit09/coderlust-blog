import React, { useEffect } from 'react'
import RegistrationForm from './RegistrationForm'
import LogIn from './LogIn'
import M from 'materialize-css'

const FormLayout = () => {
  useEffect(() => {
    M.AutoInit()
  }, [])
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6 l8 offset-l3 offset-m3">
          <div className="card teal darken-1">
            <div className="card-tabs">
              <ul className="tabs tabs-fixed-width orange lighten-5">
                <li className="tab">
                  <a href="#signup" className="blue-text text-darken-4">
                    Sign up
                  </a>
                </li>
                <li className="tab">
                  <a href="#login" className="blue-text text-darken-4">
                    Log in
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-content white-text">
              <div id="signup">
                <span className="card-title center">One Stop to go ahead</span>
                <RegistrationForm />
              </div>
              <div id="login">
                <span className="card-title center">
                  Log in here to continue
                </span>
                <LogIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormLayout
