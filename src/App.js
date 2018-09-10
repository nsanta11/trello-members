import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
// import logo from './logo.svg';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment'
import Grid from '@material-ui/core/Grid';
import './App.css';
import Card from '@material-ui/core/Card'
import customTheme from "./components/calendar/Calendar.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from "./components/navbar/Navbar.js";
import MemberCard from "./components/member/MemberCard";
import ButtonYesterday from "./components/filterYesterday/FilterYesterday";
import DatePickerValueFrom from "./components/calendar/Calendar.js";
import DatePickerValueTo from "./components/calendar-to/CalendarTo.js";
// import GuttersGrid from "./components/grid/Grid.js";
import formattedDateFrom from "./components/calendar/Calendar.js";
import formattedDateTo from "./components/calendar-to/CalendarTo.js";
import { grey100 } from 'material-ui/styles/colors';
import { purple600, white } from 'material-ui/styles/colors';


// import moment from 'moment'
// import MemberData from "./components/data/MemberData.js";
// import MemberCard  from "./components/member/MemberCard.js"
const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: grey100
  },

  button1: {
    margin: theme.spacing.unit,
    backgroundColor: purple600,
    color: white
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },

  // card: {
  //   maxWidth: 275,
  //   backgroundColor: 'white',
  // },

});





class App extends Component {

  constructor(props) {
    super(props)
    //this.handleClick = this.handleClick.bind(this);
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

  handleClick = (e, days) => {
    // const date = 0
    // if (days == 6){
    //   let months = days
    //   months = moment().subtract(months, 'month').add(1, 'day')
    //   console.log(months)
    //   //  date = months.format('YYYY-MM-DD')
    //   //  console.log(date)
    // }
    // else {
    console.log(days)
    let yesterday = moment().add(-days, 'days')
    console.log(yesterday)
    const date = yesterday.format('YYYY-MM-DD')
    // }
    console.log(date)
    let today = moment().format('YYYY-MM-DD')
    console.log(today)

    // .format('YYYY-MM-DD'),
    if (date) {
      console.log(("https://www.gcumedia.com/sample-data/api/reporting/activeBoardCount-deletedBoardCount-archivedBoardCount-activeMemberCount-licensedMemberCount-inactiveMemberCount/start/" + date + "/end/" + today))

      fetch("https://www.gcumedia.com/sample-data/api/reporting/activeBoardCount-deletedBoardCount-archivedBoardCount-activeMemberCount-licensedMemberCount-inactiveMemberCount/start/" + date + "/end/" + today)
        .then(response => {
          return response.json();
        }).then(data => {

          console.log(data)
          let members = data
          console.log(members.deletedBoardCount)
          console.log((members.activeMemberCount))
          console.log((members.inactiveMemberCount))
          this.setState({ members })
          console.log("state", this.state.members)



        })

    }
  }
  //   test = () => {
  //     console.log("PEW!!!!!!!!!!!!!!!!!!!!")
  // }
  clearData = () => {
    console.log("clear?")
    // this.refs.DatePickerValueTo.setDate();
    this.DatePickerValueTo.state = null;
  }

  storeTo = (val) => {
    window.to = val
    console.log(val)
    if (window.from) {
      console.log("if")

      fetch("https://www.gcumedia.com/sample-data/api/reporting/activeBoardCount-deletedBoardCount-archivedBoardCount-activeMemberCount-licensedMemberCount-inactiveMemberCount/start/" + window.from + "/end/" + window.to)

        .then(response => {
          return response.json();
        }).then(data => {

          console.log(data)
          let members = data
          console.log(members.deletedBoardCount)
          console.log((members.activeMemberCount))
          console.log((members.inactiveMemberCount))
          this.setState({ members })
          console.log("state", this.state.members)
          console.log(window.to)


        })

    }
  }

  storeFrom(val) {
    window.from = val
    console.log(val)
  }


  render() {

    // const { isLoading, error } = this.state;
    const { members, yesterday } = this.state
    const customColumnStyle = { width: 200, height: 250, backgroundColor: 'white', align: 'left' };


    return (
      <div className="App">
        <Calendar-to />
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
          <MuiThemeProvider theme={customTheme}>
            <DatePickerValueTo sendDatato={this.storeTo} />
            {/* endDate={this.state.formattedDateTo} */}
          </MuiThemeProvider>
        </div>
        {/* <div>
          <GuttersGrid />
        </div> */}
        <div>
          <Button variant="contained" color="primary" className="button1" onClick={(e) => this.handleClick(e, 1800)}>
            All Time
          </Button>
        </div>
        <div>
          <Button variant="contained" color="primary" className="button1" onClick={(e) => this.handleClick(e, 1)}>
            Yesterday
          </Button>
        </div>
        <div>
          <Button variant="contained" color="primary" className="button1" onClick={(e) => this.handleClick(e, 7)}>
            Last 7 Days
          </Button>
        </div>
        <div>
          <Button variant="contained" color="primary" className="button1" onClick={(e) => this.handleClick(e, 30)}>
            Last 30 Days
          </Button>
        </div>
        <div>
          <Button variant="contained" color="primary" className="button1" onClick={(e) => this.handleClick(e, 182)}>
            Last 6 Months
          </Button>
        </div>
        <div>
          <Button variant="contained" color="secondary" className="button1" onClick={(e) => this.clearData()}>
            Clear
          </Button>
        </div>

        <div>
          <MemberCard activeMembers={this.state.members.activeMemberCount} inactiveMembers={this.state.members.inactiveMemberCount} licensedMembers={this.state.members.licensedMemberCount} activeBoard={this.state.members.activeBoardCount} deletedBoard={this.state.members.deletedBoardCount} archivedBoard={this.state.members.archivedBoardCount} />
        </div>


      </div>

    );

  }
}

export default App;
