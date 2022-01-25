import React from 'react'
import './Contact.css'
function Contact() {
    return (
        <div>
             <div className="container">
        <h1 className="brand"><span>SOLEMAG</span></h1>
        <div className="wrapper">
          {/* COMPANY INFORMATION */}
          <div className="company-info">
            <h3>SOLEMAG</h3>
            <ul>
              <li><i className="fa fa-road" /> RUE NARJES METOUIA</li>
              <li><i className="fa fa-phone" /> 22759523/55020864</li>
              <li><i className="fa fa-envelope" />Ssolemag@gmailcom</li>
            </ul>
          </div>
          {/* End .company-info */}
          {/* CONTACT FORM */}
          <div className="contact">
            <h3>E-mail Us</h3>
            <form id="contact-form">
              <p>
                <label>Name</label>
                <input type="text" name="name" id="name" required />
              </p>
              <p>
                <label>Company</label>
                <input type="text" name="company" id="company" />
              </p>
              <p>
                <label>E-mail Address</label>
                <input type="email" name="email" id="email" required />
              </p>
              <p>
                <label>Phone Number</label>
                <input type="text" name="phone" id="phone" />
              </p>
              <p className="full">
                <label>Message</label>
                <textarea name="message" rows={5} id="message" defaultValue={""} />
              </p>
              <p className="full">
                <button type="submit">Submit</button>
              </p>
            </form>
            {/* End #contact-form */}
          </div>
          {/* End .contact */}
        </div>
        {/* End .wrapper */}
      </div>
      {/* End .container */}
    
  
        </div>
    )
}

export default Contact



