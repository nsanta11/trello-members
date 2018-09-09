import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
// import logo from './logo.svg';
import axios from "axios";
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from "./components/navbar/Navbar.js";
import MemberCard from "./components/member/MemberCard";
import DatePickerValueFrom from "./components/calendar/Calendar.js";
import DatePickerValueTo from "./components/calendar-to/CalendarTo.js";
import formattedDateFrom from "./components/calendar/Calendar.js";
import formattedDateTo from "./components/calendar-to/CalendarTo.js";
// import moment from 'moment'
// import MemberData from "./components/data/MemberData.js";
// import MemberCard  from "./components/member/MemberCard.js"

// const query = "https://www.gcumedia.com/sample-data/api/reporting/activeMemberCount-licensedMemberCount-inactiveMemberCount/start/" + formattedDateFrom + "/end/" + formattedDateTo

// console.log(query);

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      formattedDateFrom: '',
      formattedDateTo,
      isLoading: true,
      members: [],
      error: null,
      data: null,
      member: ""
    }

  }
  // state = {
  //   formattedDateFrom,
  //   formattedDateTo,
  // };


  // getMemberData = () => {
  //   return axios.get(query).then(response => console.log(response));
  // }

  //working for console.log!!!!
  // componentDidMount() {
  //   fetch("https://www.gcumedia.com/sample-data/api/reporting/activeMemberCount-licensedMemberCount-inactiveMemberCount/start/2000-01-01/end/2018-09-08")
  //     .then(response => response.json())
  //     .then((data ) => {
  //       console.log((data.activeMemberCount));
  //       console.log((data.inactiveMemberCount))
  //       data.toString();
  //       console.log(this.state.members)
  //       // let members = data
  // })
  //   // this.setState({members})
  // }

  componentDidMount() {
    fetch("https://www.gcumedia.com/sample-data/api/reporting/activeMemberCount-licensedMemberCount-inactiveMemberCount/start/2000-01-01/end/2018-09-08")
      .then(response => {
        return response.json();
      }).then(data => {

        console.log(data)
        let members = data
      
        console.log((members.activeMemberCount))
        console.log((members.inactiveMemberCount))
        this.setState({ members })
        console.log("state", this.state.members)

      })

  }

  storeTo(val) {
    window.to = val
    console.log(val)
  }

  storeFrom(val) {
    window.from = val
    console.log(val)
    console.log(window.to)
    console.log("https://www.gcumedia.com/sample-data/api/reporting/activeMemberCount-licensedMemberCount-inactiveMemberCount/start/" + window.from + "/end/" + window.to)
  }

  // "https://www.gcumedia.com/sample-data/api/reporting/activeMemberCount-licensedMemberCount-inactiveMemberCount/start/2000-01-01/end/2018-09-08"


  render() {

    // const { isLoading, error } = this.state;
    const { members } = this.state;

    return (
      <div className="App">
        <Calendar-to />;
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
            <DatePickerValueFrom sendDatafrom={this.storeFrom} />
          </MuiThemeProvider>
        </div>
        <div>
          <MuiThemeProvider>
            <DatePickerValueTo sendDatato={this.storeTo} />
            {/* endDate={this.state.formattedDateTo} */}
          </MuiThemeProvider>
        </div>

        <div className="container2">
          <div className="container1">
            <h1>Members</h1>
            <p>{this.state.members.activeMemberCount}
            </p>
            <p>{this.state.members.inactiveMemberCount}
            </p>
            <p>{this.state.members.licensedMemberCount}
            </p>
          </div>
        </div>
      </div>

    );

  }
}

export default App;
