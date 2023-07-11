import React from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  return (
    <div>
      <div id="heading">
        STUDENT REGISTRATION
    </div>
    <div id="container">
        <div className="title">NAME</div>
        <input type="text" className="input"/>

        <div className="title">CATEGORY</div>
        <input type="text" className="input"/>

        <div className="title">SCHOOL NAME</div>
        <input type="text" className="input"/>

        <div className="title">CONTACT NUMBER</div>
        <div className="verification">
            <input type="number" className="input-verify"/>
            <button className="btn">VERIFY</button>
        </div>

        <div className="title">EMAIL ADDRESS</div>
        <div className="verification">
            <input type="email" className="input-verify"/>
            <button className="btn">VERIFY</button>
        </div>

        <button className="submit-button">CONFIRM</button>

    </div>
    </div>
  )
}

export default RegistrationForm
