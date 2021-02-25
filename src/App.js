import './App.css';
import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/header/Header';
import Search from './components/search/Search';
import Coins from './components/fetch_coins/FetchCoins';
import LiveReports from './components/live_reports/LiveReports';
import About from './components/about/About';
import SearchResult from './components/search_result/SearchResult';
import Footer from './components/footer/Footer';


const App = () => {
  const [isActive, setIsActive] = useState('hidden-nav');

  const btnToggle = () => { // Toggle main nav on button click
    if (isActive === 'hidden-nav') {
      setIsActive('active-nav');
    } else {
      setIsActive('hidden-nav');
    }
  }

  const navToggle = (e) => { // Hide main nav on link or search click
    if (e.target.tagName !== 'INPUT') {
      setIsActive('hidden-nav');
    }
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <nav>
          <ul onClick={navToggle}className={`main-nav ${isActive}`}>
            <li className="home-link">
              <Link to="/">Home</Link>
            </li>

            <li className="live-link">
              <Link to="/live-reports">Live Reports</Link>
            </li>

            <li className="about-link">
              <Link to="/about">About</Link>
            </li>

            <li className="search-link">
              <Search />
            </li>
          </ul>
          <div className="res-nav">
            <p>CRYPTONITE.com</p>
            <button type="button" onClick={btnToggle} className="btn-toggle-nav">{isActive === 'hidden-nav' ? <span>&#x2630;</span> : <span className="close-entity">&times;</span>}</button>
          </div>
        </nav>
        
        <Switch>
          <Route path="/live-reports">
            <LiveReports />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/search-result">
             <SearchResult />
          </Route>

          <Route path="/">
             <Coins />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;