import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import InsertDoc from './InsertDoc'
import Main from './Main';
import Home from './Home'

class Home extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      user:{},

    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return(
<div className="head">
      {this.state.user ? (<Home />) : (<Main/>)}
      <h1>Welcome to zForum</h1>
      <div className="bcenter">
        <Link to="/Login">
      <button className="btn btn-danger">Login</button>
        </Link>
      <div className="space" />
        <Link to="/Register">
      <button className="btn btn-danger">Register</button>
        </Link>
        <button className="btn btn-danger">Test</button>
      </div>
    </div>
    )
  }
}



export default Home;
