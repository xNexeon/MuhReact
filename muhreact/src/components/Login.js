import React, { Component } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  HandleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  HandlePassChange = (event) => {
    this.setState({
      pass: event.target.value
    })
  }


 

 
  render() {
    return(
      <div className="form">
      <h1>Log In</h1>
      <div>
         <br />
        <form className="form-group"> 
          <label>Your Details</label>
          <br />
          <input type="text" value={this.state.email} onChange={this.HandleEmailChange} className="form-control formcontrolLong" id="formGroupExampleInput" placeholder="Email"></input>
          <input type="password" value={this.state.password} onChange={this.HandlePassChange} className="form-control formcontrolLong" placeholder="Password"></input>
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

