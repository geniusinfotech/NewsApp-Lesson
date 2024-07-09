import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  }

  render() {
    const { isDarkMode } = this.state;
    const themeClass = isDarkMode ? 'dark-mode' : 'light-mode';
    return (
      <Router>
        <div className={`app ${themeClass}`}>
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={this.toggleDarkMode} />
          <Routes>
            <Route path='/' element={<News key="general" pageSize={6} country={"in"} category={"general"} />} />
            <Route path='/technology' element={<News key="technology" pageSize={6} country={"in"} category={"technology"} />} />
            <Route path='/science' element={<News key="science" pageSize={6} country={"in"} category={"science"} />} />
            <Route path='/health' element={<News key="health" pageSize={6} country={"in"} category={"health"} />} />
            <Route path='/entertainment' element={<News key="entertainment" pageSize={6} country={"in"} category={"entertainment"} />} />
            <Route path='/business' element={<News key="business" pageSize={6} country={"in"} category={"business"} />} />
            <Route path='/sports' element={<News key="sports" pageSize={6} country={"in"} category={"sports"} />} />
          </Routes>

        </div>

      </Router>
    )
  }
}

