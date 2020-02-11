import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Stitch, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
import ConnectMongo from './mongo'
import InsertDoc from './InsertDoc'

window.onload = (ConnectMongo)



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
        <button onCLick={InsertDoc} className="btn btn-danger">Test</button>
      </div>
    </div>
  );
}


export default Home;
