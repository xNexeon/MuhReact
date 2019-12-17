import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  return (
    <div className="form">
      <h1>Register</h1>
      <div>
         <br />
        <form className="form-group">
          <label>Name</label>
          <br />
          <input type="text" className="form-control formcontrol" id="formGroupExampleInput" placeholder="First Name"></input>
          <input type="text" className="form-control formcontrol" placeholder="Last Name"></input>
          <br />
          <label>Email</label>
          <br />
          <input type="text" className="form-control formcontrol1" placeholder="eg bob@something.com"></input>
          <br />
          <label>Password</label>
          <br />
          <input type="password" className="form-control formcontrol1" placeholder="Make it complicated!"></input>
          <br />

          

        </form>
      </div>
    </div>
  );
}

export default Register;
