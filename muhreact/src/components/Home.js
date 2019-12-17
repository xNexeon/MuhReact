import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="head">
      <h1>Welcome to zForum</h1>
      <div className="bcenter">
      <button className="btn btn-danger">Login</button>
      <div className="space" />
      <button className="btn btn-danger">Register</button>
      </div>
    </div>
  );
}


export default Home;
