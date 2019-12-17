import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Register from './components/Register'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


ReactDOM.render((
  <div>
    <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/register" component={Register} />
    </BrowserRouter>
    </div>
  ), document.getElementById('root'))



serviceWorker.unregister();
