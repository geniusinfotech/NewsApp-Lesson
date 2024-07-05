import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';


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
      <div className={`app ${themeClass}`}>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={this.toggleDarkMode} />
        <News pageSize={5} country={"in"} category={"health"}/>
      </div>
    )
  }
}

