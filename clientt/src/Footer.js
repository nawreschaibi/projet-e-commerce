import React from 'react'
import './Footer.css'


function Footer() {
    return (
        <div>
            
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">SOLEMAG <i>we buy marbles</i> you can choose your best .</p>
            </div>
           
            <div className="col-xs-6 col-md-3">
              <h6>CONTACTUS</h6>
             <p>Ssolemag@gmail.com</p>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright © 2017 All Rights Reserved by 
              <p>SOLEMAG</p>
              </p>
            </div>
           
          </div>
        </div>
      </footer>
 
        </div>
    )
}

export default Footer
