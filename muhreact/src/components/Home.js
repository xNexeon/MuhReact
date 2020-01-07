import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Stitch, AnonymousCredential } from 'mongodb-stitch-browser-sdk'

function initializeAndLogin() {
  const client = Stitch.initializeDefaultAppClient('zforum-pvpwj');
  client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
    console.log('Connected to Stitch Sucessfully')
  });
}
window.onload = initializeAndLogin;



function Home() {
  return (
    <div className="head">
      <h1>Welcome to zForum</h1>
      <div className="bcenter">
        <Link to="/Login">
      <button className="btn btn-danger">Login</button>
        </Link>
      <div className="space" />
        <Link to="/Register">
      <button className="btn btn-danger">Register</button>
        </Link>
      </div>
    </div>
  );
}


export default Home;
