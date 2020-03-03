import React, { Component } from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import fire from './config/fire';
import Main from './Main';
import Home from './Home'



class Login extends Component {

  


  render() {
    return(
      <div className="form">
      <h1>Log In</h1>
      <div>
         <br />
        <form className="form-group"> 
          <label>Your Details</label>
          <br />
          <input type="text"  className="form-control formcontrolLong" id="formGroupExampleInput" placeholder="Email"></input>
          <input type="password"  className="form-control formcontrolLong" placeholder="Password"></input>
          <br />
          <button className="btn btn-danger spacer1">Log In</button>
          <br />
            <Link to="/Register">
          <p className="spacer">Dont have an account?</p>
            </Link>
        </form>
      </div>
    </div>
    )
  }
}


export default Login;

