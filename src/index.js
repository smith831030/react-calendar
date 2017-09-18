import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/calendar';
import Home from './components/home';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './index.css';

ReactDOM.render((
    <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/calendar" component={Calendar}/>
        </div>
      </Router>),
  document.getElementById('root')
);
