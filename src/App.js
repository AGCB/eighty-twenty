import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// Pages
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul className="menu-bar">
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/about">about</Link></li>
            <li> <Link to="/profile">myProfile</Link></li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
          </Switch>
        </div>
      </Router>
      <footer style={{"position":"fixed", "bottom": "0"}}>
        <span>insert shnazzy footer here.
          <a href="https://www.youtube.com/watch?v=YnhI_ECOAK4">partyTime</a> for now</span>
      </footer>
    </div>
  );
}

export default App;
