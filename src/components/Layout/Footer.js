import React from 'react'

const Footer = () => {
  return (
    <footer className="page-footer amber darken-1" id="footer">
      <div className="container">
        <div className="row">
          <div className="col m6 s12">
            <h5 className="white-text">Coderlust</h5>
            <p className="grey-text text-lighten-4">
              All rights reserved to coderlust
            </p>
          </div>
          <div className="col m4 offset-m2 s12">
            <h5 className="white-text">Contact Us</h5>
            <ul>
              <li>
                <a
                  href="mailto:coderlust10@gmail.com"
                  className="btn-small btn-floating red"
                >
                  <i className="material-icons">contact_mail</i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/p_prachit/"
                  className="btn-small btn-floating red"
                >
                  <i className="material-icons">feedback</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2020 Copyright Text
        </div>
      </div>
    </footer>
  )
}

export default Footer
