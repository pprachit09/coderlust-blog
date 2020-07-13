import React from 'react'
import RegistrationForm from './RegistrationForm'

const FormLayout = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6 l8">
          <div className="card teal darken-1">
            <div className="card-content white-text">
              <span className="card-title center">One Stop to go ahead</span>
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormLayout
