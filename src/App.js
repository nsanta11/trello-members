import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
// import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import DatePicker from '@material-ui/core/Datepicker'
// import DatePicker from 'material-ui/DatePicker';
import NavBar from "./components/navbar/Navbar.js";
import DatePickerValueFrom from "./components/calendar/Calendar.js";
import DatePickerValueTo from "./components/calendar-to/CalendarTo.js";
// import MemberData from "./components/data/MemberData.js";
// import MemberCard  from "./components/member/MemberCard.js"


class App extends Component {


componentDidMount() {
  console.log(DatePickerValueFrom.props)
}

  // componentDidMount() {
  //   console.log('Parent did mount.');
  //   console.log('Child value:', this.refs.child.value());
  // }


  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
          {/* <MemberData /> */}
        </div>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <p className="App-intro">
          Filters
        </p>
        <div>
          <MuiThemeProvider>
            <DatePickerValueFrom />
          </MuiThemeProvider>
        </div>
        <div>
          <MuiThemeProvider>
            <DatePickerValueTo />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
