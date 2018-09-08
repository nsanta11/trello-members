import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import DatePicker from '@material-ui/core/Datepicker'
// import DatePicker from 'material-ui/DatePicker';
import NavBar from "./components/navbar/Navbar.js";
import DatePickerExampleSimple from "./components/calendar/Calendar.js";
// import MemberData from "./components/data/MemberData.js";
// import MemberCard  from "./components/member/MemberCard.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
          {/* <MemberData /> */}
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Filters
        </p>
        <div>
          <MuiThemeProvider>
            <DatePickerExampleSimple />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
